import React, {useState} from 'react'
import styled from 'styled-components'
import BorderSquare from './BorderSquare'
import Knight from './Knight'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const FlexWarp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid rgba(0, 0, 0, 0.4);
`

const SquaresItem = styled.div`
  width: 12.5%;
  height: 60px;
  line-height: 60px;
`

const RenderSquares = ({index, position, onChange}) => {
  const x = index % 8;
  const y = Math.floor(index / 8)

  const renderPiece = (x, y, [knightX, knightY]) => {
    if(x === knightX && y === knightY){
      return <Knight />
    }
  }

  return (
    <SquaresItem>
      <BorderSquare x={x} y={y} position={position} onChange={onChange}>
        {renderPiece(x, y, position)}
      </BorderSquare>
    </SquaresItem>
  )
}

export default function Drag ({ knightPosition = [1, 1]  }) {

  const [position, setPosition] = useState(knightPosition)

  const squares = new Array(64).fill('')

  const onChange = (arr) => {
    setPosition(arr)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <FlexWarp>
        {squares.map((item, index)=> <RenderSquares key={index} index={index} position={position} onChange={onChange} />)}
      </FlexWarp>
    </DndProvider>
  )
}