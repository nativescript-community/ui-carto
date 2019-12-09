import { Marker, MarkerStyleBuilder } from 'nativescript-carto/vectorelements/marker';
import { Point, PointStyleBuilder } from 'nativescript-carto/vectorelements/point';
import { MapPos, MapPosVector, MapPosVectorVector } from 'nativescript-carto/core';
import { Color } from '@nativescript/core/color/color';
import { CartoMap } from 'nativescript-carto/ui';
import { Line, LineStyleBuilder } from 'nativescript-carto/vectorelements/line';
import { Projection } from 'nativescript-carto/projections';
import { LocalVectorDataSource } from 'nativescript-carto/datasources/vector';
import { Polygon, PolygonStyleBuilder } from 'nativescript-carto/vectorelements/polygon';
import { Text, TextStyleBuilder } from 'nativescript-carto/vectorelements/text';
import { VectorLayer } from 'nativescript-carto/layers/vector';
import { BillboardOrientation } from 'nativescript-carto/vectorelements';
import { BalloonPopup, BalloonPopupStyleBuilder } from 'nativescript-carto/vectorelements/balloonpopup';
import { NMLModel } from 'nativescript-carto/vectorelements/nmlmodel';
import { Polygon3D, Polygon3DStyleBuilder } from 'nativescript-carto/vectorelements/polygon3d';

export function addPoint1(source: LocalVectorDataSource, projection: Projection) {
    const green = new Color(255, 0, 255, 0);
    const point1 = GetPoint(projection, { latitude: 59.423581, longitude: 24.651488 }, green);
    point1.metaData = { ClickText: 'Point nr 1' };
    source.add(point1);
}

export function addPoint2(source: LocalVectorDataSource, projection: Projection) {
    const red = new Color(255, 255, 0, 0);
    const point2 = GetPoint(projection, { latitude: 59.422716, longitude: 24.655994 }, red);
    point2.metaData = { ClickText: 'Point nr 2' };
    source.add(point2);
}

export function addOverlyingLines(map: CartoMap, source: LocalVectorDataSource, projection: Projection) {
    // Initialize a second vector data source and vector layer
    // This secondary vector layer will be used for drawing borders for
    // line elements (by drawing the same line twice, with different widths)
    // Drawing order withing a layer is currently undefined
    // Using multiple layers is the only way to guarantee
    // that point, line and polygon elements are drawn in a specific order
    const source2 = new LocalVectorDataSource({ projection });
    const vectorLayer2 = new VectorLayer({ dataSource: source2, visibleZoomRange: [10, 24] });
    map.addLayer(vectorLayer2);

    // Create line style, and line positions
    // let lineStyleBuilder = new LineStyleBuilder();

    const linePoses = [
        { latitude: 59.422074, longitude: 24.645565 },
        { latitude: 59.420502, longitude: 24.643076 },
        { latitude: 59.419149, longitude: 24.645351 },
        { latitude: 59.420393, longitude: 24.648956 },
        { latitude: 59.422707, longitude: 24.650887 }
    ];

    // .add first line
    const line1 = new Line({ projection, positions: linePoses, styleBuilder: {
        color: new Color(255, 255, 255, 255),
        width: 8
    } });
    line1.metaData = { ClickText: 'Line nr 1' };
    source2.add(line1);

    // Create another line style, use the same lines positions
    const lineStyleBuilder = new LineStyleBuilder({
        color: new Color(255, 204, 15, 0),
        width: 12
    });

    // .add second line to the second layer.
    const line2 = new Line({ projection, positions: linePoses, styleBuilder: lineStyleBuilder });
    line2.metaData = { ClickText: 'Line nr 2' };
    source.add(line2);
}

export function addText1(source: LocalVectorDataSource, projection: Projection) {
    // Create text style
    const builder = new TextStyleBuilder({
        color: new Color(255, 255, 0, 0), // Red
        orientationMode: BillboardOrientation.FACE_CAMERA
        // scaleWithDPI: false // This enables higher resolution texts for retina devices, but consumes more memory and is slower
    });

    // .add text
    const popup = new Text({ projection, position: { latitude: 59.422269, longitude: 24.653302 }, styleBuilder: builder, text: 'Face camera text' });
    popup.metaData = { ClickText: 'Text nr 1' };
    source.add(popup);
}

export function addText2(source: LocalVectorDataSource, projection: Projection) {
    const builder = new TextStyleBuilder({
        orientationMode: BillboardOrientation.FACE_CAMERA_GROUND
    });

    const popup = new Text({ projection, position: { latitude: 59.426869, longitude: 24.633216 }, styleBuilder: builder, text: 'Face camera ground text' });
    popup.metaData = { ClickText: 'Text nr 2' };

    source.add(popup);
}

export function addText3(source: LocalVectorDataSource, projection: Projection) {
    const builder = new TextStyleBuilder({
        fontSize: 22,
        orientationMode: BillboardOrientation.GROUND
    });

    const popup = new Text({ projection, position: { latitude: 59.420839, longitude: 24.646457 }, styleBuilder: builder, text: 'Ground text' });
    popup.metaData = { ClickText: 'Text nr 3' };

    source.add(popup);
}

export function addBalloonPopup1(source: LocalVectorDataSource, projection: Projection, leftImage, rightImage) {
    // TODO REMOVE WHEN ANDROID COMPLETE
    // const infoImage = BitmapFactory.decodeResource(getResources(), R.drawable.info);
    // const arrowImage = BitmapFactory.decodeResource(getResources(), R.drawable.arrow);
    // BitmapUtils.createBitmapFromAndroidBitmap(infoImage);
    // BitmapUtils.createBitmapFromAndroidBitmap(arrowImage);
    // .add popup
    const builder = new BalloonPopupStyleBuilder({
        leftImage,
        rightImage,
        // builder.RightMargins = new BalloonPopupMargins(2, 6, 12, 6);
        cornerRadius: 20,
        placementPriority: 1,
        titleFontSize: 10,
        descriptionFontSize: 10
    });
    // builder.LeftMargins = new BalloonPopupMargins(6, 6, 6, 6);

    // builder.RightMargins = new BalloonPopupMargins(2, 6, 12, 6);

    const popup1 = new BalloonPopup({ projection, position: { latitude: 59.425521, longitude: 24.655662 }, styleBuilder: builder, title: 'Popup with pos', description: 'Images, round' });
    popup1.metaData = { ClickText: 'Popup nr 1' };
    source.add(popup1);
}

export function addBalloonPopup2(source: LocalVectorDataSource, projection: Projection, leftImage, rightImage, markerImage) {
    // .add popup, but instead of giving it a position attach it to a marker
    const builder = new BalloonPopupStyleBuilder({
        color: new Color(255, 0, 0, 0),
        cornerRadius: 0,
        // leftMargins: new BalloonPopupMargins(6, 6, 6, 6),
        leftImage,
        rightImage,
        // rightMargins: new BalloonPopupMargins(2, 6, 12, 6),
        titleColor: new Color(255, 255, 255, 255),
        titleFontName: 'HelveticaNeue-Medium',
        titleFontSize: 11,
        descriptionColor: new Color(255, 255, 255, 255),
        descriptionFontName: 'HelveticaNeue-Medium',
        descriptionFontSize: 11,
        strokeColor: new Color(255, 255, 0, 120),
        strokeWidth: 0,
        placementPriority: 1
    });
    const marker = GetMarker(projection, { latitude: 59.426939, longitude: 24.646469 }, markerImage);
    source.add(marker);
    const marker2 = GetMarker(projection, { latitude: 59.422939, longitude: 24.666469 }, markerImage);
    source.add(marker2);
    const popup = new BalloonPopup({ marker, styleBuilder: builder, title: 'Popup attached to marker', description: 'Black, rectangle.' });
    popup.metaData = { ClickText: 'Popup nr 2' };
    source.add(popup);
}

export function addBalloonPopup3(source: LocalVectorDataSource, projection: Projection) {
    // .add popup
    const builder = new BalloonPopupStyleBuilder({
        descriptionWrap: false,
        placementPriority: 1,
        titleFontSize: 14,
        descriptionFontSize: 12
    });

    const title = "This title will be wrapped if there's not enough space on the screen.";
    const description = 'Description is set to be truncated with three dots, unless the screen is really really big.';
    const popup = new BalloonPopup({ projection, position: { latitude: 59.432521, longitude: 24.658662 }, styleBuilder: builder, title, description });
    popup.metaData = { ClickText: 'Popup nr 3' };
    source.add(popup);
}

export function add2DPolygon(source: LocalVectorDataSource, projection: Projection) {
    const lineBuilder = new LineStyleBuilder({
        width: 1,
        color: new Color(255, 0, 0, 0)
    });

    // Create polygon style and positions
    const polygonBuilder = new PolygonStyleBuilder({
        color: new Color(255, 255, 0, 0),
        lineStyleBuilder: lineBuilder
    });

    const polygonPoses = [
        { latitude: 59.421659, longitude: 24.65093 },
        { latitude: 59.416354, longitude: 24.657453 },
        { latitude: 59.414607, longitude: 24.661187 },
        { latitude: 59.418123, longitude: 24.667667 },
        { latitude: 59.421703, longitude: 24.665736 },
        { latitude: 59.421245, longitude: 24.661444 },
        { latitude: 59.420677, longitude: 24.660199 },
        { latitude: 59.420175, longitude: 24.656552 },
        { latitude: 59.421472, longitude: 24.65401 }
    ];

    // Create 2 polygon holes
    const polygonHoles = [
        [
            { latitude: 59.420522, longitude: 24.658409 },
            { latitude: 59.418896, longitude: 24.662207 },
            { latitude: 59.417411, longitude: 24.662207 },
            { latitude: 59.417171, longitude: 24.659524 },
            { latitude: 59.419834, longitude: 24.657615 }
        ],
        [{ latitude: 59.421243, longitude: 24.66564 }, { latitude: 59.419463, longitude: 24.668923 }, { latitude: 59.419365, longitude: 24.662893 }]
    ];

    // .add polygon
    const polygon = new Polygon({ projection, positions: polygonPoses, holes: polygonHoles, styleBuilder: polygonBuilder });
    polygon.metaData = { ClickText: 'Polygon' };
    source.add(polygon);
}

export function add3DCar(source: LocalVectorDataSource, projection: Projection) {
    // //.add a single 3D model to the vector layer
    // // Be sure to add milktruck.nml to your *Assets*, not Drawable, folder (Android)
    const name = '~/assets/milktruck.nml';
    const model = new NMLModel({ projection, position: { latitude: 59.423939, longitude: 24.646469 }, name, scale: 20 });
    model.metaData = { ClickText: 'Single Model' };
    source.add(model);
}

export function add3DPolygon(source: LocalVectorDataSource, projection: Projection) {
    // Create 3d polygon style and positions
    const polygon3DStyleBuilder = new Polygon3DStyleBuilder({
        color: new Color(255, 51, 51, 255)
    });
    const polygon3DPoses = new MapPosVector();
    polygon3DPoses.add(projection.fromWgs84({ latitude: 59.416659, longitude: 24.63593 }));
    polygon3DPoses.add(projection.fromWgs84({ latitude: 59.411354, longitude: 24.642453 }));
    polygon3DPoses.add(projection.fromWgs84({ latitude: 59.409607, longitude: 24.646187 }));
    polygon3DPoses.add(projection.fromWgs84({ latitude: 59.413123, longitude: 24.652667 }));
    polygon3DPoses.add(projection.fromWgs84({ latitude: 59.416703, longitude: 24.650736 }));
    polygon3DPoses.add(projection.fromWgs84({ latitude: 59.416245, longitude: 24.646444 }));
    // Create 3d polygon holes positions
    const holePositions = new MapPosVector();
    holePositions.add(projection.fromWgs84({ latitude: 59.411922, longitude: 24.643409 }));
    holePositions.add(projection.fromWgs84({ latitude: 59.412896, longitude: 24.651207 }));
    holePositions.add(projection.fromWgs84({ latitude: 59.414411, longitude: 24.643207 }));
    const holes = new MapPosVectorVector();
    holes.add(holePositions);
    // .add to datasource
    const polygon = new Polygon3D({ positions: polygon3DPoses, holes, styleBuilder: polygon3DStyleBuilder, height: 150 });
    polygon.metaData = { ClickText: 'Polygon 3D' };
    source.add(polygon);
}

export function GetMarker(projection: Projection, position: MapPos, image: any) {
    // TODO
    // Bitmap androidMarkerBitmap = BitmapFactory.decodeResource(getResources(), R.drawable.marker);
    // com.carto.graphics.Bitmap markerBitmap = BitmapUtils.createBitmapFromAndroidBitmap(androidMarkerBitmap);

    // Create marker style
    const builder = new MarkerStyleBuilder({
        bitmap: image,
        size: 30
    });

    // Create and return marker
    return new Marker({ projection, position, styleBuilder: builder });
}

export function GetPoint(projection: Projection, position: MapPos, color) {
    const pointStyleBuilder = new PointStyleBuilder({
        color,
        size: 16
    });

    return new Point({ projection, position, styleBuilder: pointStyleBuilder });
}
