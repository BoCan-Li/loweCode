import Square from "./Square";
import { useDrop } from "react-dnd";
import { ItemTypes } from '../../constants'

export default function BorderSquare ({x, y, position, onChange, children}) {
  const black = (x + y) % 2 === 1

  const canMoveSquare = (topX, topY) => {
    const [knightX, knightY] = position
    return (
      (Math.abs(topX - knightX) === 1 && Math.abs(topY - knightY) === 2) || 
      (Math.abs(topX - knightX) === 2 && Math.abs(topY - knightY) === 1))
  }

  const moveSquare = (topX, topY) => {
    if(canMoveSquare(topX, topY)){
      onChange([topX, topY])
    }
  }

  const [{isOver, canDrop}, drop] = useDrop(()=>({
    accept: ItemTypes.KNIGHT,
    drop: (item) => {console.log(item);moveSquare(x, y)},
    canDrop: () => canMoveSquare(x, y),
    collect: (monitor)=>({ isOver: !!monitor.isOver(), canDrop: !!monitor.canDrop() })
  }), [x, y, position])

  const Overlay = ({color}) => (<div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 1,
      opacity: 0.5,
      backgroundColor: color
    }}
  />)
  return (
    <div 
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  )
}