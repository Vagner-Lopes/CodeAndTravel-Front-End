import React, { useState, useEffect } from "react";
import Api from '../Api';
import { Link, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';

export default function FormDestinoNovoddd() {
  const navigate = useNavigate();

  const {register, handleSubmit, formState: { errors } } = useForm()

      const addDestino = data =>
      Api.post("/destino",data)
      .then((response) => {
        navigate("/destinos")
        console.log("Deu certo!!!")
        })
        .catch(() => {
            console.log("DEU ERRADOOOOOOO")
        })
        
    
      //onChange={onChance}
  return (
    <section className="w3l-contact container" id="contact">
      <br />
      <br />
      <h2 className="">"Criar novo Destino"</h2>
      <br />
      {
        //Destino onChange={onChange} navigate("/destinos")
      }
      <div className="contact-infubd py-5">
        <div className="container py-lg-3">
          <div className="contact-grids row">
           
            <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
              <form  onSubmit={handleSubmit(addDestino)}  className="signin-form fields">
                <div className="input-grids">
                  <div className="form-group">
                    <label htmlFor="nome"></label>
                    <input type="text" id="nome"placeholder="Nome do Destino*"
                      className="contact-input fields" required="Informe o nome do Destino"
                      name="nome" {...register("nome")}
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="localidade"></label>
                    <input type="text" id="localidade" placeholder="Cidade-Estado de Destino*"
                      className="contact-input fields" required="Informe a Cidade e o Estado"
                      name="localidade" {...register("localidade")}
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imgURL"></label>
                    <input type="text" id="imgURL" placeholder="URL da imagem*"
                      className="contact-input fields" required="Adicione o endereço de uma imagem"
                      name="imgURL" {...register("imgURL")}
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="diarias"></label>
                    <input type="number" id="diarias" placeholder="Informe o número de diarias*"
                      className="contact-input fields" required="Informe o número de dias"
                      name="diarias" {...register("diarias")}
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="valor"></label>
                    <input type="number" id="valor" placeholder="Valor do Pacote*"
                      className="contact-input fields" required="Informe o valor total do Pacote"
                      name="valor" {...register("valor")}
                      
                    />
                  </div>
                </div>
                <div className="text-right">
                <button type="submit" className="btn btn-primary" >
                    "Enviar"
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

