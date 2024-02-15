#import "AKRendererCaptureListener.h"

@implementation AKRendererCaptureListener
@synthesize runOnMainThread;
-(id)init {
     if (self = [super init])  {
       self.runOnMainThread = true;
     }
     return self;
}

- (void)onMapRenderedThreaded:(NTBitmap *)bitmap {
    // Implementation of onMapRenderedThreaded method goes here
}

- (void)onMapRendered:(NTBitmap *)bitmap {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onMapRenderedThreaded:bitmap];
        });
    } else {
        [self onMapRenderedThreaded:bitmap];
    }
}
@end