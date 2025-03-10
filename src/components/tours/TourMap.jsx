// src/components/tours/TourMap.jsx
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A';

const TourMap = ({ locations }) => {
    const mapContainerRef = useRef(null);
    
    useEffect(() => {
      if (!locations || locations.length === 0) return;
  
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        scrollZoom: false
      });
  
      const bounds = new mapboxgl.LngLatBounds();
  
      locations.forEach(loc => {
        // Tạo marker
        const el = document.createElement('div');
        el.className = 'marker';
  
        // Thêm marker
        new mapboxgl.Marker({
          element: el,
          anchor: 'bottom'
        })
          .setLngLat(loc.coordinates)
          .addTo(map);
  
        // Thêm popup
        new mapboxgl.Popup({
          offset: 30
        })
          .setLngLat(loc.coordinates)
          .setHTML(`<p>Ngày ${loc.day}: ${loc.description}</p>`)
          .addTo(map);
  
        // Mở rộng bounds để bao gồm vị trí hiện tại
        bounds.extend(loc.coordinates);
      });
  
      map.fitBounds(bounds, {
        padding: {
          top: 200,
          bottom: 150,
          left: 100,
          right: 100
        }
      });
  
      return () => map.remove();
    }, [locations]);
  
    return (
      <section className="section-map">
        <div id="map" ref={mapContainerRef}></div>
      </section>
    );
  };

export default TourMap;