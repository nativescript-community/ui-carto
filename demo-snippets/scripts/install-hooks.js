/**
 * Installs the hooks declared in package.json into every sibling `demo*` NativeScript project.
 *
 * `@nativescript/hook` walks up from the package folder to find the NativeScript project, which
 * does not work here: this package lives at the monorepo root and is only symlinked into the demos.
 */
const fs = require('fs');
const path = require('path');

const packageDir = path.resolve(__dirname, '..');
const packageJson = require(path.join(packageDir, 'package.json'));
const hooks = (packageJson.nativescript && packageJson.nativescript.hooks) || [];

function isNativeScriptProject(dir) {
    return fs.existsSync(path.join(dir, 'nativescript.config.ts')) || fs.existsSync(path.join(dir, 'nativescript.config.js'));
}

function getDemoProjects() {
    const rootDir = path.resolve(packageDir, '..');
    return fs
        .readdirSync(rootDir)
        .filter((entry) => entry.startsWith('demo'))
        .map((entry) => path.join(rootDir, entry))
        .filter((dir) => fs.statSync(dir).isDirectory() && isNativeScriptProject(dir));
}

function hookFileName(hook) {
    return `${(hook.name || packageJson.name).replace(/@/g, '').replace(/\//g, '-')}.js`;
}

for (const projectDir of getDemoProjects()) {
    for (const hook of hooks) {
        const hookDir = path.join(projectDir, 'hooks', hook.type);
        fs.mkdirSync(hookDir, { recursive: true });
        const hookPath = path.join(hookDir, hookFileName(hook));
        const content = `module.exports = require(${JSON.stringify(`${packageJson.name}/${hook.script}`)});\n`;
        if (!fs.existsSync(hookPath) || fs.readFileSync(hookPath, 'utf8') !== content) {
            fs.writeFileSync(hookPath, content);
        }
    }
}
