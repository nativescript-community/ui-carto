
#include <MassifMaps/MassifMaps.h>

@interface MassifMapsAdditionsUtils : NSObject

#pragma mark Public

+(MSFColor*_Nonnull) toNTColor: (UIColor*_Nonnull)color;

+ (long)isLocationOn:(MSFMapPos *_Nonnull)point
                 poly:(MSFMapPosVector *_Nonnull)poly;

+ (long)isLocationOn:(MSFMapPos *_Nonnull)point
                 poly:(MSFMapPosVector *_Nonnull)poly
                                  closed:(bool)closed;

+ (long)isLocationOn:(MSFMapPos *_Nonnull)point
                 poly:(MSFMapPosVector *_Nonnull)poly
                                  closed:(bool)closed
            geodesic:(bool)geodesic;

+ (long)isLocationOn:(MSFMapPos *_Nonnull)point
                 poly:(MSFMapPosVector *_Nonnull)poly
                                  closed:(bool)closed
                                  geodesic:(bool)geodesic
                                   toleranceEarth:(double)toleranceEarth;

+ (double)distanceToEndWithInt:(int)index
                          poly:(MSFMapPosVector *_Nonnull)poly;

@end
