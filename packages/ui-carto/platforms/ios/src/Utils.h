
#include <CartoMobileSDK/CartoMobileSDK.h>

@interface CartoAdditionsUtils : NSObject

#pragma mark Public

+(NTColor*_Nonnull) toNTColor: (UIColor*_Nonnull)color;

+ (long)isLocationOn:(NTMapPos *_Nonnull)point
                 poly:(NTMapPosVector *_Nonnull)poly;

+ (long)isLocationOn:(NTMapPos *_Nonnull)point
                 poly:(NTMapPosVector *_Nonnull)poly
                                  closed:(bool)closed;

+ (long)isLocationOn:(NTMapPos *_Nonnull)point
                 poly:(NTMapPosVector *_Nonnull)poly
                                  closed:(bool)closed
            geodesic:(bool)geodesic;

+ (long)isLocationOn:(NTMapPos *_Nonnull)point
                 poly:(NTMapPosVector *_Nonnull)poly
                                  closed:(bool)closed
                                  geodesic:(bool)geodesic
                                   toleranceEarth:(double)toleranceEarth;

+ (double)distanceToEndWithInt:(int)index
                          poly:(NTMapPosVector *_Nonnull)poly;

@end
