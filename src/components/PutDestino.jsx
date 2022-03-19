import React, { useState, useEffect } from "react";
import Api from '../Api';
import { useNavigate, useParams} from "react-router-dom";
import { useForm } from 'react-hook-form';


export default function PutDestino() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ destino =
    {
      id: id,
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
      }}, 
    []);
    
    let onChange = (e) => {
      let dest = destino
      dest[e.target.name] = e.target.value
      setDestino({destino: dest})
    }

  const {register, handleSubmit, formState: { errors } } = useForm()

    const upDestino = data => 
        Api.put(`/destino/${id, data}`)
        //console.log(data)
        .then((response) => {
          navigate("/destinos")
            console.log("Deu certo!!!")
        })
        .catch(() => {
            console.log("DEU ERRADOOOOOOO")
            let {s} = id + data
            console.log(id, data, s)
        })


      //onChange={onChance}
  return (
    <section className="w3l-contact container" id="contact">
      <br />
      <br />
      <h2 className="">EDITANDO ESTA MERDA</h2>
      <br />
      {
        //Destino onChange={onChange}
      }
      <div className="contact-infubd py-5">
        <div className="container py-lg-3">
          <div className="contact-grids row">
           
            <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
              <form  onSubmit={handleSubmit(upDestino)}  className="signin-form fields">
                <div className="input-grids">
                <div className="form-group">
                    <label htmlFor="nome"></label>
                    <input type="text" id="id"placeholder="Nome do Destino*"
                      className="contact-input fields" required="Informe o nome do Destino"
                      name="id" {...register("id")}
                      value={destino.id}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nome"></label>
                    <input type="text" id="nome"placeholder="Nome do Destino*"
                      className="contact-input fields" required="Informe o nome do Destino"
                      name="nome" {...register("nome")}
                      onChange={onChange} value={destino.nome}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="localidade"></label>
                    <input type="text" id="localidade" placeholder="Cidade-Estado de Destino*"
                      className="contact-input fields" required="Informe a Cidade e o Estado"
                      name="localidade" {...register("localidade")}
                      onChange={onChange} value={destino.localidade}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imgURL"></label>
                    <input type="text" id="imgURL" placeholder="URL da imagem*"
                      className="contact-input fields" required="Adicione o endereço de uma imagem"
                      name="imgURL" {...register("imgURL")}
                      onChange={onChange} value={destino.imgURL}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="diarias"></label>
                    <input type="number" id="diarias" placeholder="Informe o número de diarias*"
                      className="contact-input fields" required="Informe o número de dias"
                      name="diarias" {...register("diarias")}
                      onChange={onChange} value={destino.diarias}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="valor"></label>
                    <input type="number" id="valor" placeholder="Valor do Pacote*"
                      className="contact-input fields" required="Informe o valor total do Pacote"
                      name="valor" {...register("valor")}
                      onChange={onChange} value={destino.valor}
                    />
                  </div>
                </div>
                <div className="text-right">
                <button type="submit" className="btn btn-primary" >
                  "Salvar"
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

