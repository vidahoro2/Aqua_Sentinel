import React, { useState, useEffect } from "react";
import { Map, Marker } from "google-maps-react";
import './mapa.css'

const MyMapComponent = () => {
  const [center, setCenter] = useState({ lat:0, lng: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:3001/Locations", {
        method: "GET"
      })
        .then(response => response.json())
        .then(data => {
          // actualizamos la ubicación del dispositivo en el estado
          setCenter({
            lat: data.latitude,
            lng: data.longitude
          });
        })
        .catch(error => {
          console.error(error);
        });
    }, 1000);

    // limpiamos el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Map google={window.google} zoom={14} initialCenter={center} center={center}>
      <Marker position={center} />
    </Map>
  );
};

export default MyMapComponent;