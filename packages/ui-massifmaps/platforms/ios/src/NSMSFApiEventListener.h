#import <MassifMaps/MassifMaps.h>

// The surface API only exists in an SDK built with all/native/api. Guarding here rather than
// excluding the file keeps the plugin's object API building against an older MassifMaps pod.
#if __has_include(<MassifMaps/MSFEventListener.h>)
#define NSMSF_HAS_SURFACE_API 1

/**
 * The surface API's event listener, with the thread hop JavaScript needs.
 *
 * The SDK emits from its render and tile threads and NativeScript has no JavaScript runtime
 * there, so this hops onto the main queue and WAITS - the same dance NSMSFVectorTileEventListener
 * does. Waiting rather than dispatching async is what lets a consuming subscription answer in
 * time, and what keeps the facade's payload alive until the handler has read it.
 *
 * JavaScript overrides -onEventThreaded:event:payload:, never -onEvent:event:payload:.
 */
@interface NSMSFApiEventListener : MSFEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (BOOL)onEventThreaded:(int)target event:(NSString *)event payload:(int)payload;
@end

#endif
