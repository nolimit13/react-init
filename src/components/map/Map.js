import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.center.lat, lng: props.center.lng }}
    >
        {props.markers.map(marker => (
            <Marker position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }} >

            <InfoBox defaultPosition={{lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                {marker.cityName}
            </div>
            </div>
            </InfoBox>
            </Marker>

        ))}
    </GoogleMap>
);
export default MapWithAMarker;

