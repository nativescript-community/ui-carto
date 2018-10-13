package com.akylas.carto.additions;

import java.io.IOException;

import com.carto.core.MapTile;
import com.carto.core.StringMap;
import com.carto.datasources.components.TileData;
import com.carto.utils.BitmapUtils;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Rect;

public class AKMBTilesTileDataSource
        extends com.carto.datasources.MBTilesTileDataSource {
    protected int mTileSizePixels;
    protected boolean mEnableSSL = false;
    protected float mDpi = 1.0f;
    // private float mOpacity = 1.0f;

    private boolean mAutoHD = false;
    // private boolean mVisible = true;
    protected boolean mShowTileAfterMaxZoom = true;
    protected boolean mShowTileBeforeMaxZoom = false;
    protected float mMinimumZoomLevel = -1.0f;
    protected float mMaximumZoomLevel = -1.0f;

    public AKMBTilesTileDataSource(int minZoom, int maxZoom, String baseURL) throws IOException {
        super(minZoom, maxZoom, baseURL);
    }

    protected boolean shouldMergeIfNull = false;;
    private Rect drawingRect = new Rect();

    public TileData mergeTileDatas(TileData[] parts) {

        // Check if any of the bitmap is null (if so return null) :
        boolean anyNull = false;
        boolean allNull = false;
        for (int i = 0; i < parts.length; i++) {
            if (parts[i] == null) {
                anyNull = true;
            } else {
                allNull = false;
            }
        }
        if (allNull || (!shouldMergeIfNull && anyNull)) {
            return null;
        }
        Bitmap tileBitmap = null;
        try {
            tileBitmap = Bitmap.createBitmap(512, 512, Bitmap.Config.ARGB_8888);
        } catch (Exception e) {
            return null;
        }
        Canvas canvas = new Canvas(tileBitmap);
        for (int i = 0; i < parts.length; i++) {

            if (parts[i] != null) {
                byte[] data = parts[i].getData().getData();
                Bitmap partBmp = BitmapFactory.decodeByteArray(data, 0,
                        data.length, null);
                final int left = partBmp.getWidth() * (i % 2);
                final int top = partBmp.getHeight() * (i / 2);
                drawingRect.set(left, top, left + 256, top + 256);
                canvas.drawBitmap(partBmp, null, drawingRect, null);
            }
        }
        TileData result = new TileData(
                BitmapUtils.createBitmapFromAndroidBitmap(tileBitmap)
                        .compressToInternal());
        tileBitmap.recycle();

        return result;
    }

    public TileData getTileFromNextZoomLevel(final MapTile mapTile, final int x,
            final int y, final int z) {
        final TileData[] tiles = new TileData[4];
        Thread t1 = new Thread() {

            @Override
            public void run() {
                tiles[0] = actualLoadTile(new MapTile(x * 2, y * 2, z + 1, 0));
            }
        };

        Thread t2 = new Thread() {

            @Override
            public void run() {
                tiles[1] = actualLoadTile(
                        new MapTile(x * 2 + 1, y * 2, z + 1, 0));
            }
        };

        Thread t3 = new Thread() {

            @Override
            public void run() {
                tiles[2] = actualLoadTile(
                        new MapTile(x * 2, y * 2 + 1, z + 1, 0));
            }
        };

        Thread t4 = new Thread() {

            @Override
            public void run() {
                tiles[3] = actualLoadTile(
                        new MapTile(x * 2 + 1, y * 2 + 1, z + 1, 0));
            }
        };
        t1.start();
        t2.start();
        t3.start();
        t4.start();

        try {
            t1.join();
            t2.join();
            t3.join();
            t4.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return mergeTileDatas(tiles);

    }

    public TileData actualLoadTile(MapTile mapTile) {
        return super.loadTile(mapTile);
    }

    @Override
    public TileData loadTile(MapTile mapTile) {
        boolean needsHd = mTileSizePixels / mDpi <= 128 && mAutoHD;
        int x = mapTile.getX();
        int y = mapTile.getY();
        int z = mapTile.getZoom();
        int hdZ = (needsHd ? z + 1 : z);
        boolean passedMin = mMinimumZoomLevel >= 0 && hdZ < mMinimumZoomLevel;

        if (passedMin && !mShowTileBeforeMaxZoom) {
            return null;
        }

        boolean passedMax = mMaximumZoomLevel >= 0 && hdZ > mMaximumZoomLevel;
        if (passedMax && !mShowTileAfterMaxZoom) {
            return null;
        }

        // if (mVisible == false || mOpacity == 0.0f) {
        // return null;
        // }
        TileData tileData = null;
        boolean needsCrop = false;
        double deltaCropX = 0.0f;
        double deltaCropY = 0.0f;
        double cropSize = 0.0f;
        if (passedMin) {
            // needsCrop = true;
            // int minZoom = (int) (needsHd ? (mMinimumZoomLevel - 1)
            // : mMinimumZoomLevel);
            // float currentTileDepth = mMinimumZoomLevel - z;
            // double nextx = x / Math.pow(2.0, currentTileDepth);
            // double nexty = y / Math.pow(2.0, currentTileDepth);
            // x = (int) Math.floor(nextx);
            // y = (int) Math.floor(nexty);
            // z = maxZoom;
            // cropSize = 1.0f / Math.pow(2.0, currentTileDepth);
            // deltaCropX = nextx - x;
            // deltaCropY = nexty - y;
        } else if (passedMax) {
            needsCrop = true;
            int maxZoom = (int) (needsHd ? (mMaximumZoomLevel - 1)
                    : mMaximumZoomLevel);
            float currentTileDepth = mapTile.getZoom() - maxZoom;
            double nextx = mapTile.getX() / Math.pow(2.0, currentTileDepth);
            double nexty = mapTile.getY() / Math.pow(2.0, currentTileDepth);
            x = (int) Math.floor(nextx);
            y = (int) Math.floor(nexty);
            z = maxZoom;
            cropSize = 1.0f / Math.pow(2.0, currentTileDepth);
            deltaCropX = nextx - x;
            deltaCropY = nexty - y;
        }
        if (needsHd) {
            tileData = getTileFromNextZoomLevel(mapTile, x, y, z);
        } else {
            tileData = actualLoadTile(mapTile);
        }
        if (tileData != null) {
            if (needsCrop) {
                byte[] data = tileData.getData().getData();
                Bitmap tileImage = BitmapFactory.decodeByteArray(data, 0,
                        data.length, null);
                Bitmap oldBitmap = tileImage;
                final int width = tileImage.getWidth();
                final int height = tileImage.getHeight();
                tileImage = Bitmap.createBitmap(tileImage,
                        (int) (width * deltaCropX), (int) (height * deltaCropY),
                        (int) (width * cropSize), (int) (height * cropSize));
                if (oldBitmap != tileImage) {
                    oldBitmap.recycle();
                }
                return new TileData(
                        BitmapUtils.createBitmapFromAndroidBitmap(tileImage)
                                .getPixelData());
            }
        }
        return tileData;
    }

    @Override
    public StringMap getMetaData() {
        StringMap result = getMetaData();
        if (mShowTileBeforeMaxZoom) {
            result.set("mibnzoom", "0");
        }
        if (mShowTileAfterMaxZoom) {
            result.set("maxzoom", "22");
        }
        return result;
    }

    public AKMBTilesTileDataSource setAutoHD(final boolean hd) {
        mAutoHD = hd;
        return this;
    }

    public AKMBTilesTileDataSource setShowTileAfterMaxZoom(
            boolean showTileAfterMaxZoom) {
        mShowTileAfterMaxZoom = showTileAfterMaxZoom;
        return this;

    }

    public AKMBTilesTileDataSource setMinimumZoomLevel(
            final float aMinimumZoomLevel) {
        this.mMinimumZoomLevel = aMinimumZoomLevel;
        return this;
    }

    /**
     * Sets the layer's minimum zoom level.
     */
    public AKMBTilesTileDataSource setMaximumZoomLevel(
            final float aMaximumZoomLevel) {
        this.mMaximumZoomLevel = aMaximumZoomLevel;
        return this;
    }

    public AKMBTilesTileDataSource setTileSize(final int size) {
        mTileSizePixels = size;
        return this;
    }

    public AKMBTilesTileDataSource setDpi(final float dpi) {
        mDpi = dpi;
        return this;
    }

    public float getMinimumZoomLevel() {
        return mMinimumZoomLevel;
    }
    public float getDpi() {
        return mDpi;
    }

    @Override
    public int getMinZoom() {
        return (int) (mShowTileBeforeMaxZoom ? 0 : mMinimumZoomLevel);
    }

    @Override
    public int getMaxZoom() {
        return (int) (mShowTileAfterMaxZoom ? 22 : mMaximumZoomLevel);
    }

    public float getMaximumZoomLevel() {
        return mMaximumZoomLevel;
    }

    public int getTileSizePixels() {
        return mTileSizePixels;
    }

    public float getCenterZoom() {
        return Math.round(mMaximumZoomLevel + mMinimumZoomLevel) / 2;
    }
}
