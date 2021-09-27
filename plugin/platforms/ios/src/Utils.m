
#include "Utils.h"

int EARTH_RADIUS = 6371009;
double TO_RAD = 0.017453292519943295;

@interface CartoAdditionsUtils ()

@end

@implementation CartoAdditionsUtils

+ (long)isLocationOn:(NTMapPos *)point
                 poly:(NTMapPosVector *)poly {
  return [CartoAdditionsUtils isLocationOn:point poly:poly closed:false];
}

+ (long)isLocationOn:(NTMapPos *)point
                 poly:(NTMapPosVector *)poly
               closed:(bool)closed {
  return [CartoAdditionsUtils isLocationOn:point poly:poly closed:false geodesic:true];
}

+ (long)isLocationOn:(NTMapPos *)point
                 poly:(NTMapPosVector *)poly
               closed:(bool)closed
             geodesic:(bool)geodesic {
  return [CartoAdditionsUtils isLocationOn:point poly:poly closed:false geodesic:true toleranceEarth:0.1];
}



double arcHav(double x) {
  return 2 * asin(sqrt(x));
}

double hav(double x) {
  double sinHalf = sin(x * 0.5f);
  return sinHalf * sinHalf;
}

double havDistance(double lat1, double lat2, double dLng) {
  return hav(lat1 - lat2) + hav(dLng) * cos(lat1) * cos(lat2);
}

double wrap(double n, double min, double max) {
  return n >= min && n < max ? n : (fmod((n - min), (max - min))) + min;
}

double clamp(double x, double low, double high) {
  return x < low ? low : x > high ? high : x;
}

double mercator(double lat) {
  return log(tan(lat * 0.5 + M_PI / 4.0f));
}

double inverseMercator(double y) {
  return 2 * atan(exp(y)) - M_PI / 2.0f;
}

double sinSumFromHav(double x, double y) {
  double a = sqrt(x * (1 - x));
  double b = sqrt(y * (1 - y));
  return 2 * (a + b - 2 * (a * y + b * x));
}

double sinFromHav(double h) {
  return 2 * sqrt(h * (1 - h));
}

double havFromSin(double x) {
  double x2 = x * x;
  return (x2 / (1 + sqrt(1 - x2))) * 0.5;
}

double sinDeltaBearing(double lat1, double lng1, double lat2, double lng2, double lat3, double lng3) {
  double sinLat1 = sin(lat1);
  double cosLat2 = cos(lat2);
  double cosLat3 = cos(lat3);
  double lat31 = lat3 - lat1;
  double lng31 = lng3 - lng1;
  double lat21 = lat2 - lat1;
  double lng21 = lng2 - lng1;
  double a = sin(lng31) * cosLat3;
  double c = sin(lng21) * cosLat2;
  double b = sin(lat31) + 2 * sinLat1 * cosLat3 * hav(lng31);
  double d = sin(lat21) + 2 * sinLat1 * cosLat2 * hav(lng21);
  double denom = (a * a + b * b) * (c * c + d * d);
  return denom <= 0 ? 1 : (a * d - b * c) / sqrt(denom);
}

double toRadians(double value) {
  return value * TO_RAD;
}


double computeAngleBetween(NTMapPos *from, NTMapPos *to) {
  return distanceRadians(toRadians([from getY]), toRadians([from getX]), toRadians([to getY]), toRadians([to getX]));
}

double computeDistanceBetween(NTMapPos *from, NTMapPos *to) {
  return computeAngleBetween(from, to) * EARTH_RADIUS;
}

double distanceRadians(double lat1, double lng1, double lat2, double lng2) {
  return arcHav(havDistance(lat1, lat2, lng1 - lng2));
}


+ (double)distanceToEndWithInt:(int)index
                          poly:(NTMapPosVector *)poly {
  int result = 0;
  long size = [poly size];
  NTMapPos *last = nil;
  NTMapPos *element;
  for (int i = index; i < size; i++) {
    element = [poly get:i];
    if (last != nil) {
      result += computeDistanceBetween(last, element);
    }
    last = element;
  }
  return result;
}

bool isOnSegmentGC(double lat1, double lng1, double lat2, double lng2, double lat3, double lng3, double havTolerance) {
  double havDist13 = havDistance(lat1, lat3, lng1 - lng3);
  if (havDist13 <= havTolerance) {
    return true;
  }
  double havDist23 = havDistance(lat2, lat3, lng2 - lng3);
  if (havDist23 <= havTolerance) {
    return true;
  }
  double sinBearing = sinDeltaBearing(lat1, lng1, lat2, lng2, lat3, lng3);
  double sinDist13 = sinFromHav(havDist13);
  double havCrossTrack = havFromSin(sinDist13 * sinBearing);
  if (havCrossTrack > havTolerance) {
    return false;
  }
  double havDist12 = havDistance(lat1, lat2, lng1 - lng2);
  double term = havDist12 + havCrossTrack * (1 - 2 * havDist12);
  if (havDist13 > term || havDist23 > term) {
    return false;
  }
  if (havDist12 < 0.74) {
    return true;
  }
  double cosCrossTrack = 1 - 2 * havCrossTrack;
  double havAlongTrack13 = (havDist13 - havCrossTrack) / cosCrossTrack;
  double havAlongTrack23 = (havDist23 - havCrossTrack) / cosCrossTrack;
  double sinSumAlongTrack = sinSumFromHav(havAlongTrack13, havAlongTrack23);
  return sinSumAlongTrack > 0;
}

+ (long)isLocationOn:(NTMapPos *)point
                   poly:(NTMapPosVector *)poly
                                    closed:(bool)closed
                                    geodesic:(bool)geodesic
                                     toleranceEarth:(double)toleranceEarth {
  long size = [poly size];
  if (size == 0) {
    return -1;
  }
  double tolerance = toleranceEarth / EARTH_RADIUS;
  double havTolerance = hav(tolerance);
  double lat3 = toRadians([point getY]);
  double lng3 = toRadians([point getX]);
  NTMapPos *prev = ([poly get:closed ? (int) (size - 1) : 0]);
  double lat1 = toRadians([prev getY]);
  double lng1 = toRadians([prev getX]);
  if (geodesic) {
    for (int index = 0; index < size; index++) {
      NTMapPos *point2 = ([poly get:index]);
      double lat2 = toRadians([point2 getY]);
      double lng2 = toRadians([point2 getX]);
      if (isOnSegmentGC(lat1, lng1, lat2, lng2, lat3, lng3, havTolerance)) {
        return index;
      }
      lat1 = lat2;
      lng1 = lng2;
    }
  } else {
    double minAcceptable = lat3 - tolerance;
    double maxAcceptable = lat3 + tolerance;
    double y1 = mercator(lat1);
    double y3 = mercator(lat3);
    NSMutableArray *xTry = [NSMutableArray array];
    for (int index = 0; index < size; index++) {
      NTMapPos *point2 = ([poly get:index]);
      double lat2 = toRadians([point2 getY]);
      double y2 = mercator(lat2);
      double lng2 = toRadians([point2 getX]);
      if (MAX(lat1, lat2) >= minAcceptable && MIN(lat1, lat2) <= maxAcceptable) {
        double x2 = wrap(lng2 - lng1, -M_PI, M_PI);
        double x3Base = wrap(lng3 - lng1, -M_PI, M_PI);
        [xTry replaceObjectAtIndex:0 withObject:@(x3Base)];
        [xTry replaceObjectAtIndex:1 withObject:@(x3Base + 2 * M_PI)];
        [xTry replaceObjectAtIndex:2 withObject:@(x3Base - 2 * M_PI)];
        for (int index2 = 0; index2 < [xTry count]; index2++) {
          double x3 =[[ xTry objectAtIndex:index2] boolValue];
          double dy = y2 - y1;
          double len2 = x2 * x2 + dy * dy;
          double t = len2 <= 0 ? 0 : clamp((x3 * x2 + (y3 - y1) * dy) / len2, 0, 1);
          double xClosest = t * x2;
          double yClosest = y1 + t * dy;
          double latClosest = inverseMercator(yClosest);
          double havDist = havDistance(lat3, latClosest, x3 - xClosest);
          if (havDist < havTolerance) {
            return index;
          }
        }
      }
      lat1 = lat2;
      lng1 = lng2;
      y1 = y2;
    }
  }
  return -1;
}
@end
