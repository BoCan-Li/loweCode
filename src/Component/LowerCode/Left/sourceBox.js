import { DragSource, DragPreviewImage } from 'react-dnd'
import ContainerPic from './container.png'

const source = {
  beginDrag (props, monitor, components) {
    return {
      type: props.name
    }
  },
  endDrag (props, monitor) {
    const item = monitor.getItem()
    const result = monitor.getDropResult()
    if (monitor.didDrop() && result) {
      console.log(result, 'sourceBox-result')
      props.onEndDrag({targetId: result.id, targetParentId: result.parentId, overType: result.overType, type: item.type})
    }
  }
}

const collect = (connect, monitor)=> {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const SourceBox = (props) => {
  const {connectDragSource, connectDragPreview, isDragging, name, children} = props
  // const Img = <img src="./container.png" alt="gen" />
  // useEffect(()=> {
  //   connectDragPreview(Img)
  // }, []) // eslint-disable-line

  // return connectDragSource(
  //   <div name={name} style={{opacity: isDragging ? '0.4' : '1'}}>
  //     {children}
  //   </div>
  // , { dropEffect: 'copy' })
  return (
    <>
      <DragPreviewImage src={ContainerPic} connect={connectDragPreview} />
      <div name={name} ref={connectDragSource} style={{opacity: isDragging ? '0.4' : '1'}}>{children}</div>
    </>
  )
}

export default DragSource('ITEM', source, collect)(SourceBox)