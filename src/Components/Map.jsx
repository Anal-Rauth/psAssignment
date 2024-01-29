import { divIcon } from "leaflet";
import React, { useState } from "react";
import Map, { NavigationControl, FullscreenControl } from "react-map-gl";

export default function WORLDMap() {
  let [viewport, setViewport] = useState([
    { latitude: 37.7577, longitude: -122.4376, zoom: 10 },
    { width: window.innerWidth, height: window.innerHeight },
  ]);

  return (
    <div className="w-full h-full">
      <Map
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        // mapStyle="mapbox://styles/mapbox/streets-v9"
        className="h-full"
        mapboxAccessToken="pk.eyJ1IjoiYW5hbHJhdXRoIiwiYSI6ImNscng2M3BheDBzYjMyanRrN3FiZGh6YjQifQ.fDdL-M_Rdj2Q7d0ieLvDOg"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
          // pitch: 10,
        }}
      >
        {/* <NavigationControl 


          showCompass={true}
          visualizePitch={false} show
          showZoom={false}
        />  */}

        {/* <FullscreenControl /> */}
      </Map>
    </div>
  );
}
