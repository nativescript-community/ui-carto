
import MassifMaps

@objc(NSMSFMapView)
@objcMembers
class NSMSFMapView: MSFMapView {
  static var RUN_ON_MAIN_THREAD = true
  var listener: NSMSFMapEventListener? = nil
  var userAction: Bool = false
  
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
    override func onMapStable() {
      if (!NSMSFMapView.RUN_ON_MAIN_THREAD) {
        parent!.listener?.onMapStable(parent!.userAction)
      } else {
        DispatchQueue.main.async() {
          self.parent!.listener?.onMapStable(self.parent!.userAction)
        }
      }
      parent!.userAction = false;
    }
    override func onMapMoved() {
      if (!NSMSFMapView.RUN_ON_MAIN_THREAD) {
        parent!.listener?.onMapMoved(parent!.userAction)
      } else {
        DispatchQueue.main.async() {
          self.parent!.listener?.onMapMoved(self.parent!.userAction)
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
      if (!NSMSFMapView.RUN_ON_MAIN_THREAD) {
        parent!.listener?.onMapInteraction(mapInteractionInfo, self.parent!.userAction)
      } else {
        DispatchQueue.main.async() {
          self.parent!.listener?.onMapInteraction(mapInteractionInfo, self.parent!.userAction)
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
  
  override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    super.touchesBegan(touches, with: event)
    self.userAction = false
  }
  override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
    super.touchesMoved(touches, with: event)
    self.userAction = true
  }
}
