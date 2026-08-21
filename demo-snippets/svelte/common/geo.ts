export interface LatLon {
    latitude: number;
    longitude: number;
}

const EARTH_RADIUS = 6378137;
const DEG = Math.PI / 180;

/** metres between two WGS84 positions (haversine; good to a few cm at these distances) */
export function distanceBetween(a: LatLon, b: LatLon) {
    const dLat = (b.latitude - a.latitude) * DEG;
    const dLon = (b.longitude - a.longitude) * DEG;
    const lat1 = a.latitude * DEG;
    const lat2 = b.latitude * DEG;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    return 2 * EARTH_RADIUS * Math.asin(Math.min(1, Math.sqrt(h)));
}

function interpolate(a: LatLon, b: LatLon, t: number): LatLon {
    return { latitude: a.latitude + (b.latitude - a.latitude) * t, longitude: a.longitude + (b.longitude - a.longitude) * t };
}

/**
 * The slice of `points` around `index` that reaches `before` metres back along the line
 * and `after` metres forward - which is exactly what an SDK ManeuverArrowBuilder cuts out
 * of a route around a turn. Both ends land ON the line rather than on the nearest vertex,
 * so the arrow keeps a constant length whatever the vertex spacing is.
 */
export function sliceAround(points: LatLon[], index: number, before: number, after: number): LatLon[] {
    if (index <= 0 || index >= points.length - 1) {
        return [];
    }
    const back: LatLon[] = [];
    let remaining = before;
    for (let i = index; i > 0 && remaining > 0; i--) {
        const segment = distanceBetween(points[i - 1], points[i]);
        if (segment <= 0) {
            continue;
        }
        if (segment >= remaining) {
            back.unshift(interpolate(points[i], points[i - 1], remaining / segment));
            remaining = 0;
        } else {
            back.unshift(points[i - 1]);
            remaining -= segment;
        }
    }
    const forward: LatLon[] = [];
    remaining = after;
    for (let i = index; i < points.length - 1 && remaining > 0; i++) {
        const segment = distanceBetween(points[i], points[i + 1]);
        if (segment <= 0) {
            continue;
        }
        if (segment >= remaining) {
            forward.push(interpolate(points[i], points[i + 1], remaining / segment));
            remaining = 0;
        } else {
            forward.push(points[i + 1]);
            remaining -= segment;
        }
    }
    return [...back, points[index], ...forward];
}

export function toGeoJSONLine(points: LatLon[], properties: Record<string, any> = {}) {
    return {
        type: 'Feature',
        properties,
        geometry: { type: 'LineString', coordinates: points.map((p) => [p.longitude, p.latitude]) }
    };
}

export function featureCollection(features: any[]) {
    return { type: 'FeatureCollection', features };
}

export function formatDistance(metres: number) {
    return metres >= 1000 ? `${(metres / 1000).toFixed(1)} km` : `${Math.round(metres)} m`;
}

export function formatDuration(seconds: number) {
    const total = Math.round(seconds / 60);
    return total >= 60 ? `${Math.floor(total / 60)} h ${total % 60} min` : `${total} min`;
}
