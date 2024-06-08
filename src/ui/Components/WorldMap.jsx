import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap = () => {
  const position = [43.6050, -12.5300]; // Coordenadas em decimal

  return (
    <MapContainer center={position} zoom={4} className='map-container'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Coordenadas: 43° 36.3' N, 12° 31.8' W
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WorldMap;
