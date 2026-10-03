export default {
  ios: {
    SPMPackages: [
      {
        name: 'massifmaps-sdk',
        libs: ['MassifMaps'],
        repositoryURL: 'https://github.com/massif-maps/MassifMaps-ios-swift.git',
        version: '6.1.1',
      },
      // { name: 'massifmaps-sdk', libs: ['MassifMaps'], path: '/Volumes/dev/carto/mobile-sdk/build/spm-local' },
      {
        name: 'massifmaps-SwiftTryCatch-sdk',
        libs: ['SwiftTryCatch'],
        repositoryURL: 'https://github.com/farfromrefug/SwiftTryCatch.git',
        version: '1.0.0',
      },
    ],
  },
}
