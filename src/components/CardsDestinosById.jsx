import { Link, useNavigate, useParams } from "react-router-dom";
import Api from '../Api';
import React, {useState, useEffect } from "react";


export default function CardsDestinosById() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ destino =
    {
      id: 0,
      nome: "",
      imgURL: "",
      localidade: "",
      diarias: 0,
      valor: 0
    },
    setDestino] = useState();

    useEffect(() => {  
        if (id) {
            Api.get(`/${id}`)
            .then((response) => {
              setDestino(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
  }, []);



  console.log(destino)
  return (   
    
    <section className="grids-1 py-5">
      <div className="grids py-lg-5 py-md-4">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="hny-title mb-5 d-inline ">{destino.nome}</h3>
          </div>
          <h4>Conheca os Melhores Destino do Brasil e do Mundo!</h4>         
          <hr />
          <br />          
          <div className="row">
            <div className="col-lg-8 mt-md-0"  key={destino.id}>
              <div className="column cards-destino">
                <Link to={`/destino/${destino.id}`}>
                    <img src={destino.imgURL} alt={"Imagem de "+ destino.nome +" "+ destino.localidade}
                      className="img-fluid" />
                  </Link>
                <div className="info mt-3">
                  <h2>
                      {destino.nome}
                  </h2>
                  <p>{destino.localidade}</p>
                  <p>{destino.diarias} Dias, {destino.diarias+1} Noites </p>
                  <div className="dst-btm">
                    <h6 className="">A partir de:</h6>
                    <h4 className="text-danger d-inline">
                        R$<span>{destino.valor}.00</span>
                    </h4>
                  </div>
                </div>
                <div className="mt-3">
                  <Link className="btn btn-style2 btn-info ml-2 mr-2" to={`/destinos`} >Voltar</Link>
                  |
                  <Link className="btn btn-style2 btn-primary ml-2 mr-2" to={`/destinos/novo/${id}`} >Editar</Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

