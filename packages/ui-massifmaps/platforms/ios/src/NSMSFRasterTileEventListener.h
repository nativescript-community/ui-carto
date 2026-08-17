#import <MassifMaps/MassifMaps.h>

@interface AKRasterTileEventListener : MSFRasterTileEventListener

@property (nonatomic, assign) BOOL runOnMainThread;

- (BOOL)onRasterTileClickedThreaded:(MSFRasterTileClickInfo *)clickInfo;

@end