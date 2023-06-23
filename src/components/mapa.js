import React, { useState, useEffect } from "react";
import { loadGoogleMaps } from "./google-maps.ts"

const MyMapComponent = () => {
  const [center, setCenter] = useState({ lat:2.4433471999999994, lng: -76.6066615 });

  const handleCenterChange = (event) => {
    const newCenter = JSON.parse(event.target.value);
    setCenter(newCenter);
  }

  useEffect(() => {
    loadGoogleMaps(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 20
      });

      // Crea un marcador personalizado
      const marker = new window.google.maps.Marker({
        position: center,
        map: map,
        title: "Conductor",
        icon: "https://maps.google.com/mapfiles/kml/pal2/icon31.png"
      });

    });
  }, [center]);

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
    <div style={{ flex: 1 }}>
      <div id="map" style={{ height: "400px" }}></div>
    </div>
    <div style={{ flex: 1 }}>
      <form>
        <label>
          <input type="radio" name="center" value='{"lat":2.4433471999999994, "lng": -76.6066615 }' checked={JSON.stringify(center) === '{"lat":2.4433471999999994, "lng": -76.6066615 }'} onChange={handleCenterChange} />
          Opción 1
        </label>
        <br />
        <label>
          <input type="radio" name="center" value='{"lat":2.443347, "lng": -76.606 }' checked={JSON.stringify(center) === '{"lat":2.443347, "lng": -76.606 }'} onChange={handleCenterChange} />
          Opción 2
        </label>
        <br />
        <label>
          <input type="radio" name="center" value='{"lat":2.443, "lng": -76.6 }' checked={JSON.stringify(center) === '{"lat":2.443, "lng": -76.6 }'} onChange={handleCenterChange} />
          Opción 3
        </label>
      </form>
    </div>
  </div>
  );
};

export default MyMapComponent;
