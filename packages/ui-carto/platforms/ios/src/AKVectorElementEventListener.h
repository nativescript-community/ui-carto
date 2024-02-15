#import <CartoMobileSDK/CartoMobileSDK.h>

@interface AKVectorElementEventListener : NTVectorElementEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (BOOL)onVectorElementClickedThreaded:(NTVectorElementClickInfo *)clickInfo;
@end