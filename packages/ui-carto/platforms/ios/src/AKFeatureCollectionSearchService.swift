//
//  AKFeatureCollectionSearchService.swift
//  demosvelte
//
//  Created by Martin Guillon on 14/02/2024.
//  Copyright © 2024 NativeScript. All rights reserved.
//
import CartoMobileSDK

@objc(AKFeatureCollectionSearchService)
@objcMembers
class AKFeatureCollectionSearchService: NTFeatureCollectionSearchService {
  
  func findFeaturesCallback(_ request: NTSearchRequest!, _ callback: @escaping (_ features: NTFeatureCollection?) -> Void) {
    DispatchQueue.global(qos: .background).async {
      let result = self.findFeatures(request)
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

