import React, {useState} from 'react'
import Map, {MapApiLoaderHOC} from 'react-bmapgl/Map'
import MapTypeControl from 'react-bmapgl/Control/MapTypeControl'
import NavigationControl from 'react-bmapgl/Control/NavigationControl'
import ScaleControl from 'react-bmapgl/Control/ScaleControl'
import ZoomControl from 'react-bmapgl/Control/ZoomControl'
import AutoComplete from 'react-bmapgl/Services/AutoComplete'

function BMap ({point={lng: '116.403981', lat: '39.927773'}}) {
  const [pointValue, setPointValue] = useState(point)
  return (
    <>
      <AutoComplete />
      <Map
        style={{ height: 450 }}
        center={pointValue} 
        zoom={12}
        heading={0}
        tilt={40}
        onClick={e => {
          console.log(e)
          setPointValue(e.point)
        }}
        enableScrollWheelZoom
      >
        <MapTypeControl />
        <NavigationControl />
        <ScaleControl />
        <ZoomControl />
      </Map>
    </>
  )
}

export default MapApiLoaderHOC({ak: 'pGm3bfDACHy97dR4G45Q49XEOYuyTGOM'})(BMap)