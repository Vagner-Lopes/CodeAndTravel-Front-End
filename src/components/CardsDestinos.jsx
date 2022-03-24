import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../Api';


const CardsDestinos  = () => {

  const navigate = useNavigate();
  const [ destinos, setDestinos] = useState([]);

    useEffect(() => {  
          Api.get(``)
          .then((response) => {
            setDestinos (response.data);
          })
          .catch((error) => {
              console.log(error);
          })
    }, []);

  return (

    <section className="grids-1 py-5">
      <div className="grids py-lg-5 py-md-4">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="hny-title mb-5 d-inline ">Destinos</h3>
            <Link className="btn btn-style btn-info " to={"/destinos/novo"}>Novo Destino</Link>
          </div>
          <h4>Conheca os Melhores Destino do Brasil e do Mundo!</h4>          
          <hr />
          <br />  
          <div className="row">
          {destinos.map(destino => (
            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-3 "  key={destino.id}>
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
                  <p>{destino.diarias} {destino.diarias > 1? "Dias" : "Dia"}</p>
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
export default CardsDestinos;
