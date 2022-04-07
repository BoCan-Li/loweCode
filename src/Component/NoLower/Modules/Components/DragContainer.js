import React from 'react'
import {useDrag, DragPreviewImage} from 'react-dnd'
import styled from 'styled-components'
import {getGuid} from '../../../../utils/common'
import Container from '../../Components/Container'
import ContainerPic from '../../assets/img/container.png'

const Drag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  opacity: ${props=> props.dragging ? '0.5' : '1'};
  font-weight: bold;
  cursor: move;
  img {
    width: 64px;
    height: 64px;
  }
`

export default function DragContainer () {
  const [{isDragging}, drag, preview] = useDrag({
    type: Container.type,
    item: {
      element: Container.element,
      id: getGuid(),
      type: Container.name
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })
  return (
    <>
      <DragPreviewImage connect={preview} src={ContainerPic}/>
      <Drag ref={drag} dragging={isDragging}>
        <img src={ContainerPic} alt="container" />
        <span>container</span>
      </Drag>
    </>
  )
}

