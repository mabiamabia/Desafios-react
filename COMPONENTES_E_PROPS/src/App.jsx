import HelloWorld from './components/HelloWorld'
import HelloName from './components/Name'
import Date from './components/Date'
import './App.css'

function App() {
  return (
      <> 
      <h2>1 - Criando um componente simples</h2>
      <HelloWorld/>

      <h2>2 - Criando um componente com props</h2>
      <HelloName name={"Mabiá"}/>

      <h2>3 - Criando um componente com três props</h2>
      <Date day={"3"} month={"12"} year={"1992"}/>
      </>
  )
  
}

export default App
