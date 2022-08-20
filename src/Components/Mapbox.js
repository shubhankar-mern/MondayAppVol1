import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Tooltip,
  LayersControl,
} from 'react-leaflet';
import { Icon } from 'leaflet';

function MapPlaceholder() {
  return (
    <p>
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
}

const Mapbox = (props) => {
  // props.data.data.iaqi
  console.log('map data pollution:', props.data.data.iaqi);

  console.log('latitude :', props.latitude);
  console.log('longitiude :', props.longitude);
  const fillBlueOptions = { fillColor: 'blue' };
  const fillYellowOptions = { fillColor: 'yellow' };
  const center = [props.latitude, props.longitude];
  return (
    <div className='leaflet-container'>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        placeholder={<MapPlaceholder />}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LayersControl position='topright'>
          <LayersControl.Overlay name='Current Location'>
            <Marker position={center}>
              <Popup>Andal</Popup>
            </Marker>
          </LayersControl.Overlay>

          <LayersControl.Overlay name='SO2 Index'>
            <Circle
              center={center}
              pathOptions={fillBlueOptions}
              radius={props.data.data.iaqi.so2.v * 1000}
            >
              <Tooltip sticky>
                SO2 levels is at {props.data.data.iaqi.so2.v}{' '}
              </Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='NO2 Index'>
            <Circle
              center={center}
              pathOptions={fillBlueOptions}
              radius={props.data.data.iaqi.no2.v * 1000}
            >
              <Tooltip sticky>
                NO2 level is at {props.data.data.iaqi.no2.v}
              </Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='O3 Index'>
            <Circle
              center={center}
              pathOptions={fillBlueOptions}
              radius={props.data.data.iaqi.o3.v * 1000}
            >
              <Tooltip sticky>
                O3 level is at {props.data.data.iaqi.o3.v}
              </Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='PM25 Index'>
            <Circle
              center={center}
              pathOptions={fillBlueOptions}
              radius={props.data.data.iaqi.pm25.v * 1000}
            >
              <Tooltip sticky>
                PM25 level is at {props.data.data.iaqi.pm25.v}
              </Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='PM10 Index'>
            <Circle
              center={center}
              pathOptions={fillBlueOptions}
              radius={props.data.data.iaqi.pm10.v * 1000}
            >
              <Tooltip sticky>
                PM10 level is at {props.data.data.iaqi.pm10.v}
              </Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='CO Index'>
            <Circle
              center={center}
              pathOptions={fillYellowOptions}
              radius={props.data.data.iaqi.co.v * 1000}
            >
              <Tooltip> CO level is at {props.data.data.iaqi.co.v}</Tooltip>
            </Circle>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Mapbox;
