//
//  AKHTTPTileDataSource.m
//  CartoAdditions
//
//  Created by Martin Guillon on 3/8/19.
//  Copyright © 2019 Stefan Dragnev. All rights reserved.
//

#import "AKHTTPTileDataSource.h"

@implementation AKHTTPTileDataSource
{
   BOOL mTileSizePixels;
   BOOL mEnableSSL;
  BOOL isVector ;
  CGFloat mDpi ;
  CGFloat mOpacity;
   BOOL mAutoHD ;
   BOOL mVisible;
  CGFloat mMinimumZoomLevel ;
  CGFloat mMaximumZoomLevel;
}

-(id)init {
  if (self = [super init]) {
    mTileSizePixels = 256.0;
    mEnableSSL = false;
    isVector = false;
    mDpi = 1.0;
    mOpacity = 1.0;
    mAutoHD = false;
    mVisible = true;
    mMinimumZoomLevel = -1.0;
    mMaximumZoomLevel = -1.0;
  }
  return self;
}

-(id)initWithMinZoom: (int)minZoom maxZoom: (int)maxZoom baseURL: (NSString*)baseURL {
  if (self = [super initWithMinZoom:minZoom maxZoom:maxZoom baseURL:baseURL]) {
    isVector = [baseURL containsString:@"mvt"] || [baseURL containsString:@"pbf"] || [baseURL hasPrefix:@"carto."];
  }
  return self;
}

-(id) setVisible:(BOOL)value  {
  mVisible = value;
  return self;
}

-(id) setAutoHD:(BOOL)value  {
  mAutoHD = value;
  return self;
}
-(id) setMinimumZoomLevel:(CGFloat)value  {
  mMinimumZoomLevel = value;
  return self;
}
-(id) setMaximumZoomLevel:(CGFloat)value  {
  mMinimumZoomLevel = value;
  return self;
}

-(id) setTileSize:(CGFloat)value  {
  mTileSizePixels = value;
  return self;
}
-(id) setOpacity:(CGFloat)value  {
  mOpacity = value;
  return self;
}

-(CGFloat) getMinimumZoomLevel {
  return mMinimumZoomLevel;
}

-(CGFloat) getMaximumZoomLeve  {
  return mMaximumZoomLevel;
}

-(CGFloat) getTileSizePixel {
  return mTileSizePixels;
}
-(CGFloat) getCenterZoom  {
  return roundf(mMaximumZoomLevel + mMinimumZoomLevel) / 2;
}

-(NTTileData*) loadTile:(NTMapTile*)mapTile {
  BOOL needsHd = !isVector && mAutoHD && (mTileSizePixels / mDpi) <= 128 ;
  double x = [mapTile getX];
  double y = [mapTile getY];
  double z = [mapTile getZoom];
  double hdZ = (needsHd ? (z + 1) : z);
  BOOL passedMin = !isVector && mMinimumZoomLevel >= 0 && (hdZ < mMinimumZoomLevel);
  
  //    if (passedMin && !mShowTileBeforeMaxZoom) {
  //      return null;
  //    }
  
  BOOL passedMax = !isVector && mMaximumZoomLevel >= 0 && hdZ > mMaximumZoomLevel;
  //    if (passedMax && !mShowTileAfterMaxZoom) {
  //      return null;
  //    }
  
  //        if (mVisible == false || mOpacity == 0.0f) {
  //            return null;
  //        }
  NTTileData* tileData = NULL;
  BOOL needsCrop = false;
  double deltaCropX = 0.0;
  double deltaCropY = 0.0;
  double cropSize = 0.0;
  if (passedMin) {
    // needsCrop = true;
    // int minZoom = (int) (needsHd ? (mMinimumZoomLevel - 1)
    // : mMinimumZoomLevel);
    // float currentTileDepth = mMinimumZoomLevel - z;
    // double nextx = x / Math.pow(2.0, currentTileDepth);
    // double nexty = y / Math.pow(2.0, currentTileDepth);
    // x = (int) Math.floor(nextx);
    // y = (int) Math.floor(nexty);
    // z = maxZoom;
    // cropSize = 1.0f / Math.pow(2.0, currentTileDepth);
    // deltaCropX = nextx - x;
    // deltaCropY = nexty - y;
  } else if (passedMax) {
    needsCrop = true;
    CGFloat maxZoom = (needsHd ? (mMaximumZoomLevel - 1)
                   : mMaximumZoomLevel);
    double currentTileDepth = z - maxZoom;
    double nextx = x / pow(2.0, currentTileDepth);
    double nexty = y / pow(2.0, currentTileDepth);
    x = floor(nextx);
    y = floor(nexty);
    z = maxZoom;
    cropSize = 1.0 / pow(2.0, currentTileDepth);
    deltaCropX = nextx - x;
    deltaCropY = nexty - y;
  }
  if (needsHd) {
    tileData = [self getTileFromNextZoomLevel:x y:y z:z];
  } else {
    tileData = [super loadTile:mapTile];
  }
  if (tileData != nil) {
    if (needsCrop) {
      UIImage* image  = [self getUIImage:[tileData getData]];
      if (image) {
        double width = image.size.width;
        double height = image.size.height;
        image = [self crop
                 :image cropRect:CGRectMake( (int)(width * deltaCropX) , (int)(height * deltaCropY), (int)(width * cropSize), (int)(height * cropSize))];
      }
      
      
      //        var data = tileData.getData().getData();
      //        Bitmap tileImage = BitmapFactory.decodeByteArray(data, 0, data.length, null);
      //        if (tileImage != null) {
      //          Bitmap oldBitmap = tileImage;
      //          final int width = tileImage.getWidth();
      //          final int height = tileImage.getHeight();
      //          tileImage = Bitmap.createBitmap(tileImage,
      //                                          (int) (width * deltaCropX), (int) (height * deltaCropY),
      //                                          (int) (width * cropSize), (int) (height * cropSize));
      //          if (oldBitmap != tileImage) {
      //            oldBitmap.recycle();
      //          }
      //          return new TileData(BitmapUtils.createBitmapFromAndroidBitmap(tileImage).getPixelData());
    } else {
      return nil;
    }
    
  }
  
  return tileData;
}


-(UIImage*) getUIImage:(NTBinaryData*)tileData {
  unsigned char * data = [tileData getData];
  NSUInteger length = [tileData size];
  
  NSData* nsData = [NSData dataWithBytes:data length:length];
  return [UIImage imageWithData:nsData];
}

-(NTBinaryData*) getNTBinaryData:(UIImage*)image {
  NSData*  imageData = UIImagePNGRepresentation(image) ;
  NSUInteger length = [imageData length];
  unsigned char *bytePtr = (unsigned char *)[imageData bytes];
  return [[NTBinaryData alloc] initWithDataPtr:bytePtr size:(int)length];
}


-(NTTileData*) mergeTileDatas:(NTTileData*)tile1 tile2:(NTTileData*)tile2 tile3:(NTTileData*)tile3 tile4:(NTTileData*)tile4 {
  if (tile1 == nil || tile2 == nil || tile3 == nil || tile4 == nil) {
    return nil;
  }
  CGSize size = CGSizeMake(512, 512);
  UIGraphicsBeginImageContext(size);
  
  //    let areaSize = CGRect(x: 0, y: 0, width: size.width, height: size.height)
  
  NTBinaryData* tileData = [tile1 getData];
  if (tileData != nil) {
    UIImage* image  = [self getUIImage:tileData];
    [image drawAtPoint:CGPointMake(0,0)];
//    image?.draw(at: CGPoint(x:0,y:0));
  }
  
  
  UIImage* newImage = UIGraphicsGetImageFromCurrentImageContext();
  UIGraphicsEndImageContext();
  return [[NTTileData alloc ] initWithData:[self getNTBinaryData:newImage]];
  
}

-(NTTileData*) getTileFromNextZoomLevel:(int)x y:(int)y z:(int)z {
//  let group = DispatchGroup()
//  group.enter()
  __block NTTileData* result = nil;
  dispatch_queue_t serialQ = dispatch_queue_create("serialQ", DISPATCH_QUEUE_SERIAL);
  dispatch_async(serialQ, ^
  {
    NTTileData* data1 = [super loadTile:[[NTMapTile alloc] initWithX:x * 2 y:y * 2 zoom:z + 1 frameNr:0]];
    NTTileData* data2 = [super loadTile:[[NTMapTile alloc] initWithX:x * 2 + 1 y:y * 2 zoom:z + 1 frameNr:0]];
    NTTileData* data3 = [super loadTile:[[NTMapTile alloc] initWithX:x * 2  y:y * 2 + 1 zoom:z + 1 frameNr:0]];
    NTTileData* data4 = [super loadTile:[[NTMapTile alloc] initWithX:x * 2 + 1 y:y * 2 + 1 zoom:z + 1 frameNr:0]];

    result = [self mergeTileDatas: data1 tile2: data2 tile3: data3 tile4: data4];
  });
  dispatch_sync(serialQ, ^{ });
//dispatch_async(dispatch_get_global_queue( DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
//    group.leave()
//  })
//  group.wait()
  return result;
}

-(UIImage*) crop: (UIImage*)image  cropRect:(CGRect)cropRect {
  UIGraphicsBeginImageContextWithOptions(cropRect.size, false, image.scale);
  CGPoint origin = CGPointMake( cropRect.origin.x * -1.0,  cropRect.origin.y * -1.0);
  [image drawAtPoint:origin];
  UIImage* result = UIGraphicsGetImageFromCurrentImageContext();
  UIGraphicsEndImageContext();
  
  return result;
}
@end
