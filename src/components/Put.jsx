import { Link, useNavigate, useParams } from "react-router-dom";
import Api from '../Api';
import React, {Component, useState, useEffect } from "react";

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

    const setDados = e => {
        setDestino({ [ e.target.name ]: e.target.value })

        postPut = (e) => {
            e.preventDefault();
            if (id) {
                Api.put("/destino/" + id, destino)
                .then((response) => {
                    navigate("/destinos")
                })
        
            } else { 
                Api.post("/destino/" + destino)
                .then((response) => {
                    navigate("/destinos")
                })
            }
        }
    }
    return(
        <section className="w3l-contact container" id="contact">
            <br />
            <br />
            <h2 className="">{id ? "Editar Destino" : "Criar novo Destino"}</h2>
            <br />
            {
                //Destino
            }
            <div className="contact-infubd py-5">
                <div className="container py-lg-3">
                    <div className="contact-grids row">
                        <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
                            <form className="signin-form fields">
                                <div className="input-grids">                           
                                    <div className="form-group">
                                        <label htmlFor="nome"></label>
                                        <input type="text" name="nome" id="nome"placeholder="Nome do Destino*"
                                        className="contact-input fields" required="Informe o nome do Destino"
                                        value={destino.nome}
                                        onChange={setDados} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="localidade"></label>
                                        <input type="text" name="localidade" id="localidade" placeholder="Cidade-Estado de Destino*"
                                        className="contact-input fields" required="Informe a Cidade e o Estado"
                                        value={destino.localidade}
                                        onChange={setDados} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="imgURL"></label>
                                        <input type="text" name="imgURL" id="imgURL" placeholder="URL da imagem*"
                                        className="contact-input fields" required="Adicione o endereço de uma imagem"
                                        value={destino.imgURL}
                                        onChange={setDados} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="diarias"></label>
                                        <input type="number" name="diarias" id="diarias" placeholder="Informe o número de diarias*"
                                        className="contact-input fields" required=""
                                        value={destino.diarias}
                                        onChange={setDados} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="valor"></label>
                                        <input type="number" name="valor" id="valor" placeholder="Valor do Pacote*"
                                        className="contact-input fields" required="Informe o valor total do Pacote"
                                        value={destino.valor}
                                        onChange={setDados} />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-primary" onClick={(e) => postPut(e)}>
                                        {id ? "Salvar" : "Enviar" }
                                    </button>
                                    <Link to="/destinos" className="btn btn-danger"
                                        style={{ marginLeft: "10px" }}>
                                        Voltar
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
