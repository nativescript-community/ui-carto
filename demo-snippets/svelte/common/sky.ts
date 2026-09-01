import { LightOptions, SkyOptions } from '@nativescript-community/ui-massifmaps/components';

/**
 * Day cycle, ported from the native demo (DemoSky.java): ONE hour value drives the sun
 * position, the sky/horizon/ground colours, the shadow strength and a GENERATED sky
 * shader that draws the sun disc, the moon, the stars and procedural clouds.
 *
 * Nothing here touches layers, only Options, so it can be switched on and off live.
 *
 * The moon direction and the sun's arc are baked into the shader SOURCE instead of being
 * passed as uniforms: the sky shader contract has a fixed uniform set, and regenerating
 * the source when the hour changes is cheap enough for a demo.
 */

export interface SunDate {
    year: number;
    month: number;
    day: number;
}

export function today(): SunDate {
    const now = new Date();
    return { year: now.getUTCFullYear(), month: now.getUTCMonth() + 1, day: now.getUTCDate() };
}

function clamp01(value: number) {
    return Math.max(0, Math.min(1, value));
}

/** Unit vector of the sun at a given hour, in the renderer's east/north/up frame. */
function sunVectorAt(hourUtc: number, date: SunDate, latitude: number, longitude: number) {
    const probe = new LightOptions();
    probe.setSunPositionFromTime(date.year, date.month, date.day, Math.floor(hourUtc), Math.floor((hourUtc % 1) * 60), latitude, longitude);
    const az = (probe.sunAzimuth * Math.PI) / 180;
    const alt = (probe.sunAltitude * Math.PI) / 180;
    const cosAlt = Math.cos(alt);
    return [cosAlt * Math.sin(az), cosAlt * Math.cos(az), Math.sin(alt)];
}

function formatVec(v: number[]) {
    return `vec3(${v[0].toFixed(5)}, ${v[1].toFixed(5)}, ${v[2].toFixed(5)})`;
}

/**
 * Applies one hour of the day cycle. lat/lon should be the CURRENT map centre, since the
 * sun position is computed for it.
 */
export function applyDayCycleHour(light: LightOptions, sky: SkyOptions, hourUtc: number, latitude: number, longitude: number, date: SunDate = today()) {
    if (!light || !sky) {
        return;
    }
    light.setSunPositionFromTime(date.year, date.month, date.day, Math.floor(hourUtc), Math.floor((hourUtc % 1) * 60), latitude, longitude);
    const altitude = light.sunAltitude;

    // day = 1 well above the horizon, 0 below it, with civil twilight in between
    const day = clamp01((altitude + 6) / 12);
    const warm = 1 - clamp01(altitude / 25); // reddening near the horizon

    light.sunColor = `rgb(255, ${Math.round(255 - 90 * warm)}, ${Math.round(255 - 190 * warm)})`;
    light.sunIntensity = 0.15 + 0.85 * day;
    light.ambientIntensity = 0.25 + 0.55 * day;
    light.shadowStrength = 1; // the SDK fades it with the sun itself - 1 is the physical depth

    const skyR = Math.round(10 + 48 * day);
    const skyG = Math.round(14 + 102 * day);
    const skyB = Math.round(40 + 156 * day);
    const horR = Math.round(25 + (146 + 60 * warm) * day);
    const horG = Math.round(25 + 181 * day);
    const horB = Math.round(55 + 181 * day);
    sky.skyColor = `rgb(${skyR}, ${skyG}, ${skyB})`;
    sky.horizonColor = `rgb(${horR}, ${horG}, ${horB})`;
    sky.groundColor = `rgb(${Math.round(horR * 0.8)}, ${Math.round(horG * 0.8)}, ${Math.round(horB * 0.8)})`;

    // The sun's daily path is a circle; three positions on it define its plane.
    const a = sunVectorAt(6, date, latitude, longitude);
    const b = sunVectorAt(12, date, latitude, longitude);
    const c = sunVectorAt(18, date, latitude, longitude);
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const nlen = Math.hypot(n[0], n[1], n[2]);
    if (nlen > 1e-9) {
        n[0] /= nlen;
        n[1] /= nlen;
        n[2] /= nlen;
    }

    // The moon rides roughly the opposite side of the same arc, offset by the monthly phase.
    const moon = sunVectorAt((hourUtc + 12.7) % 24, date, latitude, longitude);

    sky.shaderSource = buildSkyShader(n, moon, day, hourUtc);
}

/** back to the built-in sky (SkyOptions falls back to it when the source is empty) */
export function clearSkyShader(sky: SkyOptions) {
    if (sky) {
        sky.shaderSource = '';
    }
}

function buildSkyShader(arcNormal: number[], moonDir: number[], day: number, hourUtc: number) {
    // Cloud cover and layout change with the hour: the seed is derived from it, so
    // scrubbing the slider rolls a different (but stable) sky.
    const seed = (hourUtc * 7.13) % 10;
    const cover = 0.35 + 0.25 * Math.sin(hourUtc * 0.7);
    // The sky shader wrapper already declares u_sunDir/u_sunColor/u_skyColor/u_horizonColor/
    // u_groundColor/u_fogColor/u_time - redeclaring any of them is a compile error and the
    // renderer silently falls back to the built-in sky.
    return `
const vec3 ARC_N = ${formatVec(arcNormal)};
const vec3 MOON_DIR = ${formatVec(moonDir)};
const float SEED = ${seed.toFixed(4)};
const float COVER = ${cover.toFixed(4)};
const float DAY = ${day.toFixed(4)};

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7)) + SEED) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float clouds(vec3 dir) {
  if (dir.z <= 0.02) return 0.0;
  // Project the ray onto a flat cloud deck: cheap, and the perspective is right. The
  // octaves are rotated against each other - stacking axis-aligned value noise leaves the
  // grid visible, which reads as soft squares once the sun lights them.
  vec2 p = dir.xy / dir.z * 1.7 + vec2(u_time * 0.004, 0.0);
  mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
  float f = 0.50 * noise(p);
  p = rot * p * 2.1; f += 0.25 * noise(p);
  p = rot * p * 2.3; f += 0.15 * noise(p);
  p = rot * p * 2.7; f += 0.10 * noise(p);
  float c = smoothstep(COVER, COVER + 0.28, f);
  return c * smoothstep(0.02, 0.25, dir.z); // fade them out at the horizon
}

vec4 skyColor(vec3 rayDir) {
  vec3 dir = normalize(rayDir);
  float h = clamp(dir.z, -1.0, 1.0);
  vec3 col = h < 0.0
      ? mix(u_horizonColor.rgb, u_groundColor.rgb, clamp(-h * 6.0, 0.0, 1.0))
      : mix(u_horizonColor.rgb, u_skyColor.rgb, pow(clamp(h, 0.0, 1.0), 0.45));

  // Stars, only once the sky is dark enough to see them. The cells are laid out in
  // (azimuth, elevation) - a flat projection stretches them into streaks at the horizon.
  if (DAY < 0.55 && h > 0.0) {
    vec2 sc = vec2(atan(dir.y, dir.x), asin(clamp(h, -1.0, 1.0))) * 320.0;
    vec2 cell = floor(sc);
    float pick = hash(cell);
    // One star per cell at most, drawn as a soft dot - a whole lit cell reads as a grey square.
    vec2 pos = vec2(hash(cell + 1.7), hash(cell + 5.3));
    float d = length(fract(sc) - pos);
    float star = step(0.982, pick) * smoothstep(0.34, 0.02, d) * (0.4 + 0.6 * fract(pick * 37.0));
    col += vec3(star * (0.55 - DAY) * 1.7 * smoothstep(0.0, 0.10, h));
  }

  col = mix(col, vec3(1.0, 1.0, 0.98), clouds(dir) * (0.35 + 0.5 * DAY));

  // The terrain fog, blended up from the horizon: the haze the ground fades into
  // continues into the sky.
  col = mix(col, u_fogColor.rgb, fogAmount(dir));

  // Sun: disc, then glow, tinted toward the sun colour rather than added, so a bright sky
  // does not saturate to white far from it.
  float ds = length(dir - normalize(u_sunDir));
  col = mix(col, u_sunColor.rgb, clamp(1.0 - smoothstep(0.0, 0.12, ds), 0.0, 1.0) * 0.85);
  col = mix(col, u_sunColor.rgb * 1.15, (1.0 - smoothstep(0.0, 0.03, ds)));

  // Moon: a small disc with a soft halo, brighter as the sky darkens.
  float dm = length(dir - normalize(MOON_DIR));
  float moonLit = 0.35 + 0.65 * (1.0 - DAY);
  col = mix(col, vec3(0.86, 0.88, 0.92), (1.0 - smoothstep(0.0, 0.020, dm)) * moonLit);
  col = mix(col, vec3(0.70, 0.74, 0.85), (1.0 - smoothstep(0.02, 0.09, dm)) * 0.18 * moonLit);

  return vec4(col, 1.0);
}
`;
}
