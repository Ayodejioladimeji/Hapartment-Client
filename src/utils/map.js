import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import MapSkeleton from "./../common/placeholder";
import { useState } from "react";

const Map = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_GOOGLE_API_KEY,
  });

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  //   const defaultCenter = {
  //     lat,
  //     lng,
  //   };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  if (!isLoaded) {
    return <MapSkeleton />;
  }

  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  );
};

export default Map;
