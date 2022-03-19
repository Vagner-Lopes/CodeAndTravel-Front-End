import { Component, useState } from 'react'
import Api from './Api';


class App extends Component {
state = {destinos : [],}
async componentDidMount(){
  const response = await Api.get('destino');
  //console.log(response.data)
  this.setState({destinos : response.data})
}

render(){

  const {destinos} = this.state;
  console.log(destinos)
  return (
    <div>
          <h1>Home da Bagaça Memo</h1>
          <ul style={{listStyle:"none", margin: 2, padding: 1}}>
            {destinos.map(destino => (
              <li key={destino.id}>
                <h3>{destino.nome}</h3>
                <p>{destino.dias} Dias - R${destino.valor},00</p>
              </li>
            ))}
          </ul>
    </div>
  )
}

}
  
export default App
