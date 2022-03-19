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
            Api.get("/destino/" + id)
            .then((response) => {
              setDestino (response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
  }, []);

  function deleteDestino(id){
    Api.delete(`/destino/${id}`)
    navigate("/destinos")
  }

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
                <div className="">
                  <Link className="btn btn-info " to={`/destinos/novo/${id}`} >Editar</Link>
                  |
                  <button className="btn btn-danger ml-3" onClick={() => deleteDestino(destino.id)} >Excluir</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

