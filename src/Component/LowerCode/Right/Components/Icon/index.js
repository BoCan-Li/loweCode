import React, {forwardRef} from 'react'
import { CalendarOutlined } from '@ant-design/icons'

const NewIcon = forwardRef((props, ref) => {
  return (
    <CalendarOutlined ref={ref} className={props.className} style={{ fontSize: '16px', color: '#09a8e6' }}  />
  )
})

export default NewIcon