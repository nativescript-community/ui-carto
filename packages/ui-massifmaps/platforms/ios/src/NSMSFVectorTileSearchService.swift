import MassifMaps
import SwiftTryCatch

@objc(NSMSFVectorTileSearchService)
@objcMembers
class NSMSFVectorTileSearchService: MSFVectorTileSearchService {
    
    func findFeaturesCallback(_ request: MSFSearchRequest!, _ callback: @escaping (_ features: MSFVectorTileFeatureCollection?, _ error: NSException?) -> Void) {
        DispatchQueue.global(qos: .background).async {
            SwiftTryCatch.try {
                let result = self.findFeatures(request)
                if (NSMSFMapView.RUN_ON_MAIN_THREAD) {
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
