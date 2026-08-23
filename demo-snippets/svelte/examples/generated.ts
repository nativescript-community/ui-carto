// GENERATED FILE - do not edit by hand.
// Regenerate with `npm run examples` (scripts/examples), which reads the SDK's
// docs/examples/examples.json - the same manifest the Android gallery and the
// website build from, so the three cannot drift.

export interface ExampleEntry {
    id: string;
    title: string;
    description: string;
    /**
     * The screenshot, as a URL into the SDK repo, or null when the example has none.
     *
     * LINKED rather than bundled: a NativeScript <image src> takes a URL, so the grid
     * needs no asset rule in the host app's bundler, the package carries no megabytes
     * of PNG, and a recaptured screenshot needs no resync. The cost is that the grid
     * wants the network the first time it is opened.
     */
    image: string | null;
    /** Loaded on demand: opening the gallery must not evaluate every example. */
    readonly component: any;
}

export interface ExampleSection {
    id: string;
    title: string;
    description: string;
    examples: ExampleEntry[];
}

function entry(id: string, title: string, description: string, image: string | null, load: () => any): ExampleEntry {
    return {
        id,
        title,
        description,
        image,
        get component() {
            return load().default;
        }
    };
}

export const exampleSections: ExampleSection[] = [
    {
        id: "basics",
        title: "Map basics",
        description: "Put a map on screen and point it somewhere.",
        examples: [
            entry("display-a-map", "Display a map", "One raster layer from one spec, and a camera pointed at it. The whole map is six lines.", "https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples/screenshots/display-a-map.png", () => require('./DisplayAMap.svelte')),
        ]
    },
    {
        id: "camera",
        title: "Camera",
        description: "Move, fly, frame and constrain the view.",
        examples: [
            entry("fly-to", "Fly to a location", "One flight moves position, zoom, rotation and tilt together. Four separate setters would animate independently and visibly fight.", "https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples/screenshots/fly-to.png", () => require('./FlyTo.svelte')),
        ]
    },
    {
        id: "sources",
        title: "Sources & data",
        description: "Where tiles and features come from.",
        examples: [
            entry("geojson-line", "Add a GeoJSON line", "A \"geojson\" source re-tiles the document on the fly, so the features are styled with CartoCSS and drawn by the same renderer as a tile server's.", "https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples/screenshots/geojson-line.png", () => require('./GeojsonLine.svelte')),
        ]
    },
    {
        id: "styles",
        title: "Styles & layers",
        description: "CartoCSS, style projects and layer composition.",
        examples: [
            entry("style-parameters", "Change a style at runtime", "A style project declares `param::` values the app sets while the map runs. A colour swaps live; a parameter used in a filter re-decodes the tiles.", "https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples/screenshots/style-parameters.png", () => require('./StyleParameters.svelte')),
        ]
    },
    {
        id: "terrain",
        title: "3D terrain",
        description: "Elevation, hillshade, sky and fog.",
        examples: [
            entry("terrain-3d", "3D terrain, hybrid", "Satellite imagery draped over an elevation mesh, with roads and summit labels above it. One DEM source drives the mesh, the hillshade and the elevation queries.", "https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples/screenshots/terrain-3d.png", () => require('./Terrain3d.svelte')),
        ]
    },
    {
        id: "annotations",
        title: "Markers & popups",
        description: "Things an app puts on the map itself.",
        examples: [
            entry("markers", "Markers and popups", "addMarker takes a spec that carries the position AND the style. Tap a summit for a balloon popup; tap the map to dismiss it.", "https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples/screenshots/markers.png", () => require('./Markers.svelte')),
        ]
    },
    {
        id: "interaction",
        title: "Interaction",
        description: "Clicks, features and live updates.",
        examples: [
            entry("feature-click", "Get the feature under a tap", "The click payload is read lazily by path, so asking for one property never parses the whole feature - and a handler that found what it wanted returns true to claim the click, so nothing after it sees the tap.", "https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples/screenshots/feature-click.png", () => require('./FeatureClick.svelte')),
            entry("map-events", "Refresh data when the map settles", "map.stable fires once when a movement ends, with the reason that caused it - so a data refresh runs once per gesture, and never for your own camera calls.", null, () => require('./MapEvents.svelte')),
        ]
    },
    {
        id: "search",
        title: "Search & routing",
        description: "Finding features and getting from A to B.",
        examples: [
            entry("search-features", "Search the map's own tiles", "Every filter on a search request is an ordinary property. Runs async, because a search fetches and decodes every tile in range.", "https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples/screenshots/search-features.png", () => require('./SearchFeatures.svelte')),
        ]
    },
];
