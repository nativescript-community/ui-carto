//
//  NSMSFFeatureCollectionSearchService.swift
//  demosvelte
//
//  Created by Martin Guillon on 14/02/2024.
//  Copyright © 2024 NativeScript. All rights reserved.
//
import MassifMaps

@objc(NSMSFFeatureCollectionSearchService)
@objcMembers
class NSMSFFeatureCollectionSearchService: MSFFeatureCollectionSearchService {
  
  func findFeaturesCallback(_ request: MSFSearchRequest!, _ callback: @escaping (_ features: MSFFeatureCollection?) -> Void) {
    DispatchQueue.global(qos: .background).async {
      let result = self.findFeatures(request)
      if (NSMSFMapView.RUN_ON_MAIN_THREAD) {
        DispatchQueue.main.async() {
          callback(result)
        }
      } else {
        callback(result)
      }
    }
  }
}

