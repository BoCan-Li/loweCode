import React, {forwardRef} from 'react'
const divStyle = {
	border: '1px solid red',
	width: '100%',
	minHeight: '300px',
	padding: '10px',
	color: '#666',
	height: 'auto'
};
const Box = forwardRef((props, ref) => {
  return (
    <div className={props.className} style={divStyle} ref={ref}>
      这是一个div，你可以拖入其他元素
      {props.children}
    </div>
  )
})

export default Box