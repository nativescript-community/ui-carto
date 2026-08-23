import MassifMaps

@objc(NSMSFMapEventListener)
public protocol NSMSFMapEventListener: AnyObject {
  
  
  /**
   * Listener method that gets called at the end of the rendering process when the
   * map view needs no further refreshing.
   * Note that there can still be background processes (tile loading) that may change
   * the map view but these may take long time.
   * This method is called from GL renderer thread, not from main thread.
   */
  func onMapIdle();
  /**
   * Listener method that gets called when the map is panned, rotated, tilted or zoomed.
   * The callback is used for both UI events and map changes resulting from API calls; the
   * reason says which - it is the SDK's MSFMapMoveReason, raw.
   * Doing any calls to update MapView state from this method is potentially dangerous and may
   * result in deadlocks or crashes.
   * The thread this method is called from may vary.
   */
  func onMapMoved(_ reason: Int);
  /**
   * Listener method that gets called when a movement ENDS - animations finished, fingers lifted,
   * inertia died out. Once per movement: a touch that did not move the camera does not call it.
   * The thread this method is called from may vary.
   */
  func onMapStable(_ reason: Int);
  /**
   * Listener method that gets called when user has interacted with the map. The callback
   * includes info about interaction type (panning, zooming, etc).
   * @param mapInteractionInfo A container that provides information about the interaction.
   */
  func onMapInteraction(_ mapInteractionInfo: MSFMapInteractionInfo, _ reason: Int);
  /**
   * Listener method that gets called when a click is performed on an empty area of the map.
   * This method will NOT be called from the main thread.
   * @param mapClickInfo A container that provides information about the click.
   */
  func onMapClicked( _ mapClickInfo: MSFMapClickInfo);
}
