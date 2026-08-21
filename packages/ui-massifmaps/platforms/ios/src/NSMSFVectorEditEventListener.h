#import <MassifMaps/MassifMaps.h>

@interface NSMSFVectorEditEventListener : MSFVectorEditEventListener
@property(nonatomic, assign) BOOL runOnMainThread;
- (MSFVectorElementDragResult)onDragStartThreaded:(MSFVectorElementDragInfo *)dragInfo;
- (MSFVectorElementDragResult)onDragMoveThreaded:(MSFVectorElementDragInfo *)dragInfo;
- (MSFVectorElementDragResult)onDragEndThreaded:(MSFVectorElementDragInfo *)dragInfo;
- (MSFPointStyle *)onSelectDragPointStyleThreaded:(MSFVectorElement *)element dragPointStyle:(MSFVectorElementDragPointStyle)dragPointStyle;
- (void)onElementDeleteThreaded:(MSFVectorElement *)element;
- (BOOL)onElementSelectThreaded:(MSFVectorElement *)element;
- (void)onElementDeselectedThreaded:(MSFVectorElement *)element;
- (void)onElementModifyThreaded:(MSFVectorElement *)element geometry:(MSFGeometry *)geometry;
@end