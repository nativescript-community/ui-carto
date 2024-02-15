#import <CartoMobileSDK/CartoMobileSDK.h>

@interface AKVectorTileEventListener : NTVectorTileEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (BOOL)onVectorTileClickedThreaded:(NTVectorTileClickInfo *)clickInfo;
@end