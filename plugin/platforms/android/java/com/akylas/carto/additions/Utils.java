package com.akylas.carto.additions;

import com.carto.core.MapPosVector;
import com.carto.core.MapPos;
import com.carto.core.MapVec;

public class Utils {
    public static int EARTH_RADIUS = 6371009;
    public static double TO_RAD = Math.PI / 180;

    public static MapPosVector decodeMapPosVector(String encoded, boolean is3D, int precision) {
        if (encoded == null) {
            return null;
        }
        MapPosVector poly = new MapPosVector();
        int index = 0;
        int len = encoded.length();
        int lat = 0, lng = 0, ele = 0;
        int factor = (int) Math.pow(10, precision);
        while (index < len) {
            // latitude
            int b, shift = 0, result = 0;
            do {
                b = encoded.charAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            int deltaLatitude = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
            lat += deltaLatitude;

            // longitude
            shift = 0;
            result = 0;
            do {
                b = encoded.charAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            int deltaLongitude = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
            lng += deltaLongitude;

            if (is3D) {
                // elevation
                shift = 0;
                result = 0;
                do {
                    b = encoded.charAt(index++) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);
                int deltaElevation = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
                ele += deltaElevation;
                poly.add(new MapPos((double) lng / factor, (double) lat / factor, (double) ele / 100));
            } else {
                poly.add(new MapPos((double) lng / factor, (double) lat / factor));
            }
        }
        return poly;

    }

    private static void encodeNumber(StringBuilder sb, int num) {
        num = num << 1;
        if (num < 0) {
            num = ~num;
        }
        while (num >= 0x20) {
            int nextValue = (0x20 | (num & 0x1f)) + 63;
            sb.append((char) (nextValue));
            num >>= 5;
        }
        num += 63;
        sb.append((char) (num));
    }

    public static String encodeMapPosVector(MapPosVector poly, boolean includeElevation) {
        return encodeMapPosVector(poly, includeElevation, 5);
    }

    static public String encodeMapPosVector(MapPosVector coordinates, boolean includeElevation, int precision) {
        long size = coordinates.size();
        StringBuilder sb = new StringBuilder(Math.max(20, (int) coordinates.size() * 3));
        int prevLat = 0;
        int prevLon = 0;
        int prevEle = 0;
        int factor = (int) Math.pow(10, precision);
        MapPos pos = null;
        for (int i = 0; i < size; i++) {
            pos = coordinates.get(i);
            int num = (int) Math.floor(pos.getY() * factor);
            encodeNumber(sb, num - prevLat);
            prevLat = num;
            num = (int) Math.floor(pos.getX() * factor);
            encodeNumber(sb, num - prevLon);
            prevLon = num;
            if (includeElevation) {
                num = (int) Math.floor(pos.getZ() * 100);
                encodeNumber(sb, num - prevEle);
                prevEle = num;
            }
        }
        return sb.toString();
    }

    static public double arcHav(double x) {
        return 2 * Math.asin(Math.sqrt(x));
    }

    static public double hav(double x) {
        final double sinHalf = Math.sin(x * 0.5f);
        return sinHalf * sinHalf;
    }

    static public double havDistance(double lat1, double lat2, double dLng) {
        return hav(lat1 - lat2) + hav(dLng) * Math.cos(lat1) * Math.cos(lat2);
    }

    static public double wrap(double n, double min, double max) {
        return n >= min && n < max ? n : ((n - min) % (max - min)) + min;
    }

    static public double clamp(double x, double low, double high) {
        return x < low ? low : x > high ? high : x;
    }

    static public double mercator(double lat) {
        return Math.log(Math.tan(lat * 0.5 + Math.PI / 4f));
    }

    static public double inverseMercator(double y) {
        return 2 * Math.atan(Math.exp(y)) - Math.PI / 2f;
    }

    static public double sinSumFromHav(double x, double y) {
        double a = Math.sqrt(x * (1 - x));
        double b = Math.sqrt(y * (1 - y));
        return 2 * (a + b - 2 * (a * y + b * x));
    }

    static public double sinFromHav(double h) {
        return 2 * Math.sqrt(h * (1 - h));
    }

    static public double havFromSin(double x) {
        double x2 = x * x;
        return (x2 / (1 + Math.sqrt(1 - x2))) * 0.5;
    }

    static public double sinDeltaBearing(double lat1, double lng1, double lat2, double lng2, double lat3, double lng3) {
        double sinLat1 = Math.sin(lat1);
        double cosLat2 = Math.cos(lat2);
        double cosLat3 = Math.cos(lat3);
        double lat31 = lat3 - lat1;
        double lng31 = lng3 - lng1;
        double lat21 = lat2 - lat1;
        double lng21 = lng2 - lng1;
        double a = Math.sin(lng31) * cosLat3;
        double c = Math.sin(lng21) * cosLat2;
        double b = Math.sin(lat31) + 2 * sinLat1 * cosLat3 * hav(lng31);
        double d = Math.sin(lat21) + 2 * sinLat1 * cosLat2 * hav(lng21);
        double denom = (a * a + b * b) * (c * c + d * d);
        return denom <= 0 ? 1 : (a * d - b * c) / Math.sqrt(denom);
    }

    static public double toRadians(double value) {
        return value * TO_RAD;
    }

    static public double distanceRadians(double lat1, double lng1, double lat2, double lng2) {
        return arcHav(havDistance(lat1, lat2, lng1 - lng2));
    }

    static public double computeAngleBetween(MapPos from, MapPos to) {
        return distanceRadians(toRadians(from.getY()), toRadians(from.getX()), toRadians(to.getY()),
                toRadians(to.getX()));
    }

    static public double computeDistanceBetween(MapPos from, MapPos to) {
        return computeAngleBetween(from, to) * EARTH_RADIUS;
    }

    static public double distanceToEnd(int index, MapPosVector poly) {
        int result = 0;
        long size = poly.size();
        MapPos last = null;
        MapPos element;
        for (int i = index; i < size; i++) {
            element = poly.get(i);
            if (last != null) {
                result += computeDistanceBetween(last, element);
            }
            last = element;
        }
        return result;
    }

    static public boolean isOnSegmentGC(double lat1, double lng1, double lat2, double lng2, double lat3, double lng3,
            double havTolerance) {
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
        return sinSumAlongTrack > 0; // Compare with half-circle == PI using sign of sin().
    }

    static public long isLocationOnPath(MapPos point, MapPosVector poly) {
        return isLocationOnPath(point, poly, false, true, 0.1);
    }

    static public long isLocationOnPath(MapPos point, MapPosVector poly, boolean closed) {
        return isLocationOnPath(point, poly, closed, true, 0.1);
    }

    static public long isLocationOnPath(MapPos point, MapPosVector poly, boolean closed, boolean geodesic) {
        return isLocationOnPath(point, poly, closed, geodesic, 0.1);
    }

    static public long isLocationOnPath(MapPos point, MapPosVector poly, boolean closed, boolean geodesic,
            double toleranceEarth) {
        long size = poly.size();
        if (size == 0) {
            return -1;
        }
        double tolerance = toleranceEarth / EARTH_RADIUS;
        double havTolerance = hav(tolerance);
        double lat3 = toRadians(point.getY());
        double lng3 = toRadians(point.getX());
        MapPos prev = poly.get(closed ? (int) (size - 1) : 0);
        double lat1 = toRadians(prev.getY());
        double lng1 = toRadians(prev.getX());
        if (geodesic) {
            for (int index = 0; index < size; index++) {
                MapPos point2 = poly.get(index);

                double lat2 = toRadians(point2.getY());
                double lng2 = toRadians(point2.getX());
                if (isOnSegmentGC(lat1, lng1, lat2, lng2, lat3, lng3, havTolerance)) {
                    return index;
                }
                lat1 = lat2;
                lng1 = lng2;
            }
        } else {
            // We project the points to mercator space, where the Rhumb segment is a
            // straight line,
            // and compute the geodesic distance between point3 and the closest point on the
            // segment. This method is an approximation, because it uses "closest" in
            // mercator
            // space which is not "closest" on the sphere -- but the error is small because
            // "tolerance" is small.
            double minAcceptable = lat3 - tolerance;
            double maxAcceptable = lat3 + tolerance;
            double y1 = mercator(lat1);
            double y3 = mercator(lat3);
            double[] xTry = {};
            for (int index = 0; index < size; index++) {
                MapPos point2 = poly.get(index);
                double lat2 = toRadians(point2.getY());
                double y2 = mercator(lat2);
                double lng2 = toRadians(point2.getX());
                if (Math.max(lat1, lat2) >= minAcceptable && Math.min(lat1, lat2) <= maxAcceptable) {
                    // We offset longitudes by -lng1; the implicit x1 is 0.
                    double x2 = wrap(lng2 - lng1, -Math.PI, Math.PI);
                    double x3Base = wrap(lng3 - lng1, -Math.PI, Math.PI);
                    xTry[0] = x3Base;
                    // Also explore wrapping of x3Base around the world in both directions.
                    xTry[1] = x3Base + 2 * Math.PI;
                    xTry[2] = x3Base - 2 * Math.PI;
                    for (int index2 = 0; index2 < xTry.length; index2++) {
                        double x3 = xTry[index2];
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
}
