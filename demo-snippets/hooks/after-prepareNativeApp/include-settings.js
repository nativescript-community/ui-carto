// @ts-nocheck - a NativeScript build hook, run by node, not part of the app program
const fs = require('fs');
const path = require('path');

const MARKER_START = '// >>> template-snippet: plugin include-settings.gradle (generated, do not edit)';
const MARKER_END = '// <<< template-snippet: plugin include-settings.gradle';

const INCLUDE_SETTINGS_RELATIVE_PATH = path.join('platforms', 'android', 'include-settings.gradle');

function toGradlePath(filePath) {
    return filePath.replace(/\\/g, '/');
}

function collectFromDependenciesJson(platformRoot) {
    const dependenciesJson = path.join(platformRoot, 'dependencies.json');
    if (!fs.existsSync(dependenciesJson)) {
        return null;
    }
    try {
        const dependencies = JSON.parse(fs.readFileSync(dependenciesJson, 'utf8'));
        return dependencies.map((dependency) => path.resolve(platformRoot, dependency.directory, INCLUDE_SETTINGS_RELATIVE_PATH));
    } catch (error) {
        return null;
    }
}

function collectFromProjectDependencies(projectData) {
    const dependencies = Object.keys(projectData.dependencies || {});
    return dependencies.map((dependency) => {
        try {
            return path.join(path.dirname(require.resolve(`${dependency}/package.json`, { paths: [projectData.projectDir] })), INCLUDE_SETTINGS_RELATIVE_PATH);
        } catch (error) {
            return path.join(projectData.projectDir, 'node_modules', dependency, INCLUDE_SETTINGS_RELATIVE_PATH);
        }
    });
}

function stripGeneratedBlock(content) {
    const start = content.indexOf(MARKER_START);
    const end = content.indexOf(MARKER_END);
    if (start === -1 || end === -1 || end < start) {
        return content;
    }
    return content.slice(0, start) + content.slice(end + MARKER_END.length);
}

module.exports = function (hookArgs) {
    const platformData = hookArgs && hookArgs.platformData;
    const projectData = hookArgs && hookArgs.projectData;
    if (!platformData || !projectData || platformData.platformNameLowerCase !== 'android') {
        return;
    }

    const platformRoot = platformData.projectRoot;
    const settingsGradlePath = path.join(platformRoot, 'settings.gradle');
    if (!fs.existsSync(settingsGradlePath)) {
        return;
    }

    const candidates = collectFromDependenciesJson(platformRoot) || collectFromProjectDependencies(projectData);
    const includes = candidates.filter((candidate, index) => fs.existsSync(candidate) && candidates.indexOf(candidate) === index);

    const currentContent = fs.readFileSync(settingsGradlePath, 'utf8');
    let newContent = stripGeneratedBlock(currentContent).replace(/\s+$/, '') + '\n';
    if (includes.length) {
        const applies = includes.map((include) => `apply from: "${toGradlePath(include)}"`).join('\n');
        newContent += `\n${MARKER_START}\n${applies}\n${MARKER_END}\n`;
    }

    if (newContent !== currentContent) {
        fs.writeFileSync(settingsGradlePath, newContent);
    }
};
