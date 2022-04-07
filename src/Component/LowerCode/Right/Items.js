import React from 'react'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import List from './List'
import * as Components from './Components'

const source = {
  beginDrag (props) {
    const {parentId, item} = props
    const { id, type, children } = item
    return {
      id,
      parentId,
      type,
      children
    }
  },
  canDrag (props) {
    return props.item.id !== 1
  },
  isDragging (props, monitor) {
    return props.item.id === monitor.getItem().id
  },
  endDrag (props, monitor) {
    const result = monitor.getDropResult()
    if (result && result.dragItem) {
      props.move({...result})
    }
  }
}

const sourceCollect = (connect, monitor)=> {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const target = {
  canDrop (props, monitor) {
    return true
  },
  drop (props, monitor) {
    const didDrop = monitor.didDrop();
    if (didDrop) return undefined
    const {id: draggedId, parentId: dragParentId} = monitor.getItem()
    const {parentId: overParentId} = props
    const {id: overId, type: overType} = props.item
    if (draggedId) {
      console.log(draggedId, overId, overParentId)
      if (draggedId === overId) return undefined
      return {
        dragItem: {draggedId, dragParentId},
        overItem: {overId, overParentId},
        overType
      }
    }
    return {id: overId, parentId: overParentId, overType}
  }
}

const targetCollect = (connect, monitor)=> {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop()
  }
}

const Items = ({connectDropTarget, connectDragSource, item, move, canDrop, isOver}) => {
  const {id, type, children} = item
  const CurrentComponent = Components[type]
  const classes = (canDrop && isOver) ?  'activeHover' : '';
  return (
    <CurrentComponent
      id={id}
      type={type}
      className={classes}
      ref={instance=> {
        const node = findDOMNode(instance)
        connectDragSource(node)
        connectDropTarget(node)
      }}
    >
      <List data={children} parentId={id} move={move} />
    </CurrentComponent>
  )
}

export default DropTarget('ITEM', target, targetCollect)(DragSource('ITEM', source, sourceCollect)(Items))