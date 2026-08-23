#import "NSMSFApiEventListener.h"

#ifdef NSMSF_HAS_SURFACE_API

@implementation NSMSFApiEventListener
@synthesize runOnMainThread;

- (id)init {
    if (self = [super init]) {
        self.runOnMainThread = true;
    }
    return self;
}

- (BOOL)onEventThreaded:(int)target event:(NSString *)event payload:(int)payload {
    return NO;
}

- (BOOL)onEvent:(int)target event:(NSString *)event payload:(int)payload {
    // The isMainThread check matters: an event produced ON the main queue (a tap) would deadlock
    // a plain dispatch_sync back onto it.
    if (self.runOnMainThread && ![NSThread isMainThread]) {
        __block BOOL result = NO;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onEventThreaded:target event:event payload:payload];
        });
        return result;
    }
    return [self onEventThreaded:target event:event payload:payload];
}
@end

#endif
