import React, { useState, useEffect } from "react";
import { Map, Marker } from "google-maps-react";
import "./mapa.css"

const MyMapComponent = () => {
  const [location, setLocation] = useState({ lat: 2.4427442336088903,  lng: -76.60333565079202 });
  const [center, setCenter] = useState({ lat: 2.4420796500701263,  lng: -76.60631826719997 });


  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:3001/Locations", {
        method: "GET"
      })
        .then(response => response.json())
        .then(data => {
          console.log(data); // Imprimir en la consola la respuesta de la petición GET

          // Actualizar la ubicación del dispositivo en el estado
          const locationData = data[0].location;
          setLocation({
            lat: locationData.latitude,
            lng: locationData.longitude
          });
        })
        .catch(error => {
          console.error(error);
        });
    }, 3000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="map-container">
      <Map google={window.google} zoom={15} initialCenter={center} center={center}>
        <Marker position={location} />
      </Map>
    </div>
  );
};

export default MyMapComponent;