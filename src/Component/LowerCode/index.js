import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'

const Main = styled.div`
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
`

const LowerCode = () => {

  return (
    <Main>
      <DndProvider backend={HTML5Backend}>
        <Left />
        <Right />
      </DndProvider>
    </Main>
  )
}
export default (LowerCode)