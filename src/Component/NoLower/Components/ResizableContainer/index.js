import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components";
import { Resizable } from "react-resizable";

const Root = styled.div`
  .react-resizable {
    position: relative;
    background-clip: padding-box;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  .react-resizable-handle {
    position: absolute;
    background-color: #bfbfbf;
    background-image: none;
    padding: 0;
    width: 8px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    right: -9px;
    cursor: w-resize;
    z-index: 1;
    border-radius: 4px;
    background-color: #ffb041;
  }
`

export default function ResizableContainer ({width = 200, onChange, widthConstraints, children}) {
  const rootRef = useRef()
  const [size, setSize] = useState(width)

  useEffect(()=> {
    setSize(width)
  }, [width])

  const handleResize = (e, {size})=> {
    const [min, max] = widthConstraints
    if(size.width >= min && size.width <=max) {
      setSize(size.width)
      onChange && onChange(size.width)
    }
  }

  return (
    <Root ref={rootRef}>
      <Resizable
        width={size}
        height={0}
        axis="x"
        onResize={handleResize}
        draggableOpts={{ enableUserSelectHack: false }}
      >
        <div style={{width: size + 'px'}}>
          {
            React.Children.map(children, 
              child=> React.isValidElement(child)?React.cloneElement(child):child
            )
          }
        </div>
      </Resizable>
    </Root>
  )
}
