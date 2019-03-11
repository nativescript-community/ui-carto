//
//  AKHTTPTileDataSource.h
//  CartoAdditions
//
//  Created by Martin Guillon on 3/8/19.
//  Copyright © 2019 Stefan Dragnev. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CartoMobileSDK/CartoMobileSDK.h"

NS_ASSUME_NONNULL_BEGIN

@interface AKHTTPTileDataSource : NTHTTPTileDataSource
-(id)initWithMinZoom: (int)minZoom maxZoom: (int)maxZoom baseURL: (NSString*)baseURL;

-(id) setVisible:(BOOL)value ;

-(id) setAutoHD:(BOOL)value ;
-(id) setMinimumZoomLevel:(CGFloat)value;
-(id) setMaximumZoomLevel:(CGFloat)value;

-(id) setTileSize:(CGFloat)value;
-(id) setOpacity:(CGFloat)value;

-(CGFloat) getMinimumZoomLevel;

-(CGFloat) getMaximumZoomLeve ;

-(CGFloat) getTileSizePixel ;
-(CGFloat) getCenterZoom ;

-(NTTileData*) loadTile:(NTMapTile*)mapTile;
@end

NS_ASSUME_NONNULL_END
