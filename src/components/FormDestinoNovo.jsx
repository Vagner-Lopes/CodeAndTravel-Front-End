import React, { useState, useEffect } from "react";
import Api from '../Api';
import { Link, useNavigate, useParams } from "react-router-dom";


export default function FormDestinoNovo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ destino =
    {
      nome: "",
      imgURL: "",
      localidade: "",
      diarias: 0,
      valor: 0
    },
    setDestino] = useState({});

    useEffect(() => {  
        if (id) {
            Api.get(`/${id}`)
            .then((response) => {
              setDestino (response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
  }, []);
  
  
  function onChange(ev) {
    const {name, value} = ev.target;      
    setDestino({ ...destino, [name]: value })
  }

  function onSubmit(ev) {
    ev.preventDefault();
    const metodo = id? 'put' : 'post';
    Api[metodo]("/" , destino)
    .then((response) => {
        navigate("/destinos");
    })
    .catch((error) => {
        console.log(error);
    });
  }

  function deleteDestino(id){
    Api.delete(`/${id}`)
    navigate("/destinos")
  }
  

  return (
    <section className="w3l-contact container" id="contact">
      <br />
      <br />
      <h2 className="">{id ? `Editar Destino ID:${id}` : "Criar novo Destino"}</h2>
      <br />
      {
        //Destino
      }
      <div className="contact-infubd py-5">
        <div className="container py-lg-3">
          <div className="contact-grids row">
           
            <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
              <form onSubmit={onSubmit} className="signin-form fields">
                <div className="input-grids">              
                  <div className=" column cards-destino">
                        <img src={destino.imgURL? destino.imgURL: "https://chinagate.com.br/wp-content/webp-express/webp-images/uploads/2015/06/tecla-viagem.jpg.webp"} alt={"Imagem de "+ destino.nome +" "+ destino.localidade}
                      className="img-fluid" />
                  </div>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="nome"></label>
                    <input type="text" name="nome" id="nome"placeholder="Nome do Destino*"
                      className="contact-input fields" required="Informe o nome do Destino"
                      value={destino.nome || ""}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="localidade"></label>
                    <input type="text" name="localidade" id="localidade" placeholder="Cidade-Estado de Destino*"
                      className="contact-input fields" required="Informe a Cidade e o Estado"
                      value={destino.localidade || ""}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imgURL"></label>
                    <input type="text" name="imgURL" id="imgURL" placeholder="URL da imagem*"
                      className="contact-input fields" required="Adicione o endereço de uma imagem"
                      value={destino.imgURL || ""}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="diarias"></label>
                    <input type="number" name="diarias" id="diarias" placeholder="Informe o número de diarias*"
                      className="contact-input fields" required="Informe o número de dias"
                      value={destino.diarias || ""}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="valor"></label>
                    <input type="number" name="valor" id="valor" placeholder="Valor do Pacote*"
                      className="contact-input fields" required="Informe o valor total do Pacote"
                      value={destino.valor || ""}
                      onChange={onChange}
                    />
                  </div>
                  <div className="text-right row">
                  
                    <button type="submit" className="btn btn-style2 btn-primary ml-2 mr-3 col-4">
                    {id ? "Salvar" : "Enviar"}
                    </button> 

                    {id && <button className="btn btn-style btn-secondary ml-5 col-4" onClick={() => deleteDestino(id)} >Excluir</button>}
                  
                  </div>
                  <hr />
                    <Link className="btn btn-style2 btn-info col-4" to={id? `/destino/${id}` : "/destinos"} >Voltar</Link>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

