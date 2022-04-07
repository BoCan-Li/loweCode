import React, {forwardRef} from 'react'
import { Button } from 'antd'

const NewButton = forwardRef((props, ref) => {
  return (
    <Button type="primary" className={props.className} ref={ref}>OK</Button>
  )
})

export default NewButton