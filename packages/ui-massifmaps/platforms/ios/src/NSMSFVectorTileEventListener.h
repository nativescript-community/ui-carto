#import <MassifMaps/MassifMaps.h>

@interface NSMSFVectorTileEventListener : MSFVectorTileEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (BOOL)onVectorTileClickedThreaded:(MSFVectorTileClickInfo *)clickInfo;
@end