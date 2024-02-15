#import "AKVectorElementEventListener.h"

@implementation AKVectorElementEventListener
@synthesize runOnMainThread;
-(id)init {
     if (self = [super init])  {
       self.runOnMainThread = true;
     }
     return self;
}

- (BOOL)onVectorElementClickedThreaded:(NTVectorElementClickInfo *)clickInfo {
    return NO;
}

- (BOOL)onVectorElementClicked:(NTVectorElementClickInfo *)clickInfo {
    if (self.runOnMainThread) {
        __block BOOL result = NO;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onVectorElementClickedThreaded:clickInfo];
        });
        return result;
    } else {
        return [self onVectorElementClickedThreaded:clickInfo];
    }
}
@end
