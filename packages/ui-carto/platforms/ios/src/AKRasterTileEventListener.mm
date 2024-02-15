#import "AKRasterTileEventListener.h"

@implementation AKRasterTileEventListener
@synthesize runOnMainThread;
- (BOOL)onRasterTileClickedThreaded:(NTRasterTileClickInfo *)clickInfo{
    return FALSE;
}

-(id)init {
     if (self = [super init])  {
       self.runOnMainThread = true;
     }
     return self;
}

- (BOOL)onRasterTileClicked:(NTRasterTileClickInfo *)clickInfo {
    if (self.runOnMainThread) {
        __block BOOL result = NO;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onRasterTileClickedThreaded:clickInfo];
        });
        return result;
    } else {
        return [self onRasterTileClickedThreaded:clickInfo];
    }
}

@end