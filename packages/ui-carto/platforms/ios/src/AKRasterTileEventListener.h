#import <CartoMobileSDK/CartoMobileSDK.h>

@interface AKRasterTileEventListener : NTRasterTileEventListener

@property (nonatomic, assign) BOOL runOnMainThread;

- (BOOL)onRasterTileClickedThreaded:(NTRasterTileClickInfo *)clickInfo;

@end