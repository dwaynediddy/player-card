import './App.css'
import Card  from './components/index'
import styled from 'styled-components'

function App() {
  
  return (
    <AppContainer>
      <Card />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;
