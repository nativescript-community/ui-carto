const sourceMapLocation = '/node_modules/nativescript-carto/platforms/ios/module.modulemap';
const targetMapLocation = '/platforms/ios/Pods/CartoMobileSDK/CartoMobileSDK.framework/Modules/module.modulemap';

import * as fs from 'fs';
import * as path from 'path';
module.exports = function(logger, platformsData, projectData, hookArgs, $usbLiveSyncService) {
    const targetMapFolder = path.dirname(projectData.projectDir + targetMapLocation);
    if (!fs.existsSync(targetMapFolder)) {
        try {
            fs.mkdirSync(targetMapFolder);
        } catch (e) {}
    }
    if (fs.existsSync(targetMapFolder)) {
        fs.copyFileSync(projectData.projectDir + sourceMapLocation, projectData.projectDir + targetMapLocation);
    }
};
