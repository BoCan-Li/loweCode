import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px dashed gray;
  margin-bottom: 8px;
  background-color: white;
  cursor: move;
  opacity: ${props=> props.isDragging ? '0.5' : '1'}
`

const DragElement = ({id, index, moveCard, element}) => {
  const containerRef = useRef(null)
  const [{handlerId}, drop] = useDrop({
    accept: ['sort'],
    collect: (monitor)=> {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover (item, monitor) {
      if (!containerRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = containerRef.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })

  const [{isDragging}, drag] = useDrag({
    type: 'sort',
    item: ()=> ({id, index}),
    collect: (monitor)=> ({isDragging: !!monitor.isDragging()})
  })
  drag(drop(containerRef))
  return (
    <Container ref={containerRef} isDragging={isDragging} data-handler-id={handlerId}>
      {React.Children.map(element, (child)=> React.isValidElement(child) ? React.cloneElement(child) : '')}
    </Container>
  )
}

export default DragElement