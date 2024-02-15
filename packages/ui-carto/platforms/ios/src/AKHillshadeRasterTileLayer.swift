//
//  AKHillshadeRasterTileLayer.swift
//  demosvelte
//
//  Created by Martin Guillon on 14/02/2024.
//  Copyright © 2024 NativeScript. All rights reserved.
//

import CartoMobileSDK

@objc(AKHillshadeRasterTileLayer)
@objcMembers
class AKHillshadeRasterTileLayer: NTHillshadeRasterTileLayer {
  var runOnMainThread = AKMapView.RUN_ON_MAIN_THREAD

  func getElevation(_ pos: NTMapPos, callback: @escaping (_ elevation: Double)-> Void) {
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
  func getElevations(_ pos: NTMapPosVector, callback: @escaping (_ elevations: NTDoubleVector?)-> Void) {
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
