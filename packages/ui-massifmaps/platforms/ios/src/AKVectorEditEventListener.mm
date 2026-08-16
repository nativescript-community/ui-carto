#import "AKVectorEditEventListener.h"

@implementation AKVectorEditEventListener
@synthesize runOnMainThread;
-(id)init {
     if (self = [super init])  {
       self.runOnMainThread = true;
     }
     return self;
}

- (MSFVectorElementDragResult)onDragStartThreaded:(MSFVectorElementDragInfo *)dragInfo {
    return MSF_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
}

- (MSFVectorElementDragResult)onDragMoveThreaded:(MSFVectorElementDragInfo *)dragInfo {
    return MSF_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
}

- (MSFVectorElementDragResult)onDragEndThreaded:(MSFVectorElementDragInfo *)dragInfo {
    return MSF_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
}

- (MSFPointStyle *)onSelectDragPointStyleThreaded:(MSFVectorElement *)element dragPointStyle:(MSFVectorElementDragPointStyle)dragPointStyle {
    return nil;
}

- (void)onElementDeleteThreaded:(MSFVectorElement *)element {}

- (BOOL)onElementSelectThreaded:(MSFVectorElement *)element {
    return NO;
}

- (void)onElementDeselectedThreaded:(MSFVectorElement *)element {}

- (void)onElementModifyThreaded:(MSFVectorElement *)element geometry:(MSFGeometry *)geometry {}

- (MSFVectorElementDragResult)onDragStart:(MSFVectorElementDragInfo *)dragInfo {
    if (self.runOnMainThread) {
        __block MSFVectorElementDragResult result = MSF_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onDragStartThreaded:dragInfo];
        });
        return result;
    } else {
        return [self onDragStartThreaded:dragInfo];
    }
}

- (MSFVectorElementDragResult)onDragMove:(MSFVectorElementDragInfo *)dragInfo {
    if (self.runOnMainThread) {
        __block MSFVectorElementDragResult result = MSF_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onDragMoveThreaded:dragInfo];
        });
        return result;
    } else {
        return [self onDragMoveThreaded:dragInfo];
    }
}

- (MSFVectorElementDragResult)onDragEnd:(MSFVectorElementDragInfo *)dragInfo {
    if (self.runOnMainThread) {
        __block MSFVectorElementDragResult result = MSF_VECTOR_ELEMENT_DRAG_RESULT_IGNORE;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onDragEndThreaded:dragInfo];
        });
        return result;
    } else {
        return [self onDragEndThreaded:dragInfo];
    }
}

- (MSFPointStyle *)onSelectDragPointStyle:(MSFVectorElement *)element dragPointStyle:(MSFVectorElementDragPointStyle)dragPointStyle {
    if (self.runOnMainThread) {
        __block MSFPointStyle *result = nil;
        dispatch_sync(dispatch_get_main_queue(), ^{
            result = [self onSelectDragPointStyleThreaded:element dragPointStyle:dragPointStyle];
        });
        return result;
    } else {
        return [self onSelectDragPointStyleThreaded:element dragPointStyle:dragPointStyle];
    }
}

- (void)onElementDelete:(MSFVectorElement *)element {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onElementDeleteThreaded:element];
        });
    } else {
        [self onElementDeleteThreaded:element];
    }
}

- (BOOL)onElementSelect:(MSFVectorElement *)element {
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

- (void)onElementDeselected:(MSFVectorElement *)element {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onElementDeselectedThreaded:element];
        });
    } else {
        [self onElementDeselectedThreaded:element];
    }
}

- (void)onElementModify:(MSFVectorElement *)element geometry:(MSFGeometry *)geometry {
    if (self.runOnMainThread) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self onElementModifyThreaded:element geometry:geometry];
        });
    } else {
        [self onElementModifyThreaded:element geometry:geometry];
    }
}
@end
