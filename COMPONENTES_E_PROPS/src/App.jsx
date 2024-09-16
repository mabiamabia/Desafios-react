import HelloWorld from './components/HelloWorld'
import HelloName from './components/Name'
import Profile from './components/Profile'
import './App.css'

function App() {
  return (
      <> 
      <h2>1 - Criando um componente simples</h2>
      <HelloWorld/>

      <h2>2 - Criando um componente com props</h2>
      <HelloName name={"Mabiá"}/>

      <h2>3 - Criando um componente com três props</h2>
     <Profile name="João" age="30" job="dev" />
      </>
  )
  
}

export default App
