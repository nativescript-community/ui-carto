//
//  NSMSFGeocodingServiceAdditions.swift
//  demosvelte
//
//  Created by Martin Guillon on 14/02/2024.
//  Copyright © 2024 NativeScript. All rights reserved.
//

import Foundation
import MassifMaps
import SwiftTryCatch

@objc(NSMSFGeocodingServiceAdditions)
@objcMembers
class NSMSFGeocodingServiceAdditions: NSObject {
    static var runOnMainThread = NSMSFMainThread.RUN_ON_MAIN_THREAD
    static func calculateAddress (_ service: MSFGeocodingService, _ request: MSFGeocodingRequest, _ callback: @escaping (_ result: MSFGeocodingResultVector?, _ error: NSException?) -> Void) {
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
    
    static func calculateAddressReverse (_ service: MSFReverseGeocodingService, _ request: MSFReverseGeocodingRequest, _ callback: @escaping (_ result: MSFGeocodingResultVector?, _ error: NSException?) -> Void) {
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
