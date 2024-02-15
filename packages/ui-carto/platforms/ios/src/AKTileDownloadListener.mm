#import "AKTileDownloadListener.h"

@implementation AKTileDownloadListener
@synthesize runOnMainThread;
- (void)onDownloadCompletedThreaded{}
- (void)onDownloadFailedThreaded:(NTMapTile *)tile{}
- (void)onDownloadProgressThreaded:(float)progress{}
- (void)onDownloadStartingThreaded:(int)tileCount{}
-(id)init {
     if (self = [super init])  {
       self.runOnMainThread = true;
     }
     return self;
}
- (void)onDownloadFailed:(NTMapTile *)tile {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onDownloadFailedThreaded:tile];
        });
    } else {
        [self onDownloadFailedThreaded:tile];
    }
}

- (void)onDownloadCompleted {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onDownloadCompletedThreaded];
        });
    } else {
        [self onDownloadCompletedThreaded];
    }
}

- (void)onDownloadProgress:(float)progress {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onDownloadProgressThreaded:progress];
        });
    } else {
        [self onDownloadProgressThreaded:progress];
    }
}

- (void)onDownloadStarting:(int)tileCount {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onDownloadStartingThreaded:tileCount];
        });
    } else {
        [self onDownloadStartingThreaded:tileCount];
    }
}

@end