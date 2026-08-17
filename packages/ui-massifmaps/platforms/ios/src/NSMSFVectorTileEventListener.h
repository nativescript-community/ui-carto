#import <MassifMaps/MassifMaps.h>

@interface AKVectorTileEventListener : MSFVectorTileEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (BOOL)onVectorTileClickedThreaded:(MSFVectorTileClickInfo *)clickInfo;
@end