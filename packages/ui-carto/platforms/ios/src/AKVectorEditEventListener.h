#import <CartoMobileSDK/CartoMobileSDK.h>

@interface AKVectorEditEventListener : NTVectorEditEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (NTVectorElementDragResult)onDragStartThreaded:(NTVectorElementDragInfo *)dragInfo;
- (NTVectorElementDragResult)onDragMoveThreaded:(NTVectorElementDragInfo *)dragInfo;
- (NTVectorElementDragResult)onDragEndThreaded:(NTVectorElementDragInfo *)dragInfo;
- (NTPointStyle *)onSelectDragPointStyleThreaded:(NTVectorElement *)element dragPointStyle:(NTVectorElementDragPointStyle)dragPointStyle;
- (void)onElementDeleteThreaded:(NTVectorElement *)element;
- (BOOL)onElementSelectThreaded:(NTVectorElement *)element;
- (void)onElementDeselectedThreaded:(NTVectorElement *)element;
- (void)onElementModifyThreaded:(NTVectorElement *)element geometry:(NTGeometry *)geometry;
@end