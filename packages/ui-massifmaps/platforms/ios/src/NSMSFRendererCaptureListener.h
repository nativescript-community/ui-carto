#import <MassifMaps/MassifMaps.h>

@interface AKRendererCaptureListener : MSFRendererCaptureListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (void)onMapRenderedThreaded:(MSFBitmap *)bitmap;
@end