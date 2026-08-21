#import <MassifMaps/MassifMaps.h>

@interface NSMSFVectorElementEventListener : MSFVectorElementEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (BOOL)onVectorElementClickedThreaded:(MSFVectorElementClickInfo *)clickInfo;
@end