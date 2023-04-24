import React, { useState } from 'react';
import './map.css';
import { useNavigate } from 'react-router-dom';

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Map = () => {
    const navigate = useNavigate();

    const searchCountry = (country) => {
        navigate(`/result?country=${encodeURIComponent(country)}`);
    };

    return (
      <div className='world-map'>
        <ComposableMap>
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography 
                    key={geo.rsmKey} 
                    geography={geo} 
                    style={{
                      hover: { 
                        fill: "#F53",
                        outline: "none"
                      }
                    }}
                    onClick={() => {
                        searchCountry(geo.properties.name);
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
}

export default Map;