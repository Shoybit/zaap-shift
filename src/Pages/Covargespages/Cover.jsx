import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const FlyMap = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 14);
  }
  return null;
};

const Cover = () => {
  const defaultPosition = [23.685, 90.356];
  const serviceCenter = useLoaderData();

  const [flyCoords, setFlyCoords] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.trim().toLowerCase();
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location)
    );

    if (district && district.latitude && district.longitude) {
      setFlyCoords([Number(district.latitude), Number(district.longitude)]);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div>
      <h2>We are available in 64 districts</h2>

      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="search"
          name="location"
          placeholder="Search district"
          className="border p-2 rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      <div className="border w-full h-[800px]">
        <MapContainer
          center={defaultPosition}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter.map((center, index) => {
            const lat = Number(center.latitude);
            const lng = Number(center.longitude);
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

          {/* Fly to searched coordinates */}
          {flyCoords && <FlyMap coords={flyCoords} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default Cover;
