#import "AKVectorEditEventListener.h"

@implementation AKVectorEditEventListener
@synthesize runOnMainThread;
-(id)init {
     if (self = [super init])  {
       self.runOnMainThread = true;
     }
     return self;
}

- (NTVectorElementDragResult)onDragStartThreaded:(NTVectorElementDragInfo *)dragInfo {
    return NT_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
}

- (NTVectorElementDragResult)onDragMoveThreaded:(NTVectorElementDragInfo *)dragInfo {
    return NT_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
}

- (NTVectorElementDragResult)onDragEndThreaded:(NTVectorElementDragInfo *)dragInfo {
    return NT_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
}

- (NTPointStyle *)onSelectDragPointStyleThreaded:(NTVectorElement *)element dragPointStyle:(NTVectorElementDragPointStyle)dragPointStyle {
    return nil;
}

- (void)onElementDeleteThreaded:(NTVectorElement *)element {}

- (BOOL)onElementSelectThreaded:(NTVectorElement *)element {
    return NO;
}

- (void)onElementDeselectedThreaded:(NTVectorElement *)element {}

- (void)onElementModifyThreaded:(NTVectorElement *)element geometry:(NTGeometry *)geometry {}

- (NTVectorElementDragResult)onDragStart:(NTVectorElementDragInfo *)dragInfo {
    if (self.runOnMainThread) {
        __block NTVectorElementDragResult result = NT_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onDragStartThreaded:dragInfo];
        });
        return result;
    } else {
        return [self onDragStartThreaded:dragInfo];
    }
}

- (NTVectorElementDragResult)onDragMove:(NTVectorElementDragInfo *)dragInfo {
    if (self.runOnMainThread) {
        __block NTVectorElementDragResult result = NT_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onDragMoveThreaded:dragInfo];
        });
        return result;
    } else {
        return [self onDragMoveThreaded:dragInfo];
    }
}

- (NTVectorElementDragResult)onDragEnd:(NTVectorElementDragInfo *)dragInfo {
    if (self.runOnMainThread) {
        __block NTVectorElementDragResult result = NT_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onDragEndThreaded:dragInfo];
        });
        return result;
    } else {
        return [self onDragEndThreaded:dragInfo];
    }
}

- (NTPointStyle *)onSelectDragPointStyle:(NTVectorElement *)element dragPointStyle:(NTVectorElementDragPointStyle)dragPointStyle {
    if (self.runOnMainThread) {
        __block NTPointStyle *result = nil;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onSelectDragPointStyleThreaded:element dragPointStyle:dragPointStyle];
        });
        return result;
    } else {
        return [self onSelectDragPointStyleThreaded:element dragPointStyle:dragPointStyle];
    }
}

- (void)onElementDelete:(NTVectorElement *)element {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onElementDeleteThreaded:element];
        });
    } else {
        [self onElementDeleteThreaded:element];
    }
}

- (BOOL)onElementSelect:(NTVectorElement *)element {
    if (self.runOnMainThread) {
        __block BOOL result = NO;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onElementSelectThreaded:element];
        });
        return result;
    } else {
        return [self onElementSelectThreaded:element];
    }
}

- (void)onElementDeselected:(NTVectorElement *)element {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onElementDeselectedThreaded:element];
        });
    } else {
        [self onElementDeselectedThreaded:element];
    }
}

- (void)onElementModify:(NTVectorElement *)element geometry:(NTGeometry *)geometry {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onElementModifyThreaded:element geometry:geometry];
        });
    } else {
        [self onElementModifyThreaded:element geometry:geometry];
    }
}
@end
