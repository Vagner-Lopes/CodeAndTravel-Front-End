import React from "react";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//move top

const Footer = () => {
  return (
    <footer>
      <section className="w3l-footer bg-dark">
        <div className="w3l-footer-16-main py-5">
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 column">
                <div className="row">
                  <div className="col-md-4 column">
                    <h3 className=" text-white">Code&Travel</h3>
                    <ul className="footer-gd-16  text-white">
                      <li>
                        <a href="./Home">Home</a>
                      </li>
                      <li>
                        <a href="./Destino">Destinos</a>
                      </li>
                      <li>
                        <a href="./Promacoes">Promoções</a>
                      </li>
                      <li>
                        <a href="./Contatos">Contatos</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 column mt-md-0 mt-4"></div>
                  <div className="col-md-4 column mt-md-0 mt-4"></div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 column pl-lg-5 column4 mt-lg-0 mt-5">
                <h3 className=" text-white">Newsletter </h3>
                <div className="end-column">
                  <h4>Receba as últimas notícias e ofertas.</h4>
                  <form action="" className="subscribe" method="">
                    <input type="email" name="email" placeholder="Seu e-mail*" required=""/>
                    <button type="submit">Enviar</button>
                  </form>
                  <p>
                    Assine nossa Newsletter e fique por dentro das últimas
                    notícias e artigos dos melhores destinos do Mundo! É gratis
                    <br />
                    <strong>Não enviamos span para seu e-mail</strong> .
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
              <div className="columns text-lg-left text-center ">
                <p className="text-secundary">
                  &copy; 2022 Code&Travel. Todos os direitos reservados.
                </p>
              </div>
              <div className="columns-2 mt-lg-0 mt-3">
                <ul className="social">
                  <li>
                    <a href="#facebook">
                      <span className="fa fa-facebook" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <span className="fa fa-linkedin" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <span className="fa fa-twitter" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#google">
                      <span className="fa fa-google-plus" aria-hidden="true"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#github">
                      <span className="fa fa-github" aria-hidden="true"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button onClick={topFunction()} id="movetop" title="To-top">
          <span className="fa fa-angle-up"></span>
        </button>
      </section>
    </footer>
  );
};

export default Footer;
