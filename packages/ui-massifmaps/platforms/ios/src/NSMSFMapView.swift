
import MassifMaps

@objc(NSMSFMapView)
@objcMembers
class NSMSFMapView: MSFMapView {
  // Still load-bearing: every listener in the plugin reads it to decide whether to hop to the
  // main thread and wait before calling into JavaScript.
  static var RUN_ON_MAIN_THREAD = true

  override init!(frame: CGRect) {
    super.init(frame: frame)
  }
  override init!() {
    super.init()
  }
  required init!(coder aDecoder: NSCoder!) {
    super.init(coder: aDecoder)
  }
  
  static func setRunOnMainThread(value: Bool) {
    RUN_ON_MAIN_THREAD = value;
  }
  
}
