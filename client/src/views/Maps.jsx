import React from 'react';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
const CustomMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 18.2208, lng: -66.5901 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 17.9725, lng: -66.9086 }} />
    </GoogleMap>
  ))
);
console.log(process.env.REACT_APP_GOOGLE_API);
function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=Google_API_Key&libraries=places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;
