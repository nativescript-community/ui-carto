
import MassifMaps

@objc(NSMSFMapView)
@objcMembers
class NSMSFMapView: MSFMapView {
  static var RUN_ON_MAIN_THREAD = true
  var listener: NSMSFMapEventListener? = nil
  
  class MapEventListener : MSFMapEventListener {
    unowned var parent: NSMSFMapView? = nil
    init(_ parent: NSMSFMapView) {
      super.init()
      self.parent = parent
    }
    override init!(cptr: UnsafeMutableRawPointer!, swigOwnCObject ownCObject: Bool) {
      super.init(cptr: cptr, swigOwnCObject: ownCObject)
    }
    
    
    override func onMapIdle() {
      if (!NSMSFMapView.RUN_ON_MAIN_THREAD) {
        parent!.listener?.onMapIdle()
      } else {
        DispatchQueue.main.async() {
          self.parent!.listener?.onMapIdle()
        }
      }
    }
    override func onMapStable(_ reason: MSFMapMoveReason) {
      let value = reason.rawValue
      if (!NSMSFMapView.RUN_ON_MAIN_THREAD) {
        parent!.listener?.onMapStable(value)
      } else {
        DispatchQueue.main.async() {
          self.parent!.listener?.onMapStable(value)
        }
      }
    }
    override func onMapMoved(_ reason: MSFMapMoveReason) {
      let value = reason.rawValue
      if (!NSMSFMapView.RUN_ON_MAIN_THREAD) {
        parent!.listener?.onMapMoved(value)
      } else {
        DispatchQueue.main.async() {
          self.parent!.listener?.onMapMoved(value)
        }
      }
    }
    override func onMapClicked(_ mapClickInfo: MSFMapClickInfo!) {
      if (!NSMSFMapView.RUN_ON_MAIN_THREAD) {
        parent!.listener?.onMapClicked(mapClickInfo)
      } else {
        DispatchQueue.main.async() {
          self.parent!.listener?.onMapClicked(mapClickInfo)
        }
      }
    }
    override func onMapInteraction(_ mapInteractionInfo: MSFMapInteractionInfo!) {
      // An interaction is by definition the user: the SDK only raises it from the touch pipeline.
      let value = MSFMapMoveReason.MAP_MOVE_REASON_GESTURE.rawValue
      if (!NSMSFMapView.RUN_ON_MAIN_THREAD) {
        parent!.listener?.onMapInteraction(mapInteractionInfo, value)
      } else {
        DispatchQueue.main.async() {
          self.parent!.listener?.onMapInteraction(mapInteractionInfo, value)
        }
      }
    }
  }
  
  var _mapEventListener: MapEventListener?
  
  override init!(frame: CGRect) {
    super.init(frame: frame)
    self._mapEventListener = MapEventListener(self)
  }
  override init!() {
    super.init()
    self._mapEventListener = MapEventListener(self)
  }
  required init!(coder aDecoder: NSCoder!) {
    super.init(coder: aDecoder)
    self._mapEventListener = MapEventListener(self)
  }
  
  static func setRunOnMainThread(value: Bool) {
    RUN_ON_MAIN_THREAD = value;
  }
  
  func setAKMapEventListener(_ listener: NSMSFMapEventListener!) {
    self.listener = listener
    if (listener != nil) {
      super.setMapEventListener(_mapEventListener)
    } else {
      super.setMapEventListener(nil)
    }
  }
}
