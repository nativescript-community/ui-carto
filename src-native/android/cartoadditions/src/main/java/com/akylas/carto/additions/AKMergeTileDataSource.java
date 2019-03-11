package com.akylas.carto.additions;

import java.nio.ByteBuffer;

import com.carto.core.BinaryData;
import com.carto.core.MapBounds;
import com.carto.core.MapPos;
import com.carto.core.MapTile;
import com.carto.datasources.TileDataSource;
import com.carto.datasources.components.TileData;
import com.carto.projections.Projection;

public class AKMergeTileDataSource extends TileDataSource {
    TileDataSource[] sources;
    TileDataSource firstSource;
    int sourcesCount;
    int minZoom = -1000;
    int maxZoom = 1000;
    public AKMergeTileDataSource(TileDataSource[] sources) {
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
        for(int i = 1; i< sourcesCount; i++) {
            TileDataSource source = sources[i];
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
//        return firstSource.loadTile(tile);
        TileData result = null;
       int zoom = tile.getZoom();
        for(int i = 0; i< sourcesCount; i++) {
            TileDataSource source = sources[i];
          if (zoom <= source.getMaxZoom() && zoom >= source.getMinZoom()) {
               TileData sourceResult = source.loadTile(tile);
               if (result == null) {
                   result = sourceResult;
               } else if (sourceResult != null && !result.isReplaceWithParent()){
                   byte[] data1 = result.getData().getData();
                   byte[] data2 = sourceResult.getData().getData();
                   ByteBuffer bb = ByteBuffer.allocate(data1.length + data2.length);
                   bb.put(data1);
                   bb.put(data2);
                   result = new TileData(new BinaryData(bb.array()));
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
