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

const Mapbox2 = (props) => {
  // props.data.data.iaqi
  console.log('map data weather:', props.data.current);
  const fillBlueOptions = { fillColor: 'blue' };
  const fillYellowOptions = { fillColor: 'yellow' };
  const fillRedOptions = { fillColor: 'red' };
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

          <LayersControl.Overlay name='DewPoint '>
            <Circle
              center={center}
              fillColor='blue'
              radius={props.data.current.dew_point * 10}
              stroke={false}
            >
              <Tooltip sticky>
                Dewpoint is {props.data.current.dew_point}
              </Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='Humidity '>
            <Circle
              center={center}
              fillColor='blue'
              radius={props.data.current.humidity * 10}
              stroke={false}
            >
              <Tooltip>Humidity is {props.data.current.humidity}</Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='Pressure'>
            <Circle
              center={center}
              fillColor='yellow'
              radius={props.data.current.pressure}
              stroke={false}
            >
              <Tooltip sticky>
                Pressure is {props.data.current.pressure}
              </Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='Temperature'>
            <Circle
              center={center}
              fillColor='red'
              radius={props.data.current.temp * 10}
              stroke={false}
            >
              <Tooltip sticky>Temperature is {props.data.current.temp}</Tooltip>
            </Circle>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='Visibility'>
            <Circle
              center={center}
              fillColor='grey'
              radius={props.data.current.visibility}
              stroke={false}
            >
              <Tooltip sticky>
                Visibility is {props.data.current.visibility}
              </Tooltip>
            </Circle>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default Mapbox2;
