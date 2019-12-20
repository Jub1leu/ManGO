import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCUnHhnMR0eLdlECBbF1vk2bfE60uB--RE"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
