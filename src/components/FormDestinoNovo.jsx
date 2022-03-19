import React, { useState, useEffect } from "react";
import Api from '../Api';
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoService from "../controllers/DestinoService";
import axios from "axios";

export default function FormDestinoNovo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("")
  const [imgURL, setImgURL] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [diarias, setDiarias] = useState("")
  const [valor, setValor] = useState("")

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
  
  
  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    if (id) {
      axios.put("http://localhost:8080/api/destino/"+id + destino)
        .then((response) => {
          setDestino(response.data)
            navigate("/destinos")
        })
    } else { 
      DestinoService.createDestino(destino)
        .then((response) => {
          
             navigate("/destinos" + destino)
        })
    }
  }

  
  

  return (
    <section className="w3l-contact container" id="contact">
      <br />
      <br />
      <h2 className="">{id ? `Editar Destinodddaa ID:${id}` : "Criar novo Destino"}</h2>
      <br />
      {
        //Destino
      }
      <div className="contact-infubd py-5">
        <div className="container py-lg-3">
          <div className="contact-grids row">
           
            <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
              <form  className="signin-form fields">
                <div className="input-grids">
                
                  <div className="form-group">
                    <label htmlFor="nome"></label>
                    <input type="text" name="nome" id="nome"placeholder="Nome do Destino*"
                      className="contact-input fields" required="Informe o nome do Destino"
                      value={destino.nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="localidade"></label>
                    <input type="text" name="localidade" id="localidade" placeholder="Cidade-Estado de Destino*"
                      className="contact-input fields" required="Informe a Cidade e o Estado"
                      value={destino.localidade}
                      onChange={(e) => setLocalidade(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imgURL"></label>
                    <input type="text" name="imgURL" id="imgURL" placeholder="URL da imagem*"
                      className="contact-input fields" required="Adicione o endereço de uma imagem"
                      value={destino.imgURL}
                      onChange={(e) => setImgURL(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="diarias"></label>
                    <input type="number" name="diarias" id="diarias" placeholder="Informe o número de diarias*"
                      className="contact-input fields" required="Informe o número de dias"
                      value={destino.diarias}
                      onChange={(e) => setDiarias(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="valor"></label>
                    <input type="number" name="valor" id="valor" placeholder="Valor do Pacote*"
                      className="contact-input fields" required="Informe o valor total do Pacote"
                      value={destino.valor}
                      onChange={(e) => setValor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="text-right">
                <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarDestino(e)}>
                {id ? "Salvar" : "Enviar"}
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

