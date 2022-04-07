import React from 'react'
import ResizableContainer from '../Components/ResizableContainer'
import DragContainer from './Components/DragContainer'

const Modules = ({totalWidth, ...other}) => {
  const defaultWidth = totalWidth * 0.25

  return (
    <ResizableContainer
      width={defaultWidth}
      widthConstraints={[300, defaultWidth]}
      {...other}
    >
      <div>Modules</div>
      <div>
        <DragContainer />
      </div>
    </ResizableContainer>
  )
}

export default Modules