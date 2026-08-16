#import <MassifMaps/MassifMaps.h>

@interface AKVectorElementEventListener : MSFVectorElementEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (BOOL)onVectorElementClickedThreaded:(MSFVectorElementClickInfo *)clickInfo;
@end