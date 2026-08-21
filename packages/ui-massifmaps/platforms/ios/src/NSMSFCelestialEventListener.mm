// SCAFFOLD - generated starting point, review before use.

#import "NSMSFCelestialEventListener.h"

@implementation NSMSFCelestialEventListener
@synthesize runOnMainThread;

-(id)init {
    if (self = [super init]) {
        self.runOnMainThread = true;
    }
    return self;
}

- (BOOL)onCelestialObjectClickedThreaded:(MSFClickInfo *)clickInfo celestialObject:(MSFCelestialObject *)celestialObject {
    return NO;
}

- (BOOL)onCelestialObjectClicked:(MSFClickInfo *)clickInfo celestialObject:(MSFCelestialObject *)celestialObject {
    if (self.runOnMainThread) {
        __block BOOL result = NO;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onCelestialObjectClickedThreaded:clickInfo celestialObject:celestialObject];
        });
        return result;
    } else {
        return [self onCelestialObjectClickedThreaded:clickInfo celestialObject:celestialObject];
    }
}

@end
