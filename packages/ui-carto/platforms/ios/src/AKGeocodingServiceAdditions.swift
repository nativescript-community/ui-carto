//
//  AKGeocodingServiceAdditions.swift
//  demosvelte
//
//  Created by Martin Guillon on 14/02/2024.
//  Copyright © 2024 NativeScript. All rights reserved.
//

import Foundation
import CartoMobileSDK
import SwiftTryCatch

@objc(AKGeocodingServiceAdditions)
@objcMembers
class AKGeocodingServiceAdditions: NSObject {
    static var runOnMainThread = AKMapView.RUN_ON_MAIN_THREAD
    static func calculateAddress (_ service: NTGeocodingService, _ request: NTGeocodingRequest, _ callback: @escaping (_ result: NTGeocodingResultVector?, _ error: NSException?) -> Void) {
        DispatchQueue.global(qos: .background).async {
            SwiftTryCatch.try {
                let result = service.calculateAddresses(request)
                if (runOnMainThread) {
                    DispatchQueue.main.async() {
                        callback(result, nil)
                    }
                } else {
                    callback(result, nil)
                }
            } catch: { error in
                callback(nil, error)
            } finally: {
            }
            
        }
    }
    
    static func calculateAddressReverse (_ service: NTReverseGeocodingService, _ request: NTReverseGeocodingRequest, _ callback: @escaping (_ result: NTGeocodingResultVector?, _ error: NSException?) -> Void) {
        DispatchQueue.global(qos: .background).async {
            SwiftTryCatch.try {
                let result = service.calculateAddresses(request)
                if (runOnMainThread) {
                    DispatchQueue.main.async() {
                        callback(result, nil)
                    }
                } else {
                    callback(result, nil)
                }
            } catch: { error in
                callback(nil, error)
            } finally: {
            }
            
        }
    }
}
