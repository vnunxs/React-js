
/*SEM JSX
const App = () =>{
  return React.createElement('a',{
    href:'https://google.com.br'
  }, 'Clique em mim')
}

export default App
*/

/*COM JSX
const App = () =>{
  return(
    <a href='https://google.com.br'>Clique em mim! 2.0</a>
  )
}
export default App
*/
import {Header} from './componentes/Header'
import {Footer} from './componentes/Footer'
import {Section} from './componentes/Section'
const App = () =>{
  const handleButtonClick = () =>{
  alert("Fui Clicado")
  }
  return(
    <button onClick = {handleButtonClick}>Clique aqui!!!</button>
   /* <div>
      <Header title="Shadow" subtitle="figth"/>
      Ola Word!!!
      <Footer/>
      <Section/>
    </div>*/
  )
}
export default App