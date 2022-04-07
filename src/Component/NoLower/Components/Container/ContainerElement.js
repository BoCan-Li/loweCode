import React, {useState, useCallback} from 'react'
import { useDrop } from "react-dnd";
import DragElement from '../DragElement';
import update from 'immutability-helper'
import styled from 'styled-components'

const View = styled.div`
  min-height: 400px;
  padding: ${props=> props.isOver ? '8px 16px' : '0'};
  border: ${props=> props.isOver ? '2px dotted #bfbfbf' : '1px solid rgba(0, 0, 0, 0.4)'};
`

export default function ContainerElement() {
  const [queue, setQueue] = useState([])

  const handleDrop = (item)=> {
    setQueue(prevQueue=> 
      update(prevQueue, {
        $push: [item],
      })
    )
  }
  const [{isOver}, drop] = useDrop({
    accept: ['block'],
    drop: (item)=> handleDrop(item),
    collect: (monitor)=> ({isOver: !!monitor.isOver()})
  })
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setQueue((prevQueue) => 
      update(prevQueue, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevQueue[dragIndex]],
        ],
      })
    )
  }, [])

  const renderCard = useCallback((q, index) => {
    return (
      <DragElement key={q.id} {...q} index={index} moveCard={moveCard} />
    )
  }, [moveCard])

  return (
    <View ref={drop} isOver={isOver}>
      {
        queue.map((q, index)=> renderCard(q, index))
      }
    </View>
  )
}
