import CartoMobileSDK

@objc(AKVectorTileSearchService)
@objcMembers
class AKVectorTileSearchService: NTVectorTileSearchService {
  
  func findFeaturesCallback(_ request: NTSearchRequest!, _ callback: @escaping (_ features: NTVectorTileFeatureCollection?) -> Void) {
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
