#include "AkClusterElementBuilder.h"
#include "Utils.h"

@interface AkClusterElementBuilder ()

@property NSMutableDictionary* markerStyles;
@property (nonatomic) UIImage *markerImage;
@property (nonatomic) NTColor *markerColor;
@property (nonatomic) UIColor *textColor;
@property (nonatomic) BOOL bbox;
@property (nonatomic) NSUInteger markerSize;
@property (nonatomic) NSUInteger textSize;
@property (nonatomic) NSString* shape;
@property (nonatomic) UIFont* font;

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
- (void) setColor: (NTColor *)value{
        self.markerColor = value;
}
- (void) setSize: (NSUInteger)value{
    self.markerSize = value;
}


-(NTVectorElement*)buildClusterElement:(NTMapPos *)mapPos elements:(NTVectorElementVector *)elements
{
    if (!self.markerStyles) {
        self.markerStyles = [NSMutableDictionary new];
    }
    NSInteger nbElements = (int)[elements size];
    NSString* styleKey = [NSString stringWithFormat:@"%d",nbElements];
    
    NTStyle* markerStyle = [self.markerStyles valueForKey:styleKey];
    
    if (nbElements == 1) {
       if( [markerStyle isKindOfClass:[NTMarker class]]) {
            markerStyle = [(NTMarker*)[elements get:0] getStyle];
       } else if( [markerStyle isKindOfClass:[NTPoint class]]){
            markerStyle = [(NTPoint*)[elements get:0] getStyle];
       }
    }
    
    if (!markerStyle) {
        NTBitmap* markerBitmap;
        if (self.markerImage || self.textColor) {
            CGSize size;
            if(self.markerImage) {
                size = self.markerImage.size;
            } else {
                size = CGSizeMake(self.markerSize, self.markerSize);
            }
            UIGraphicsBeginImageContext(size);
            if(self.markerImage) {
                [self.markerImage drawAtPoint:CGPointMake(0, 0)];
            }
            
            NSMutableParagraphStyle* style = [[NSParagraphStyle defaultParagraphStyle] mutableCopy];
            [style setAlignment:NSTextAlignmentCenter];
            
            NSMutableDictionary* attr = [NSMutableDictionary dictionaryWithObject:style forKey:NSParagraphStyleAttributeName];
            UIFont* font;
            if(self.font) {
                font = [self.font fontWithSize:self.textSize];
            } else {
                font = [UIFont systemFontOfSize:self.textSize];
            }
            UIColor* color = [UIColor whiteColor];
            if(self.textColor) {
                color = self.textColor;
            }
            [attr setObject:color forKey:NSForegroundColorAttributeName];
            [attr setObject:font forKey:NSFontAttributeName];

            CGSize textSize = [styleKey sizeWithFont:font
                        constrainedToSize:size
                            lineBreakMode:(NSLineBreakByWordWrapping)];

            CGRect rect = CGRectMake(0, size.height/2 - textSize.height/2, size.width, size.height);
            [styleKey drawInRect:CGRectIntegral(rect) withAttributes:attr];
            
            UIImage* newImage = UIGraphicsGetImageFromCurrentImageContext();
            UIGraphicsEndImageContext();
            
            markerBitmap = [NTBitmapUtils createBitmapFromUIImage:newImage];
        }
        


        if ([self.shape isEqualToString:@"point"]) {
            NTPointStyleBuilder* styleBuilder = [[NTPointStyleBuilder alloc] init];
            
            if (markerBitmap) {
                [styleBuilder setBitmap:markerBitmap];
            }
            [styleBuilder setSize:self.markerSize];
            
            if (self.markerColor) {
                [styleBuilder setColor:self.markerColor];
            }
            markerStyle = [styleBuilder buildStyle];
        } else {
            NTMarkerStyleBuilder* styleBuilder = [[NTMarkerStyleBuilder alloc] init];
            
            if (markerBitmap) {
                [styleBuilder setBitmap:markerBitmap];
            }
            [styleBuilder setSize:self.markerSize];
            [styleBuilder setHideIfOverlapped:NO];
            [styleBuilder setPlacementPriority:(int)nbElements];
            
            if (self.markerColor) {
              [styleBuilder setColor:self.markerColor];
            }
            markerStyle = [styleBuilder buildStyle];
        }
        [self.markerStyles setValue:markerStyle forKey:styleKey];
       
    }
    NTVectorElement* marker;
    if( [markerStyle isKindOfClass:[NTPointStyle class]]) {
        marker = [[NTPoint alloc] initWithPos:mapPos style:(NTPointStyle*)markerStyle];
    }
    if( [markerStyle isKindOfClass:[NTMarkerStyle class]]) {
        marker = [[NTMarker alloc] initWithPos:mapPos style:(NTMarkerStyle*)markerStyle];
    }
    if (marker) {
        [marker setMetaDataElement:@"elements" element:[[NTVariant alloc] initWithLongVal:nbElements]];
        if (self.bbox) {
            NTPointGeometryVector* vector =  [[NTPointGeometryVector alloc] init];
            for (NSInteger i = 0; i < nbElements; i++) {
                [vector add:(NTPointGeometry*)[[elements get:i] getGeometry]];
            }
            NTMapBounds* mapBounds = [[[NTMultiPointGeometry alloc] initWithGeometries:vector] getBounds];
            NTVariantArrayBuilder* builder = [[NTVariantArrayBuilder alloc] init];
            [builder addDouble:[[mapBounds getMin] getX]];
            [builder addDouble:[[mapBounds getMin] getY]];
            [builder addDouble:[[mapBounds getMax] getX]];
            [builder addDouble:[[mapBounds getMax] getY]];
            [marker setMetaDataElement:@"bbox" element:[builder buildVariant]];
        }
    }
    return marker;
}
@end
