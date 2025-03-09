import React, { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Planting {
  id: number;
  latitude: number;
  longitude: number;
  species: string;
  planter_name?: string;
  organization?: string;
  created_at: string;
}

interface TreePlantingMapProps {
  plantings: Planting[];
}

const TreePlantingMap: React.FC<TreePlantingMapProps> = ({ plantings }) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([0, 0]);
  const [mapZoom, setMapZoom] = useState(2);

  // Memoize the map settings calculation
  const { center, zoom } = useMemo(() => {
    if (plantings.length === 0) return { center: [0, 0] as [number, number], zoom: 2 };

    const latitudes = plantings.map(p => p.latitude);
    const longitudes = plantings.map(p => p.longitude);
    const centerLat = (Math.min(...latitudes) + Math.max(...latitudes)) / 2;
    const centerLng = (Math.min(...longitudes) + Math.max(...longitudes)) / 2;

    const latSpread = Math.max(...latitudes) - Math.min(...latitudes);
    const lngSpread = Math.max(...longitudes) - Math.min(...longitudes);
    const maxSpread = Math.max(latSpread, lngSpread);
    const newZoom = Math.floor(14 - Math.log2(maxSpread));

    return {
      center: [centerLat, centerLng] as [number, number],
      zoom: Math.max(2, Math.min(newZoom, 13))
    };
  }, [plantings]);

  useEffect(() => {
    setMapCenter(center);
    setMapZoom(zoom);
  }, [center, zoom]);

  // Memoize the markers
  const markers = useMemo(() => plantings.map((planting) => (
    <Marker key={planting.id} position={[planting.latitude, planting.longitude]}>
      <Popup>
        <div>
          <h3>{planting.species}</h3>
          <p>Planted by: {planting.planter_name || 'Anonymous'}</p>
          <p>Organization: {planting.organization || 'Unknown'}</p>
          <p>Date: {new Date(planting.created_at).toLocaleDateString()}</p>
        </div>
      </Popup>
    </Marker>
  )), [plantings]);

  return (
    <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers}
    </MapContainer>
  );
};

export default TreePlantingMap;
