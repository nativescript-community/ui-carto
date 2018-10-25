package com.akylas.carto.additions;

import com.carto.core.MapBounds;
import com.carto.core.MapPos;
import com.carto.core.MapTile;
import com.carto.datasources.TileDataSource;
import com.carto.datasources.components.TileData;
import com.carto.projections.Projection;
import android.util.Log;

public class AKOrderedDataSource extends TileDataSource {
    TileDataSource[] sources;
    TileDataSource firstSource;
    int sourcesCount;
    int minZoom = 1000;
    int maxZoom = -1000;
    public AKOrderedDataSource(TileDataSource[] sources) {
        this.sources = sources;
        firstSource = sources[0];
        sourcesCount = sources.length;
        MapBounds bounds = firstSource.getDataExtent();
        double minX = bounds.getMin().getX();
        double minY = bounds.getMin().getY();
        double minZ = bounds.getMin().getZ();
        double maxX = bounds.getMax().getX();
        double maxY = bounds.getMax().getY();
        double maxZ = bounds.getMax().getZ();
        
        minZoom = firstSource.getMinZoom();
        maxZoom = firstSource.getMaxZoom();
        Log.d("OrderedDataSource", "source" + 0 + " " +  minZoom + "," + maxZoom);
        for(int i = 1; i< sourcesCount; i++) {
            TileDataSource source = sources[i];
            Log.d("OrderedDataSource", "source" + 0 + " " +  source.getMinZoom() + "," + source.getMaxZoom());
            minZoom = Math.min(minZoom, source.getMinZoom());
            maxZoom = Math.max(maxZoom, source.getMaxZoom());
            
            bounds = sources[i].getDataExtent();
            if (bounds.getMin().getX() < minX) {
                minX = bounds.getMin().getX();
            }
            if (bounds.getMax().getX() > maxX) {
                maxX = bounds.getMax().getX();
            }
        
            if (bounds.getMin().getY() < minY) {
                minY = bounds.getMin().getY();
            }
            if (bounds.getMax().getY() > maxY) {
                maxY = bounds.getMax().getY();
            }
        
            if (bounds.getMin().getZ() < minZ) {
                minZ = bounds.getMin().getZ();
            }
            if (bounds.getMax().getZ() > maxZ) {
                maxZ = bounds.getMax().getZ();
            }
        }

        
        this.bounds = new MapBounds(new MapPos(minX, minY, minZ), new MapPos(maxX, maxY, maxZ));
    }
    
    @Override
    public TileData loadTile(MapTile tile) {
    //    return sources[1].loadTile(tile);
        TileData result = null;
        int zoom = tile.getZoom();
        for(int i = 0; i< sourcesCount; i++) {
            TileDataSource source = sources[i];
           if (zoom <= source.getMaxZoom() && zoom >= source.getMinZoom()) {
               result = source.loadTile(tile);
               if (result != null && !result.isReplaceWithParent()) {
                   break;
               }
           }
            
        }
        return result;
    }

    @Override
    public Projection getProjection() {
        return firstSource.getProjection();
    }
    @Override
    public int getMinZoom() {
        return minZoom;
    }

    @Override
    public int getMaxZoom() {
        return maxZoom;
    }
    
    MapBounds bounds = null;
    MapBounds getBounds() {
        return bounds;
    }


    @Override
    public MapBounds getDataExtent() {
        return getBounds();
    }
    
    @Override
    public void notifyTilesChanged(boolean removeTiles) {
        for(int i = 0; i< sourcesCount; i++) {
            sources[i].notifyTilesChanged(removeTiles);
        }
    }
}
