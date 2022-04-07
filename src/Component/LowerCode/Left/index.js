import {connect} from 'react-redux'
import { handleAddCard } from 'reducer/lowerCode'
import { Menu } from 'antd'
import SourceBox from './sourceBox'
import styled from 'styled-components'

const MenuBox = styled(Menu)`
  width: 180px;
`

const types = ['Box', 'Text', 'Button', 'Icon']
const Left = ({handleAddCard}) => {
  return (
    <MenuBox>
      {
        types.map((type, index)=> {
          return (
            <SourceBox name={type} key={index} onEndDrag={handleAddCard}>
              <Menu.Item>{type}</Menu.Item>
            </SourceBox>
          )
        })
      }
    </MenuBox>
  )
}

const mapStateToProps = (state)=> ({
  data: state.lowerCode.data
})
const mapDispatchToProps = {
  handleAddCard
}


export default connect(mapStateToProps, mapDispatchToProps)(Left)