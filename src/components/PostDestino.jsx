import { Link, useNavigate, useParams } from "react-router-dom";
import Api from '../Api';
import React, {Component, useState, useEffect } from "react";

class PostDestino extends Component {


    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            nome: "",
            imgURL: "",
            localidade: "",
            diarias: 0,
            valor: 0
        }
    }
    

    changeHandler = e => {
        this.setState({ [ e.target.name ]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        Api
        .post("/destino", this.state)
        .then(response => {
        this.props.history.push("/destinos")    
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {nome, imgURL, localidade, diarias, valor,} = this.state

        return(
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
                    <form onSubmit={this.submitHandler} className="signin-form fields">
                        <div className="input-grids">                           
                            <div className="form-group">
                                <label htmlFor="nome"></label>
                                <input type="text" name="nome" id="nome"placeholder="Nome do Destino*"
                                className="contact-input fields" required="Informe o nome do Destino"
                                value={nome}
                                onChange={this.changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="localidade"></label>
                                <input type="text" name="localidade" id="localidade" placeholder="Cidade-Estado de Destino*"
                                className="contact-input fields" required="Informe a Cidade e o Estado"
                                value={localidade}
                                onChange={this.changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imgURL"></label>
                                <input type="text" name="imgURL" id="imgURL" placeholder="URL da imagem*"
                                className="contact-input fields" required="Adicione o endereço de uma imagem"
                                value={imgURL}
                                onChange={this.changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="diarias"></label>
                                <input type="number" name="diarias" id="diarias" placeholder="Informe o número de diarias*"
                                className="contact-input fields" required="Informe o número de dias"
                                value={diarias}
                                onChange={this.changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="valor"></label>
                                <input type="number" name="valor" id="valor" placeholder="Valor do Pacote*"
                                className="contact-input fields" required="Informe o valor total do Pacote"
                                value={valor}
                                onChange={this.changeHandler}
                                />
                            </div>
                        </div>
                        <div className="text-right">
                        <button type="submit" className="btn btn-primary" >
                            Enviar
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </section>
        )
    }
}

export default PostDestino