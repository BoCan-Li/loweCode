import React, {forwardRef} from 'react'

const Text = forwardRef((props, ref) => {
  return (
    <div className={props.className} ref={ref}>一段纯文本，不可以拖入其他元素</div>
  )
})

export default Text