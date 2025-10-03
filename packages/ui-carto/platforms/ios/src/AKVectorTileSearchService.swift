import CartoMobileSDK
import SwiftTryCatch

@objc(AKVectorTileSearchService)
@objcMembers
class AKVectorTileSearchService: NTVectorTileSearchService {
    
    func findFeaturesCallback(_ request: NTSearchRequest!, _ callback: @escaping (_ features: NTVectorTileFeatureCollection?, _ error: NSException?) -> Void) {
        DispatchQueue.global(qos: .background).async {
            SwiftTryCatch.try {
                let result = self.findFeatures(request)
                if (AKMapView.RUN_ON_MAIN_THREAD) {
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
