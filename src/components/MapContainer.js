import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = ({latitude, longitude}) => {
  const mapStyles = {        
    height: "100vh",
    width: "100%"
  }
  
  const defaultCenter = {
    lat: 87.6, lng: 76.5
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCxji9Emp6vrPqPJjkUR2pJ0_xCedyC2K8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;