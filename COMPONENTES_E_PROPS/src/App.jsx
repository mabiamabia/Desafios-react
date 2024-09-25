import HelloWorld from './components/HelloWorld'
import HelloName from './components/Name'
import Profile from './components/Profile'
import './App.css'
import Family from './components/Family'
import ProfileClass from './components/ProfileClass'
import Counter from './components/Counter'

function App() {

  const members = [
    { name: 'Maria', age: '23', job: 'Estagiaria' },
    { name: 'Lúcio', age: '81', job: 'Junior' },
    { name: 'Nadir', age: '19', job: 'Especialista' },
  ]


  return (
    <>
      <h2>1 - Criando um componente simples</h2>
      <HelloWorld />

      <h2>2 - Criando um componente com props</h2>
      <HelloName name={"Mabiá"} />

      <h2>3 - Criando um componente com três props</h2>
      <Profile name="João" age="30" job="dev" />

      <h2>4 - Composição de componentes</h2>
      <Family members={members} />

      <h2>5 - Componentes de Classe</h2>
      <ProfileClass name="Rodrigo" age={36} job="Monitor" />

      <h2>6 - Componente com estado</h2>
      <Counter />

    </>
  )

}

export default App
