//
//  HTTPTileDataSource.swift
//  CartoAdditions
//
//  Created by Martin Guillon on 10/3/18.
//  Copyright © 2018 Telerik A D. All rights reserved.
//

import Foundation


extension StringProtocol where Index == String.Index {
  func index(of string: Self, options: String.CompareOptions = []) -> Index? {
    return range(of: string, options: options)?.lowerBound
  }
  func endIndex(of string: Self, options: String.CompareOptions = []) -> Index? {
    return range(of: string, options: options)?.upperBound
  }
  func indexes(of string: Self, options: String.CompareOptions = []) -> [Index] {
    var result: [Index] = []
    var start = startIndex
    while start < endIndex,
      let range = self[start..<endIndex].range(of: string, options: options) {
        result.append(range.lowerBound)
        start = range.lowerBound < range.upperBound ? range.upperBound :
          index(range.lowerBound, offsetBy: 1, limitedBy: endIndex) ?? endIndex
    }
    return result
  }
  func ranges(of string: Self, options: String.CompareOptions = []) -> [Range<Index>] {
    var result: [Range<Index>] = []
    var start = startIndex
    while start < endIndex,
      let range = self[start..<endIndex].range(of: string, options: options) {
        result.append(range)
        start = range.lowerBound < range.upperBound ? range.upperBound :
          index(range.lowerBound, offsetBy: 1, limitedBy: endIndex) ?? endIndex
    }
    return result
  }
}

class AKHTTPTileDataSource: NTHTTPTileDataSource {
  private var mTileSizePixels = 256.0;
  var mEnableSSL = false;
  var isVector = false;
  var mDpi = 1.0;
  private var mOpacity = 1.0;
  private var mAutoHD = false;
  private var mVisible = true;
  var mMinimumZoomLevel = -1.0;
  var mMaximumZoomLevel = -1.0;
  
  override init!(minZoom: Int32, maxZoom: Int32, baseURL: String!) {
    
    super.init(minZoom: minZoom, maxZoom: maxZoom, baseURL: baseURL)
    self.isVector = baseURL.range(of:"mvt") != nil || baseURL.range(of:"pbf") != nil || baseURL.hasPrefix("carto.");
  }
  
  func setVisible(visible: Bool)->AKHTTPTileDataSource  {
    self.mVisible = visible;
    return self;
  }
  
  func setAutoHD(hd: Bool)->AKHTTPTileDataSource {
    self.mAutoHD = hd;
    return self;
  }

  
  func setMinimumZoomLevel(aMinimumZoomLevel: Double)->AKHTTPTileDataSource {
    self.mMinimumZoomLevel = aMinimumZoomLevel;
    return self;
  }
  
  /**
   * Sets the layer's minimum zoom level.
   */
  func setMaximumZoomLevel(aMaximumZoomLevel: Double)->AKHTTPTileDataSource {
    self.mMaximumZoomLevel = aMaximumZoomLevel;
    return self;
  }
  
  func setTileSize(size: Double)->AKHTTPTileDataSource {
    self.mTileSizePixels = size;
    return self;
  }
  
  func setOpacity(opacity:Double)->AKHTTPTileDataSource {
    self.mOpacity = opacity;
    return self;
  }
  
  func getMinimumZoomLevel()->Double {
    return self.mMinimumZoomLevel;
  }
  
  func getMaximumZoomLevel()->Double  {
    return self.mMaximumZoomLevel;
  }
  
  func getTileSizePixels() ->Double {
    return mTileSizePixels;
  }
  
  func getCenterZoom()->Double  {
    return round(mMaximumZoomLevel + mMinimumZoomLevel) / 2;
  }
  
  override func load(_ mapTile: NTMapTile!) -> NTTileData! {
    let needsHd = !isVector && mAutoHD && (mTileSizePixels / mDpi) <= 128 ;
    var x = Double(mapTile.getX());
    var y = Double(mapTile.getY());
    var z = Double(mapTile.getZoom());
    let hdZ = (needsHd ? (z + 1) : z);
    let passedMin = !isVector && mMinimumZoomLevel >= 0 && (hdZ < mMinimumZoomLevel);
    
//    if (passedMin && !mShowTileBeforeMaxZoom) {
//      return null;
//    }
    
    let passedMax = !isVector && mMaximumZoomLevel >= 0 && hdZ > mMaximumZoomLevel;
//    if (passedMax && !mShowTileAfterMaxZoom) {
//      return null;
//    }
    
    //        if (mVisible == false || mOpacity == 0.0f) {
    //            return null;
    //        }
    var tileData: NTTileData?;
    var needsCrop = false;
    var deltaCropX = 0.0;
    var deltaCropY = 0.0;
    var cropSize = 0.0;
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
      let maxZoom = (needsHd ? (mMaximumZoomLevel - 1)
        : mMaximumZoomLevel);
      let currentTileDepth = Double(mapTile.getZoom()) - maxZoom;
      let nextx = Double(mapTile.getX()) / pow(2.0, currentTileDepth);
      let nexty = Double(mapTile.getY()) / pow(2.0, currentTileDepth);
      x = floor(nextx);
      y = floor(nexty);
      z = maxZoom;
      cropSize = 1.0 / pow(2.0, currentTileDepth);
      deltaCropX = nextx - x;
      deltaCropY = nexty - y;
    }
    if (needsHd) {
      tileData = getTileFromNextZoomLevel(x:Int32(x), y:Int32(y), z:Int32(z));
    } else {
      tileData = super.load(mapTile);
    }
    if (tileData != nil) {
      if (needsCrop) {
        var image  = getUIImage(tileData:tileData!.getData());
        let width = Double(image!.size.width);
        let height = Double(image!.size.height);
        image = crop(image:image!, cropRect:CGRect(x: Int(width * deltaCropX), y: Int(height * deltaCropY), width: Int(width * cropSize), height: Int(height * cropSize)));
        
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
  
  
  func getUIImage(tileData:NTBinaryData)-> UIImage? {
    let data = tileData.getData();
  
    let nsData = NSData.init(bytes: data, length: Int(tileData.size()));
    return UIImage(data: nsData as Data);
  }

  func getNTBinaryData(image: UIImage?)->NTBinaryData? {
    let imageData = UIImagePNGRepresentation(image!) as NSData?;
    let length = imageData!.length;
    let uint8Ptr = UnsafeMutablePointer<UInt8>.allocate(capacity: length)
    imageData!.getBytes(uint8Ptr, length: length);
    return NTBinaryData.init(dataPtr: uint8Ptr, size: UInt32(length))
  }
  
  
  func mergeTileDatas(tile1:NTTileData?, tile2:NTTileData?, tile3:NTTileData?,tile4:NTTileData?) -> NTTileData? {
     if (tile1 == nil || tile2 == nil || tile3 == nil || tile4 == nil) {
         return nil;
     }
    let size = CGSize(width: 512, height: 512)
    UIGraphicsBeginImageContext(size)
    
//    let areaSize = CGRect(x: 0, y: 0, width: size.width, height: size.height)
    
    let tileData = tile1?.getData();
    if (tileData != nil) {
      let image  = getUIImage(tileData:tileData!);
      image?.draw(at: CGPoint(x:0,y:0));
    }
    
    
    let newImage:UIImage = UIGraphicsGetImageFromCurrentImageContext()!
    UIGraphicsEndImageContext()
    return NTTileData.init(data: getNTBinaryData(image:newImage));
  
  }
  
  func getTileFromNextZoomLevel(x: Int32, y: Int32, z: Int32)-> NTTileData? {
    let group = DispatchGroup()
    group.enter()
    var result:NTTileData?
    DispatchQueue.global(qos: .background).async {
      let data1 = super.load(NTMapTile(x:x * 2, y:y * 2, zoom:z + 1, frameNr:0));
      let data2 = super.load(NTMapTile(x:x * 2 + 1, y:y * 2, zoom:z + 1, frameNr:0));
      let data3 = super.load(NTMapTile(x:x * 2, y:y * 2 + 1, zoom:z + 1, frameNr:0));
      let data4 = super.load(NTMapTile(x:x * 2 + 1, y:y * 2 + 1, zoom:z + 1, frameNr:0));
      result = self.mergeTileDatas(tile1: data1, tile2: data2, tile3: data3, tile4: data4);
      group.leave()
    }
    group.wait()
    return result;
  }
  
  func crop(image:UIImage, cropRect:CGRect) -> UIImage? {
    UIGraphicsBeginImageContextWithOptions(cropRect.size, false, image.scale)
    let origin = CGPoint(x: cropRect.origin.x * CGFloat(-1), y: cropRect.origin.y * CGFloat(-1))
    image.draw(at: origin)
    let result = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext();
    
    return result
  }

}
