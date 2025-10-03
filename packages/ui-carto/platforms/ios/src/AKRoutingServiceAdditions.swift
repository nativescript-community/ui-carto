//
//  AKRoutingServiceAdditions.swift
//  demosvelte
//
//  Created by Martin Guillon on 14/02/2024.
//  Copyright © 2024 NativeScript. All rights reserved.
//

import Foundation
import CartoMobileSDK
import SwiftTryCatch

@objc(AKRoutingServiceAdditions)
@objcMembers
class AKRoutingServiceAdditions: NSObject {
    static var runOnMainThread = AKMapView.RUN_ON_MAIN_THREAD
    
    public static func stringifyRouteResult(_ result: NTRoutingResult?)-> String? {
        if ((result) != nil) {
            var array = [[ : ]]
            let instructions = result!.getInstructions()!
            for i in 0...(instructions.size()) {
                let instruction = instructions.get(Int32(i))!
                let index = instruction.getPointIndex()
                var result = [
                    "a" : instruction.getAction().rawValue,
                    "az" : round(instruction.getAzimuth()) ,
                    "dist": instruction.getDistance(),
                    "time": instruction.getTime(),
                    "index": index,
                    "angle":round(instruction.getTurnAngle()),
                    "inst": instruction.getInstruction()!
                ] as [String : Any]
                let name = instruction.getStreetName()
                if (name != nil){
                    result["name"] = name
                }
                array.append(result)
            }
            let jsonRes = ["route": [ "totatTime":result?.getTotalTime(), "totalDistance": result?.getTotalDistance()], "instructions": array] as [String : Any]
            
            do {
                let jsonData = try JSONSerialization.data(withJSONObject: jsonRes)
                return String(decoding: jsonData, as: UTF8.self)
            } catch {
                print(error.localizedDescription)
                return nil
            }
        }
        return nil
    }
    
    public static func calculateRoute (_ service: NTRoutingService, _ request: NTRoutingRequest, _ profile: String,  _ stringifyResult:Bool, _ callback: @escaping (_ result: NTRoutingResult?, _ jsonStr: String?, _ error: NSException?) -> Void) {
        
        DispatchQueue.global(qos: .background).async {
            service.setProfile(profile)
            SwiftTryCatch.try {
                let result = service.calculateRoute(request)
                let routeStr = stringifyResult ? stringifyRouteResult(result) : nil
                if (runOnMainThread) {
                    DispatchQueue.main.async() {
                        callback(result, routeStr, nil)
                    }
                } else {
                    callback(result, routeStr, nil)
                }
            } catch: { error in
                callback(nil, nil, error)
            } finally: {
            }
        }
    }
    public static func matchRoute (_ service: NTRoutingService, _ request: NTRouteMatchingRequest, _ profile: String, _ callback: @escaping (_ result: NTRouteMatchingResult?, _ error: NSException?) -> Void) {
        DispatchQueue.global(qos: .background).async {
            service.setProfile(profile)
            SwiftTryCatch.try {
                let result = service.matchRoute(request)
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
