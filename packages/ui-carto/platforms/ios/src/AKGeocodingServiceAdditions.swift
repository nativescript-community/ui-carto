//
//  AKGeocodingServiceAdditions.swift
//  demosvelte
//
//  Created by Martin Guillon on 14/02/2024.
//  Copyright © 2024 NativeScript. All rights reserved.
//

import Foundation
import CartoMobileSDK

@objc(AKGeocodingServiceAdditions)
@objcMembers
class AKGeocodingServiceAdditions: NSObject {
  static var runOnMainThread = AKMapView.RUN_ON_MAIN_THREAD
  static func calculateAddress (_ service: NTGeocodingService, _ request: NTGeocodingRequest, _ callback: @escaping (_ result: NTGeocodingResultVector?) -> Void) {
    DispatchQueue.global(qos: .background).async {
      let result = service.calculateAddresses(request)
      if (runOnMainThread) {
        DispatchQueue.main.async() {
          callback(result)
        }
      } else {
        callback(result)
      }
    }
  }
  
  static func calculateAddressReverse (_ service: NTReverseGeocodingService, _ request: NTReverseGeocodingRequest, _ callback: @escaping (_ result: NTGeocodingResultVector?) -> Void) {
    DispatchQueue.global(qos: .background).async {
      let result = service.calculateAddresses(request)
      if (AKMapView.RUN_ON_MAIN_THREAD) {
        DispatchQueue.main.async() {
          callback(result)
        }
      } else {
        callback(result)
      }
    }
  }
}
