// components/MapBox.tsx

import React from "react";

interface MapBoxProps {
  address: string;
}

const MapBox: React.FC<MapBoxProps> = ({ address }) => {
  // Encode the address to be URL-safe
  const encodedAddress = encodeURIComponent(address);

  // Google Maps embed URL with marker support (no API key needed)
  const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className="map-box ratio ratio-16x9 mb-4">
      <iframe
        title="Property Location"
        src={mapSrc}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapBox;
