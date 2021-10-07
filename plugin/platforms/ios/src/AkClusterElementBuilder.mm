#include "AkClusterElementBuilder.h"
#include "Utils.h"

@interface AkClusterElementBuilder ()

@property NSMutableDictionary* markerStyles;
@property (nonatomic) UIImage *markerImage;
@property (nonatomic) UIColor *markerColor;
@property (nonatomic) UIColor *textColor;
@property (nonatomic) NSUInteger markerSize;
@property (nonatomic) NSUInteger textSize;
@property (nonatomic) NSString* shape;

@end
@implementation AkClusterElementBuilder : NTClusterElementBuilder

-(id)init {
     if (self = [super init])  {
       self.markerSize = 20;
       self.textSize = 12;
     }
     return self;
}

- (void) setBitmap: (UIImage *)value {
    self.markerImage = value;
}
- (void) setColor: (UIColor *)value{
        self.markerColor = value;
    }
- (void) setTextColor: (UIColor *)value{
    self.textColor = value;
}
- (void) setSize: (NSUInteger)value{
    self.markerSize = value;
}
- (void) setTextSize: (NSUInteger)value{
    self.textSize = value;
}
- (void) setShape: (NSString *)value {
    self.shape = value;
}



-(NTVectorElement*)buildClusterElement:(NTMapPos *)mapPos elements:(NTVectorElementVector *)elements
{
    if (!self.markerStyles) {
        self.markerStyles = [NSMutableDictionary new];
    }
    
    NSString* styleKey = [NSString stringWithFormat:@"%d",(int)[elements size]];
    
    NTStyle* markerStyle = [self.markerStyles valueForKey:styleKey];
    
    if ([elements size] == 1) {
        markerStyle = [(NTMarker*)[elements get:0] getStyle];
    }
    
    if (!markerStyle) {
        
        if (!self.markerImage) {
            self.markerImage = [UIImage imageNamed:@"marker_black.png"];
        }
        
        UIGraphicsBeginImageContext(self.markerImage.size);
        [self.markerImage drawAtPoint:CGPointMake(0, 0)];
        
        CGRect rect = CGRectMake(0, 15, self.markerImage.size.width, self.markerImage.size.height);
        if(self.textColor) {
            [self.textColor set];
        } else {
            [[UIColor whiteColor] set];
        }
        
        NSMutableParagraphStyle* style = [[NSParagraphStyle defaultParagraphStyle] mutableCopy];
        [style setAlignment:NSTextAlignmentCenter];
        
        NSDictionary* attr = [NSDictionary dictionaryWithObject:style forKey:NSParagraphStyleAttributeName];
        [styleKey drawInRect:CGRectIntegral(rect) withAttributes:attr];
        
        UIImage* newImage = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();
        
        NTBitmap* markerBitmap = [NTBitmapUtils createBitmapFromUIImage:newImage];


        if ([self.shape isEqualToString:@"point"]) {
            NTPointStyleBuilder* styleBuilder = [[NTPointStyleBuilder alloc] init];
            
            [styleBuilder setBitmap:markerBitmap];
            [styleBuilder setSize:self.markerSize];
            
            if (self.markerColor != nil) {
                [styleBuilder setColor:[CartoAdditionsUtils toNTColor:self.markerColor]];
            }
            markerStyle = [styleBuilder buildStyle];
        } else {
            NTMarkerStyleBuilder* styleBuilder = [[NTMarkerStyleBuilder alloc] init];
            
            [styleBuilder setBitmap:markerBitmap];
            [styleBuilder setSize:self.markerSize];
            [styleBuilder setHideIfOverlapped:NO];
            [styleBuilder setPlacementPriority:(int)[elements size]];
            
            if (self.markerColor != nil) {
              [styleBuilder setColor:[CartoAdditionsUtils toNTColor:self.markerColor]];
            }
            markerStyle = [styleBuilder buildStyle];
        }
        [self.markerStyles setValue:markerStyle forKey:styleKey];
       
    }

    if( [markerStyle isKindOfClass:[NTPointStyle class]]) {
        NTPoint* marker = [[NTPoint alloc] initWithPos:mapPos style:(NTPointStyle*)markerStyle];
        [marker setMetaDataElement:@"elements" element:[[NTVariant alloc] initWithLongVal:[elements size]]];
        return marker;
    }
    if( [markerStyle isKindOfClass:[NTMarkerStyle class]]) {
        NTMarker* marker = [[NTMarker alloc] initWithPos:mapPos style:(NTMarkerStyle*)markerStyle];
        [marker setMetaDataElement:@"elements" element:[[NTVariant alloc] initWithLongVal:[elements size]]];
        return marker;
    }
    return nil;
}
@end
