import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { gradleCacheDir } from './config.mjs';

/**
 * Gradle stores a resolved artifact at
 *   <cache>/<group>/<artifact>/<version>/<sha1-of-the-file>/<file>
 * The directory name really is the SHA-1 of the file itself, so we can populate
 * the cache ourselves after downloading and gradle will happily reuse it.
 */
function artifactFileName({ artifact, version, variant }) {
    const classifier = variant && variant !== 'full' ? `-${variant}` : '';
    return `${artifact}-${version}${classifier}.aar`;
}

export function findInGradleCache(coords) {
    const { group, artifact, version } = coords;
    const versionDir = path.join(gradleCacheDir(), group, artifact, version);
    if (!existsSync(versionDir)) {
        return null;
    }
    const wanted = artifactFileName(coords);
    for (const sha of readdirSync(versionDir)) {
        const candidate = path.join(versionDir, sha, wanted);
        if (existsSync(candidate)) {
            return candidate;
        }
    }
    return null;
}

/** JitPack serves `com.github.<user>` groups; anything else we treat as Maven Central. */
function remoteUrl({ group, artifact, version, variant }) {
    const groupPath = group.replace(/\./g, '/');
    const classifier = variant && variant !== 'full' ? `-${variant}` : '';
    const file = `${artifact}-${version}${classifier}.aar`;
    const host = group.startsWith('com.github.') ? 'https://jitpack.io' : 'https://repo1.maven.org/maven2';
    return `${host}/${groupPath}/${artifact}/${version}/${file}`;
}

export async function downloadIntoGradleCache(coords, log = console.log) {
    const url = remoteUrl(coords);
    log(`  downloading ${url}`);

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText} for ${url}`);
    }
    const bytes = Buffer.from(await res.arrayBuffer());
    // JitPack answers 200 with an HTML build page when the artifact is still building
    if (bytes.subarray(0, 2).toString() !== 'PK') {
        throw new Error(`${url} did not return a zip/aar - JitPack may still be building this version`);
    }

    const sha1 = createHash('sha1').update(bytes).digest('hex');
    const dir = path.join(gradleCacheDir(), coords.group, coords.artifact, coords.version, sha1);
    mkdirSync(dir, { recursive: true });

    const target = path.join(dir, artifactFileName(coords));
    const tmp = `${target}.download`;
    writeFileSync(tmp, bytes);
    renameSync(tmp, target);

    log(`  cached at ${target} (${(bytes.length / 1048576).toFixed(1)} MB)`);
    return target;
}

export async function resolveAar(coords, log = console.log) {
    const cached = findInGradleCache(coords);
    if (cached) {
        log(`  found in gradle cache: ${cached}`);
        return cached;
    }
    log(`  ${coords.group}:${coords.artifact}:${coords.version} not in gradle cache`);
    return downloadIntoGradleCache(coords, log);
}
