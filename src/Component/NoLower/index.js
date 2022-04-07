import React, {useState, useRef, useEffect}from 'react'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Views from './Views'
import Modules from './Modules'
import Features from './Features'

const FlexWarp = styled.div`
  width: 100%;
  display: flex;
  align-item: stretch;
  gap: 8px;
`

const NoLower = ()=> {
  const wRef = useRef()
  const [totalWidth, setTotalWidth] = useState(0)
  useEffect(()=> {
    if (wRef?.current) {
      let offsetWidth = wRef.current.offsetWidth - 16
      setTotalWidth(offsetWidth)
    }
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <FlexWarp ref={wRef}>
        <Modules totalWidth={totalWidth} />
        <Views />
        <Features />
      </FlexWarp>
    </DndProvider>
  )
}

export default NoLower
