#import <CartoMobileSDK/CartoMobileSDK.h>

@interface AKTileDownloadListener : NTTileDownloadListener

@property BOOL runOnMainThread;

- (void)onDownloadCompletedThreaded;
- (void)onDownloadFailedThreaded:(NTMapTile *)tile;
- (void)onDownloadProgressThreaded:(float)progress;
- (void)onDownloadStartingThreaded:(int)tileCount;

@end