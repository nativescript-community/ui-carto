import Foundation

/**
 * Whether the plugin's listeners hop to the main thread before calling into JavaScript.
 *
 * It lives on its own rather than on a map view: the SDK calls back from its render, tile and
 * routing queues, and every listener in this plugin - map events, routing, geocoding, search,
 * hillshade, tile downloads - has the same problem whether or not the surface API is in play.
 * It is plugin policy, so it does not belong on the SDK's MSFMapView either.
 *
 * The Obj-C twin of SynchronousHandler.RUN_ON_MAIN_THREAD on Android.
 */
@objc(NSMSFMainThread)
@objcMembers
public class NSMSFMainThread: NSObject {
    public static var RUN_ON_MAIN_THREAD = true

    public static func setRunOnMainThread(value: Bool) {
        RUN_ON_MAIN_THREAD = value
    }
}
