import HelloWorld from './components/HelloWorld'
import HelloName from './components/Name'
import './App.css'

function App() {

    
  return (
      <> 
      <h2>1 - Criando um componente simples</h2>
      <HelloWorld/>

      <h2>2 - Criando um componente com props</h2>
      <HelloName name={"Mabiá"}/>
      </>
  )
  
}

export default App
