//
//  NSMSFHillshadeRasterTileLayer.swift
//  demosvelte
//
//  Created by Martin Guillon on 14/02/2024.
//  Copyright © 2024 NativeScript. All rights reserved.
//

import MassifMaps

@objc(NSMSFHillshadeRasterTileLayer)
@objcMembers
class NSMSFHillshadeRasterTileLayer: MSFHillshadeRasterTileLayer {
  var runOnMainThread = NSMSFMapView.RUN_ON_MAIN_THREAD

  func getElevation(_ pos: MSFMapPos, callback: @escaping (_ elevation: Double)-> Void) {
    DispatchQueue.global(qos: .background).async {
      let result = self.getElevation(pos)
      if (self.runOnMainThread) {
        DispatchQueue.main.async() {
          callback(result)
        }
      } else {
        callback(result)
      }
    }
  }
  func getElevations(_ pos: MSFMapPosVector, callback: @escaping (_ elevations: MSFDoubleVector?)-> Void) {
    DispatchQueue.global(qos: .background).async {
      let result = self.getElevations(pos)
      if (self.runOnMainThread) {
        DispatchQueue.main.async() {
          callback(result)
        }
      } else {
        callback(result)
      }
    }
  }
}
