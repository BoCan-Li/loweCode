import React from 'react'
import ReactPlayer from 'react-player'

const ReactVideo = ({width = 600, playing, url, ...others}) => {
  return (
    <ReactPlayer 
      url={url}
      playing={playing}
      controls
      height={'auto'}
      width={width}
      {...others}
    />
  )
}

export default ReactVideo
