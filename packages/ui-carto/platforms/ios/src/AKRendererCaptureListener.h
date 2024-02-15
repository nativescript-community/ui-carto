#import <CartoMobileSDK/CartoMobileSDK.h>

@interface AKRendererCaptureListener : NTRendererCaptureListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (void)onMapRenderedThreaded:(NTBitmap *)bitmap;
@end