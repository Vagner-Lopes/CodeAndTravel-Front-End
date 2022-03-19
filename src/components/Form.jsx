import React from "react";

const Form = () => {
  return (
    <section className="w3l-contact container" id="contact">
      <br />
      <br />
      <br />
      {
        //Contatos
      }
      <div className="contact-infubd py-5">
        <div className="container py-lg-3">
          <div className="contact-grids row">
            <div className="col-lg-6 contact-left">
              <div className="partners">
                <div className="cont-details">
                  <h5>Fale conosco</h5>
                  <p className="mt-3 mb-4">
                    Olá a todos, nós estamos prontos para lhe atenter 24/7 por
                    e-mail ou por telefone. Diga-nos em que podemo lhe ajudar?
                  </p>
                </div>
                <div className="hours">
                  <h6 className="mt-4">Email:</h6>
                  <p>
                    <a href="mailto:mail@codeandtravel.com">
                      contato@codeandtravel.com
                    </a>
                  </p>
                  <h6 className="mt-4">Visite-nos:</h6>
                  <p> Rua Anna Júlia, Los Hermanos/Music, BR.</p>
                  <h6 className="mt-4">Contato:</h6>
                  <p className="margin-top">
                    <a href="tel:+55-41-99876-5432">(041) 9-9876-5432</a>
                  </p>
                  <p>
                    <a href="tel:+55-41-98765-4321">(041) 9-8765-4321</a>
                  </p>
                </div>
              </div>
            </div>
            {
              //Formulario
            }
            <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
              <form action="/contatos" method="" className="signin-form">
                <div className="input-grids">
                  <div className="form-group">
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Seu Nome*"
                      className="contact-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="Sender"
                      id="Sender"
                      placeholder="Seu E-mail*"
                      className="contact-input"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="Subect"
                      id="Subect"
                      placeholder="Assunto*"
                      className="contact-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="Message"
                    id="Message"
                    placeholder="Escreva sua mensagem aqui!*"
                    required=""
                  ></textarea>
                </div>
                <div className="text-right">
                  <button className="btn btn-style btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
