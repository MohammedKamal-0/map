"use client"
import React from 'react'
import L, { icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import MarkerIcon from '../../../../node_modules/leaflet/dist/images/marker-icon.svg'
// import MarkerIcon from '../../../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from "react";
// import collage from '../../../../collage.json'


export default function Map() {

  // const [isOpen, setIsOpen] = useState(false);
  // var styles
  // if (isOpen) {
  //   styles = 'flex'
  // } else {
  //   styles = 'none'
  // }


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [])


  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    return position === null ? null : (
      <Marker
        icon={
          new L.Icon({
            //icon pines
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [100, 41],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41],
            // shadowUrl:MarkerShadow.src,
            shadowSize: [41, 41],
          })} 
          position={position}

      >
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  // if(loading) return <p>Loading..</p>

  return (
    <div>
      <MapContainer style={{
        zIndex: '0',
        height: '100vh',
        width: '100%'
      }} center={[33.27406820466889, 44.37757743190237]} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker

          icon={
            new L.Icon({
              //icon pines
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [60, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              // shadowUrl:MarkerShadow.src,
              shadowSize: [41, 41],
            })}
          position={[33.27406820466889, 44.37757743190237]}>

          <Popup>
            <h1>hhhhhhhh</h1>
          </Popup>
        </Marker> */}
        <Marker

          icon={
            new L.Icon({
              //icon pines
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [60, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              // shadowUrl:MarkerShadow.src,
              shadowSize: [41, 41],
            })}
          position={[33.27325, 44.37637]}>

          <Popup>
            <h1 className='text-3xl text-green-700'>Rafidain Bank</h1>
          </Popup>
        </Marker>
        <Marker

          icon={
            new L.Icon({
              //icon pines
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [60, 41],
              iconAnchor: [40.5, 41],
              popupAnchor: [0, -41],
              // shadowUrl:MarkerShadow.src,
              shadowSize: [41, 41],
            })}
          position={[33.273397043362145, 44.37649099820339]}>

          <Popup>
            <h1 className='text-3xl text-green-700'>Hospital</h1>
          </Popup>
        </Marker>


        {/* {collage.map((collage, id) => (
          <Marker
            position={[collage.lat, collage.long]}
            icon={MarkerIcon}
            key={id}>
            <Popup>
              <p>{collage.name} , </p>
            </Popup>
          </Marker>
        ))} */}


        <LocationMarker />
      </MapContainer>
    </div>


  )
}

