#import <MassifMaps/MassifMaps.h>

@interface NSMSFRendererCaptureListener : MSFRendererCaptureListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (void)onMapRenderedThreaded:(MSFBitmap *)bitmap;
@end