#import <MassifMaps/MassifMaps.h>

@interface NSMSFRasterTileEventListener : MSFRasterTileEventListener

@property (nonatomic, assign) BOOL runOnMainThread;

- (BOOL)onRasterTileClickedThreaded:(MSFRasterTileClickInfo *)clickInfo;

@end