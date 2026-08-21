/**
 * The shaders the native MassifDemo uses, ported verbatim (DemoStyles.java).
 *
 * None of this is in the SDK: the SDK provides the mechanism - a terrain surface
 * fragment shader with `vec4 surfaceColor()`, and a full-screen PostProcessEffect with
 * an offscreen colour buffer and the packed terrain depth - and the application decides
 * what the map looks like.
 *
 * What a surface shader may read (redeclaring any of them is a compile error, and a
 * shader that fails to compile is silently dropped):
 *
 *     varying vec3  v_normal;    // unit surface normal, x east, y north, z up
 *     varying vec3  v_worldPos;
 *     varying float v_elevation; // metres, BEFORE exaggeration
 *     varying float v_dist;      // metres from the camera
 *     uniform vec3  u_sunDir;
 *     uniform vec4  u_sunColor;
 *     uniform float u_sunIntensity;
 *     uniform float u_ambientIntensity;
 *     uniform vec4  u_fogColor;
 *     uniform vec2  u_fogRange;
 *     uniform float u_time;
 *     uniform float u_zoom;
 *     uniform vec2  u_resolution;
 *     float fogAmount(float dist);
 *
 * plus every uniform named by setSurfaceParameter / setSurfaceColorParameter.
 */

/** Palette of the whole relief view. The names, the shaded surface, the ink lines and
 *  the sky all read from these, so one switch changes the lot. */
export const RELIEF_PALETTE = {
    light: { ink: '#14141a', paper: '#f7f7f4', shade: '#6c7280', sky: '#9fc6e8' },
    dark: { ink: '#e8ecf5', paper: '#10131a', shade: '#5a6070', sky: '#070a12' }
};

/** the knobs the relief look is tuned with, same defaults as DemoConfig */
export const RELIEF_DEFAULTS = {
    shadeStrength: 0.55,
    ambient: 0.35,
    haze: 0.7,
    hazeDistance: 60000,
    outlineWidth: 1.2,
    horizonBoost: 2.5,
    depthThreshold: 1,
    creaseStrength: 0.6
};

/**
 * The relief (peak-finder) surface: Lambert shading between a paper and a shade colour,
 * the distance pulling everything back towards the paper, and the resolved fog on top -
 * so a panorama reads as a stack of ever paler ridges.
 * Uniforms: uPaperColor, uShadeColor, uShadeStrength, uAmbient, uHaze, uHazeDistance.
 */
export const RELIEF_SURFACE_SHADER = `
uniform vec4 uPaperColor;
uniform vec4 uShadeColor;
uniform float uShadeStrength;
uniform float uAmbient;
uniform float uHaze;
uniform float uHazeDistance;
vec4 surfaceColor() {
    vec3 n = normalize(v_normal);
    float lambert = max(dot(n, normalize(u_sunDir)), 0.0);
    float light = mix(uAmbient, 1.0, lambert);
    vec3 color = mix(uShadeColor.rgb, uPaperColor.rgb, clamp(1.0 - uShadeStrength * (1.0 - light), 0.0, 1.0));
    color = mix(color, uPaperColor.rgb, clamp(v_dist / max(uHazeDistance, 1.0), 0.0, 1.0) * uHaze);
    color = mix(color, u_fogColor.rgb, fogAmount(v_dist));
    return vec4(color, 1.0);
}`;

/** slope angle from the surface normal, ramped green -> yellow -> red. Uniform: uMaxSlope. */
export const SLOPE_SHADER = `
uniform float uMaxSlope;
vec4 surfaceColor() {
    vec3 n = normalize(v_normal);
    float slope = degrees(acos(clamp(n.z, 0.0, 1.0)));
    float t = clamp(slope / max(uMaxSlope, 1.0), 0.0, 1.0);
    vec3 color = t < 0.5
        ? mix(vec3(0.15, 0.65, 0.25), vec3(0.95, 0.85, 0.20), t * 2.0)
        : mix(vec3(0.95, 0.85, 0.20), vec3(0.85, 0.15, 0.15), (t - 0.5) * 2.0);
    // lit like the relief shader, or every slope reads flat
    float lambert = max(dot(n, normalize(u_sunDir)), 0.0);
    color *= mix(0.55, 1.15, lambert);
    color = mix(color, u_fogColor.rgb, fogAmount(v_dist));
    return vec4(color, 1.0);
}`;

/**
 * Hypsometric tint: the classic altitude ramp (green valleys, brown mid, snow above the
 * tree line), shaded so the relief still reads. v_elevation is metres before
 * exaggeration, so the bands stay put when the exaggeration slider moves.
 * Uniforms: uMinElevation, uMaxElevation, uSnowLine, uShadeStrength.
 */
export const HYPSOMETRIC_SHADER = `
uniform float uMinElevation;
uniform float uMaxElevation;
uniform float uSnowLine;
uniform float uShadeStrength;
vec3 hypsoRamp(float t) {
    if (t < 0.25) return mix(vec3(0.30, 0.55, 0.32), vec3(0.62, 0.71, 0.40), t / 0.25);
    if (t < 0.50) return mix(vec3(0.62, 0.71, 0.40), vec3(0.78, 0.68, 0.44), (t - 0.25) / 0.25);
    if (t < 0.75) return mix(vec3(0.78, 0.68, 0.44), vec3(0.66, 0.50, 0.38), (t - 0.50) / 0.25);
    return mix(vec3(0.66, 0.50, 0.38), vec3(0.90, 0.89, 0.88), (t - 0.75) / 0.25);
}
vec4 surfaceColor() {
    vec3 n = normalize(v_normal);
    float t = clamp((v_elevation - uMinElevation) / max(uMaxElevation - uMinElevation, 1.0), 0.0, 1.0);
    vec3 color = hypsoRamp(t);
    // snow above the line, and only where the ground is not a cliff
    float snow = smoothstep(uSnowLine, uSnowLine + 250.0, v_elevation) * smoothstep(0.35, 0.75, n.z);
    color = mix(color, vec3(0.97, 0.98, 1.0), snow);
    float lambert = max(dot(n, normalize(u_sunDir)), 0.0);
    color *= mix(1.0 - uShadeStrength, 1.0 + uShadeStrength * 0.35, lambert);
    color = mix(color, u_fogColor.rgb, fogAmount(v_dist));
    return vec4(color, 1.0);
}`;

/**
 * RASTER-layer shaders. A different contract from the terrain surface ones above: these
 * replace the normal-map LIGHTING of a raster tile, so they see the tile's decoded normal
 * and - through `getRawColor()` - the untouched texel. They must return a PREMULTIPLIED
 * colour and be transparent where they draw nothing, or they grey out the map below.
 *
 *     vec4 applyLighting(lowp vec4 color, mediump vec3 normal, mediump vec3 surfaceNormal, mediump float intensity);
 */

/** hypsometric tint over the RAW terrarium DEM, for a CustomRasterTileLayer */
export const HYPSOMETRIC_RASTER_SHADER = `
vec4 applyLighting(lowp vec4 color, mediump vec3 normal, mediump vec3 surfaceNormal, mediump float intensity) {
  vec4 c = getRawColor();
  float h = (c.r * 255.0 * 256.0 + c.g * 255.0 + c.b * 255.0 / 256.0) - 32768.0;
  float t = clamp(h / 3000.0, 0.0, 1.0);
  vec3 col = mix(vec3(0.2, 0.4, 0.8), vec3(0.9, 0.9, 0.4), t);
  col = mix(col, vec3(0.5, 0.3, 0.1), clamp((h - 1500.0) / 1500.0, 0.0, 1.0));
  return vec4(col, 1.0);
}`;

/** steepness bands instead of hillshade lighting - the ski-touring look */
export const SLOPES_RASTER_SHADER = `
uniform vec4 u_shadowColor;
uniform vec4 u_highlightColor;
uniform vec4 u_accentColor;
uniform vec3 u_lightDir;
vec4 applyLighting(lowp vec4 color, mediump vec3 normal, mediump vec3 surfaceNormal, mediump float intensity) {
    mediump float lighting = max(0.0, dot(normal, u_lightDir));
    mediump float slope = acos(dot(normal, surfaceNormal)) * 180.0 / 3.14159 * 1.2;
    if (slope >= 45.0) { return vec4(0.378, 0.272, 0.358, 0.5); }
    if (slope >= 40.0) { return vec4(0.5, 0.0, 0.0, 0.5); }
    if (slope >= 35.0) { return vec4(0.455, 0.231, 0.111, 0.5); }
    if (slope >= 30.0) { return vec4(0.470, 0.451, 0.153, 0.5); }
    return vec4(0.0, 0.0, 0.0, 0.0);
}`;

/**
 * The relief OUTLINE effect, as a fragment shader for PostProcessEffect: silhouettes and
 * creases reconstructed from the packed terrain depth the renderer hands the effect.
 * This is what draws PeakFinder's ridge lines - without it the relief surface is just a
 * grey wash. Needs `terrainDepthRequired = true`.
 * Uniforms: uIntensity, uOutlineWidth, uHorizonBoost, uDepthThreshold, uCreaseStrength,
 * uDepthTexelSize, uGrazingFloor, uDistanceFade, uHaze, uInkColor, uPaperColor.
 */
export const RELIEF_OUTLINE_SHADER = `#version 100
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D uColorTex;
uniform sampler2D uTerrainDepthTex;
uniform vec2 uInvScreenSize;
uniform vec2 uProjInvScale;
uniform float uFar;
uniform float uIntensity;
uniform float uOutlineWidth;
uniform float uHorizonBoost;
uniform float uDepthThreshold;
uniform float uCreaseStrength;
uniform float uDepthTexelSize;
uniform float uGrazingFloor;
uniform float uDistanceFade;
uniform float uHaze;
uniform vec4 uInkColor;
uniform vec4 uPaperColor;

float unpackDepth(vec4 c) {
    return dot(c.rgb, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));
}

// Eye-space position of a pixel from the packed linear depth.
vec3 eyePos(vec2 uv, float depth) {
    vec2 ndc = uv * 2.0 - 1.0;
    return vec3(ndc * uProjInvScale, -1.0) * depth * uFar;
}

void main(void) {
    vec2 uv = gl_FragCoord.xy * uInvScreenSize;
    vec4 color = texture2D(uColorTex, uv);

    vec4 c0 = texture2D(uTerrainDepthTex, uv);
    float d0 = unpackDepth(c0);

    // One width for the terrain-against-terrain lines, everywhere. Widening them with
    // distance instead smears the far ranges into a solid band: up there the ridges are
    // a pixel apart. What is bold in a panorama is the SKY silhouette, and that gets its
    // own, wider test below.
    // Never narrower than uDepthTexelSize screen pixels: the terrain depth runs at half
    // resolution with nearest filtering, so a narrower step samples the same texel twice.
    vec2 delta = uInvScreenSize * max(uOutlineWidth, uDepthTexelSize);
    vec2 skyDelta = uInvScreenSize * max(uOutlineWidth * (1.0 + uHorizonBoost), uDepthTexelSize);
    vec4 cx0 = texture2D(uTerrainDepthTex, uv - vec2(delta.x, 0.0));
    vec4 cx1 = texture2D(uTerrainDepthTex, uv + vec2(delta.x, 0.0));
    vec4 cy0 = texture2D(uTerrainDepthTex, uv - vec2(0.0, delta.y));
    vec4 cy1 = texture2D(uTerrainDepthTex, uv + vec2(0.0, delta.y));
    float dx0 = unpackDepth(cx0);
    float dx1 = unpackDepth(cx1);
    float dy0 = unpackDepth(cy0);
    float dy1 = unpackDepth(cy1);

    // The local surface, from the four neighbours: a surface seen edge-on legitimately
    // changes depth fast from pixel to pixel, and a fold has to be told apart from a
    // merely oblique slope.
    vec3 p0 = eyePos(uv, d0);
    vec3 tx0 = eyePos(uv - vec2(delta.x, 0.0), dx0) - p0;
    vec3 tx1 = eyePos(uv + vec2(delta.x, 0.0), dx1) - p0;
    vec3 ty0 = eyePos(uv - vec2(0.0, delta.y), dy0) - p0;
    vec3 ty1 = eyePos(uv + vec2(0.0, delta.y), dy1) - p0;
    // Two samples on the same depth texel give a zero tangent, and normalizing that is
    // undefined - it painted the whole near field grey.
    float minLength = 1.0e-4 * d0 * uFar;
    bool tangentsValid = length(tx1) > minLength && length(ty1) > minLength;
    float grazing = 1.0;
    if (tangentsValid) {
        vec3 surfaceNormal = normalize(cross(tx1, ty1));
        grazing = abs(dot(normalize(-p0), surfaceNormal));
    }

    // Silhouette: the line belongs to the NEARER side of a depth break, so only a
    // neighbour FURTHER away counts. The threshold is relative to the depth, or the far
    // half of the view draws no line at all - and it is relaxed where the surface is seen
    // EDGE-ON, because there the depth runs away between neighbouring pixels without
    // anything being in front of anything.
    float behind = max(max(dx0 - d0, dx1 - d0), max(dy0 - d0, dy1 - d0));
    float threshold = uDepthThreshold * (0.0008 + 0.02 * d0) / max(grazing, uGrazingFloor);
    float edge = smoothstep(threshold, threshold * 2.0, behind);
    // Terrain-against-terrain lines fade with distance so the horizon is the boldest line.
    edge *= mix(1.0, uDistanceFade, d0);
    // ...and terrain against the sky always is one (coverage, not depth: a sky pixel is at
    // the far plane, which the relative threshold above would forgive).
    float skyNeighbour = 1.0 - min(
        min(texture2D(uTerrainDepthTex, uv - vec2(skyDelta.x, 0.0)).a, texture2D(uTerrainDepthTex, uv + vec2(skyDelta.x, 0.0)).a),
        min(texture2D(uTerrainDepthTex, uv - vec2(0.0, skyDelta.y)).a, texture2D(uTerrainDepthTex, uv + vec2(0.0, skyDelta.y)).a));
    edge = max(edge, skyNeighbour * c0.a);

    // Ridges and valleys: the two tangent directions away from this pixel point straight
    // apart on a flat surface (dot -1) and fold together over a crest. Done on eye
    // positions rather than on depth, so a merely oblique slope does not read as a fold.
    float cover = min(min(cx0.a, cx1.a), min(cy0.a, cy1.a)) * c0.a;
    if (uCreaseStrength > 0.0 && cover > 0.0) {
        float fold = 0.0;
        if (length(tx0) > minLength && length(tx1) > minLength) {
            fold = max(fold, 1.0 + dot(normalize(tx0), normalize(tx1)));
        }
        if (length(ty0) > minLength && length(ty1) > minLength) {
            fold = max(fold, 1.0 + dot(normalize(ty0), normalize(ty1)));
        }
        edge = max(edge, smoothstep(0.05, 0.4, fold) * uCreaseStrength * grazing * mix(1.0, uDistanceFade, d0));
    }

    // Aerial perspective: the shaded surface fades into the paper with distance, so the
    // far ranges read as pale outlines and the near ground keeps its shading.
    vec3 shaded = mix(color.rgb, uPaperColor.rgb, uHaze * d0 * c0.a);
    vec3 stylized = mix(shaded, uInkColor.rgb, edge * uInkColor.a);

    gl_FragColor = vec4(mix(color.rgb, stylized, uIntensity), 1.0);
}`;
