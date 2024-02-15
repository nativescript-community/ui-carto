#import "AKVectorTileEventListener.h"

@implementation AKVectorTileEventListener
@synthesize runOnMainThread;
-(id)init {
     if (self = [super init])  {
       self.runOnMainThread = true;
     }
     return self;
}
- (BOOL)onVectorTileClickedThreaded:(NTVectorTileClickInfo *)clickInfo {
    return NO;
}

- (BOOL)onVectorTileClicked:(NTVectorTileClickInfo *)clickInfo {
    if (self.runOnMainThread) {
        __block BOOL result = NO;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onVectorTileClickedThreaded:clickInfo];
        });
        return result;
    } else {
        return [self onVectorTileClickedThreaded:clickInfo];
    }
}
@end