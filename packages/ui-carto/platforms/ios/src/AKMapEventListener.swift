import CartoMobileSDK

@objc(AKMapEventListener)
public protocol AKMapEventListener: AnyObject {
  
  
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
   * The callback is used for both UI events and map changes resulting from API calls.
   * It is recommended to use onMapInteraction callback instead of onMapMoved, if possible.
   * Doing any calls to update MapView state from this method is potentially dangerous and may
   * result in deadlocks or crashes.
   * The thread this method is called from may vary.
   */
  func onMapMoved(_ userAction: Bool);
  /**
   * Listener method that gets called when map is in 'stable' state - map animations have finished,
   * user has lifted fingers from the screen. This method is similar to onMapIdle, but is called less
   * frequently and takes account touch state.
   * The thread this method is called from may vary.
   */
  func onMapStable(_ userAction: Bool);
  /**
   * Listener method that gets called when user has interacted with the map. The callback
   * includes info about interaction type (panning, zooming, etc).
   * @param mapInteractionInfo A container that provides information about the interaction.
   */
  func onMapInteraction(_ mapInteractionInfo: NTMapInteractionInfo, _ userAction: Bool);
  /**
   * Listener method that gets called when a click is performed on an empty area of the map.
   * This method will NOT be called from the main thread.
   * @param mapClickInfo A container that provides information about the click.
   */
  func onMapClicked( _ mapClickInfo: NTMapClickInfo);
}
