// Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Set the initial position of the map
  const initialPosition = [11.004556, 76.961632];

  return (
    <MapContainer center={initialPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://psgitech.ac.in/">PSG iTech</a> DevOps Team'
      />
      <Marker position={initialPosition}>
        <Popup>
          A sample popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
