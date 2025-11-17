import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Cover = () => {
  const position = [23.6850, 90.3563];
  const serviceCenter = useLoaderData();

  return (
    <div>
      <h2>We are available in 64 districts</h2>

      <div className="border w-full h-[800px]">
        <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="h-[800px]">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter.map((center, index) => {
            const lat = Number(center.latitude);
            const lng = Number(center.longitude);

            // Skip invalid data
            if (!lat || !lng) return null;

            return (
              <Marker key={center.id || index} position={[lat, lng]}>
                <Popup>
                  {center.name || "Service Center"} <br />
                  Latitude: {lat} <br />
                  Longitude: {lng}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Cover;
