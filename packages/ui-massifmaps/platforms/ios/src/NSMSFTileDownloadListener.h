#import <MassifMaps/MassifMaps.h>

@interface NSMSFTileDownloadListener : MSFTileDownloadListener

@property BOOL runOnMainThread;

- (void)onDownloadCompletedThreaded;
- (void)onDownloadFailedThreaded:(MSFMapTile *)tile;
- (void)onDownloadProgressThreaded:(float)progress;
- (void)onDownloadStartingThreaded:(int)tileCount;

@end