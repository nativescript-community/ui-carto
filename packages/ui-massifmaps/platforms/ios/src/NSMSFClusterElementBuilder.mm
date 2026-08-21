#include "NSMSFClusterElementBuilder.h"
#include "Utils.h"

@interface NSMSFClusterElementBuilder ()

@property NSMutableDictionary* markerStyles;
@property (nonatomic) UIImage *markerImage;
@property (nonatomic) MSFColor *markerColor;
@property (nonatomic) UIColor *textColor;
@property (nonatomic) BOOL bbox;
@property (nonatomic) NSUInteger markerSize;
@property (nonatomic) NSUInteger textSize;
@property (nonatomic) NSString* shape;
@property (nonatomic) UIFont* font;

@end
@implementation NSMSFClusterElementBuilder : MSFClusterElementBuilder

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
- (void) setColor: (MSFColor *)value{
        self.markerColor = value;
}
- (void) setSize: (NSUInteger)value{
    self.markerSize = value;
}


-(MSFVectorElement*)buildClusterElement:(MSFMapPos *)mapPos elements:(MSFVectorElementVector *)elements
{
    if (!self.markerStyles) {
        self.markerStyles = [NSMutableDictionary new];
    }
    NSInteger nbElements = (int)[elements size];
    NSString* styleKey = [NSString stringWithFormat:@"%d",(long)nbElements];
    
    MSFStyle* markerStyle = [self.markerStyles valueForKey:styleKey];
    
    if (nbElements == 1) {
       if( [markerStyle isKindOfClass:[MSFMarker class]]) {
            markerStyle = [(MSFMarker*)[elements get:0] getStyle];
       } else if( [markerStyle isKindOfClass:[MSFPoint class]]){
            markerStyle = [(MSFPoint*)[elements get:0] getStyle];
       }
    }
    
    if (!markerStyle) {
        MSFBitmap* markerBitmap;
        if (self.markerImage || self.textColor) {
            CGSize size = CGSizeMake(self.markerSize, self.markerSize);
            UIGraphicsBeginImageContextWithOptions(size, false, 0);
            if(self.markerImage) {
                [self.markerImage drawInRect:CGRectMake(0, 0, size.width, size.height)];
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
            
            markerBitmap = [MSFBitmapUtils createBitmapFromUIImage:newImage];
        }
        


        if ([self.shape isEqualToString:@"point"]) {
            MSFPointStyleBuilder* styleBuilder = [[MSFPointStyleBuilder alloc] init];
            
            if (markerBitmap) {
                [styleBuilder setBitmap:markerBitmap];
            }
            [styleBuilder setSize:self.markerSize];
            
            if (self.markerColor) {
                [styleBuilder setColor:self.markerColor];
            }
            markerStyle = [styleBuilder buildStyle];
        } else {
            MSFMarkerStyleBuilder* styleBuilder = [[MSFMarkerStyleBuilder alloc] init];
            
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
    MSFVectorElement* marker;
    if( [markerStyle isKindOfClass:[MSFPointStyle class]]) {
        marker = [[MSFPoint alloc] initWithPos:mapPos style:(MSFPointStyle*)markerStyle];
    }
    if( [markerStyle isKindOfClass:[MSFMarkerStyle class]]) {
        marker = [[MSFMarker alloc] initWithPos:mapPos style:(MSFMarkerStyle*)markerStyle];
    }
    if (marker) {
        [marker setMetaDataElement:@"elements" element:[[MSFVariant alloc] initWithLongVal:nbElements]];
        if (self.bbox) {
            MSFPointGeometryVector* vector =  [[MSFPointGeometryVector alloc] init];
            for (NSInteger i = 0; i < nbElements; i++) {
                [vector add:(MSFPointGeometry*)[[elements get:i] getGeometry]];
            }
            MSFMapBounds* mapBounds = [[[MSFMultiPointGeometry alloc] initWithGeometries:vector] getBounds];
            MSFVariantArrayBuilder* builder = [[MSFVariantArrayBuilder alloc] init];
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
