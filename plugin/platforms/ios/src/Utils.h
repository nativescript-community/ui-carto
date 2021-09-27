
#include <CartoMobileSDK/CartoMobileSDK.h>

@interface CartoAdditionsUtils : NSObject

#pragma mark Public

+ (long)isLocationOn:(NTMapPos *)point
                 poly:(NTMapPosVector *)poly;

+ (long)isLocationOn:(NTMapPos *)point
                 poly:(NTMapPosVector *)poly
                                  closed:(bool)closed;

+ (long)isLocationOn:(NTMapPos *)point
                 poly:(NTMapPosVector *)poly
                                  closed:(bool)closed
            geodesic:(bool)geodesic;

+ (long)isLocationOn:(NTMapPos *)point
                 poly:(NTMapPosVector *)poly
                                  closed:(bool)closed
                                  geodesic:(bool)geodesic
                                   toleranceEarth:(double)toleranceEarth;

+ (double)distanceToEndWithInt:(int)index
                          poly:(NTMapPosVector *)poly;

@end
