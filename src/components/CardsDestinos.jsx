import { Component, useState } from 'react' 
import Api from '../Api';
//import NovoDestino from '../Pages/NovoDestino'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


class CardsDestinos extends Component {

  state = {destinos : [],}
  async componentDidMount(){
    const response = await Api.get('destino');
    //console.log(response.data)
    this.setState({destinos : response.data})
  }
  


  render(){

    const {destinos} = this.state;
    //console.log(destinos)

    return (

      
      <section className="grids-1 py-5">
        <div className="grids py-lg-5 py-md-4">
          <div className="container">
            <div className="d-flex justify-content-between">
              <h3 className="hny-title mb-5 d-inline ">Destinos</h3>
              <Link className="btn btn-info " to={"/destinos/novo"}>Novo Destino</Link>

            </div>
            <h4>Conheca os Melhores Destino do Brasil e do Mundo!</h4>          
            <hr />
            <br />
            
            <div className="row">
            {destinos.map(destino => (
              <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0"  key={destino.id}>
                <div className="column cards-destino">
                  <Link to={`/destino/${destino.id}`}>
                    <img src={destino.imgURL} alt={"Imagem de "+ destino.nome +" "+ destino.localidade}
                      className="img-fluid" />
                  </Link>
                  <div className="info">
                    <h4>
                      {destino.nome}
                    </h4>
                    <p>{destino.localidade}</p>
                    <p>{destino.diarias} Dias, {destino.diarias+1} Noites </p>
                    <div className="dst-btm">
                      <h6 className="">A partir de:</h6>
                      <h5 className="text-danger d-inline">
                        R$<span>{destino.valor}.00</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              ))}

            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
export default CardsDestinos;
