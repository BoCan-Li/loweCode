import { connect } from "react-redux"
import styled from "styled-components"
import { handleMoveCard } from 'reducer/lowerCode'
import List from "./List"

const Div = styled.div`
  flex: 1;
`

const Right = ({data, handleMoveCard}) => {
  return (
    <Div>
      <List data={data} parentId={null} move={handleMoveCard}/>
    </Div>
  )
}

const mapStateToProps = (state)=> ({
  data: state.lowerCode.data
})
const mapDispatchToProps = {
  handleMoveCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Right)