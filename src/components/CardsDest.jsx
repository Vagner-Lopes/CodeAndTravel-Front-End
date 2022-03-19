import React from "react";

const CardsDest = (props) => {
  return (
    <section className="grids-1 py-5">
      <div className="grids py-lg-5 py-md-4">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="hny-title mb-5 d-inline ">Destinos</h3>

          </div>
          <h4>Conheca os Melhores Destino do Brasil e do Mundo!</h4>
          <hr />
          <br />

          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0">
              <div className="column cards-destino">
                <a href="blog-single.html">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRanIByoDqbJpCk4vOW1LuTLMbC4D-BME5T6SysWLRB-SZvV1ERi3khjOkdH5PYgbAI5SdZmGmf0LA7ZgqR5dWc7w"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div className="info">
                  <h4>
                    <a href="blog-single.html">Jardim Botânico</a>
                  </h4>
                  <p>Jardim Botânico-RJ</p>
                  <p>3 Dias, 4 Noites </p>
                  <div className="dst-btm">
                    <h6 className="">A partir de:</h6>
                    <h5 className="text-danger d-inline">
                      R$<span>1170.00</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0">
              <div className="column  cards-destino ">
                <a href="blog-single.html">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQ4WWBAHU-WkRZATB8vqksQdM9FOTOAbUOjVjWfA92vW3xVe6pWcX4o92ibimKjJAmbzM5Y5qht7oVuuEj8BVsug"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div className="info">
                  <h4>
                    <a href="blog-single.html">Corcovado</a>
                  </h4>
                  <p>Rio de Janeiro-RJ</p>
                  <p>1 Dias, 1 Noites </p>
                  <div className="dst-btm">
                    <h6 className="">A partir de:</h6>
                    <h5 className="text-danger d-inline">
                      R$<span>940.00</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4">
              <div className="column cards-destino">
                <a href="blog-single.html">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQJj5HdpW7msCaro4lEefGGPhTvzCkxhslosbQOcpq1ijR0kyX7kJ56PgE9QcOVkvCdvVgSO6TYp87I_G3MzsAazg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <div className="info">
                  <h4>
                    <a href="blog-single.html">Porto de Galinhas</a>
                  </h4>
                  <p>Ipojuca-PE</p>
                  <p>3 Dias, 4 Noites </p>
                  <div className="dst-btm">
                    <h6 className="">A partir de:</h6>
                    <h5 className="text-danger d-inline">
                      R$<span>2090.00</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4 ">
              <div className="column  cards-destino ">
                <a href="promocoes">
                  <img
                    src="https://ibis.accor.com/editorial/imagerie/article/praia-de-boa-viagem-6db9_660x440.jpg"
                    alt="erro na url da imagem"
                    className="img-fluid"
                  />
                </a>
                <div className="info p-1">
                  <a href="/promocoes">
                    <h4>Praia de Boa Viagem</h4>
                  </a>
                  <p>Recife-PE</p>
                  <p>2 Dias, 3 Noites</p>
                  <div className="dst-btm">
                    <h6 className="">A partir de: </h6>
                    <div className="row d-flex justify-content-around p-1">
                      <h5 className="text-danger d-inline col-9">
                        R$<span>1656.0</span>0
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4 ">
              <div className="column  cards-destino ">
                <a href="promocoes">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuv8pvre5hCCbRoi_4BkDtQr7JIz9MOAVtgnJ_521XcgPQY8AvfIjEtoqR1ix65irZJuKAP7IkSgUUROtUZs4_6w"
                    alt="erro na url da imagem"
                    className="img-fluid"
                  />
                </a>
                <div className="info p-1">
                  <a href="/promocoes">
                    <h4>Pão de Açucar</h4>
                  </a>
                  <p>Rio de Janeiro-RJ</p>
                  <p>2 Dias, 3 Noites</p>
                  <div className="dst-btm">
                    <h6 className="">A partir de: </h6>
                    <div className="row d-flex justify-content-around p-1">
                      <h5 className="text-danger d-inline col-9">
                        R$<span>1233.0</span>0
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4 ">
              <div className="column  cards-destino ">
                <a href="promocoes">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkSStV1QrJZ0KFO-igIUmaD0kPQWGjGr_zRdPXTP7z47_Kwk3BEVQsakmsnzyL2piF9Z0tE3bl-URy4AYv7t3hRQ"
                    alt="erro na url da imagem"
                    className="img-fluid"
                  />
                </a>
                <div className="info p-1">
                  <a href="/promocoes">
                    <h4>Museu Assis Chateaubriand</h4>
                  </a>
                  <p>São Paulo-SP</p>
                  <p>1 Dia, 1 Noite</p>
                  <div className="dst-btm">
                    <h6 className="">A partir de: </h6>
                    <div className="row d-flex justify-content-around p-1">
                      <h5 className="text-danger d-inline col-9">
                        R$<span>450.0</span>0
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4 ">
              <div className="column  cards-destino ">
                <a href="promocoes">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-lI8dDTAYonrBjH1ZDTy6VJkS3PhDRWjg-gROGf_YngjBO_cMrPuhGem-ndq_WQlV-xseOYbMDQlW02L1Y6fZhw"
                    alt="erro na url da imagem"
                    className="img-fluid"
                  />
                </a>
                <div className="info p-1">
                  <a href="/promocoes">
                    <h4>Cristo Redentor</h4>
                  </a>
                  <p>Rio de Janeiro-RJ</p>
                  <p>2 Dias, 3 Noites</p>
                  <div className="dst-btm">
                    <h6 className="">A partir de: </h6>
                    <div className="row d-flex justify-content-around p-1">
                      <h5 className="text-danger d-inline col-9">
                        R$<span>1449.0</span>0
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4 ">
              <div className="column  cards-destino ">
                <a href="promocoes">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMNPneDMkyhJdHQSCyFpi8nwV4vTODb5hZ85wl5BM7ys2gVGVLCejxi6fwtct_2OwuV2urEBK97NOXyUyNUGF7Q"
                    alt="erro na url da imagem"
                    className="img-fluid"
                  />
                </a>
                <div className="info p-1">
                  <a href="/promocoes">
                    <h4>Lençóis Maranhenses</h4>
                  </a>
                  <p>Barreirinhas-MA</p>
                  <p>2 Dias, 3 Noites</p>
                  <div className="dst-btm">
                    <h6 className="">A partir de: </h6>
                    <div className="row d-flex justify-content-around p-1">
                      <h5 className="text-danger d-inline col-9">
                        R$<span>2115.0</span>0
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4 ">
              <div className="column  cards-destino ">
                <a href="promocoes">
                  <img
                    src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTBPtsRsstQbsHeE2msRQjnmijpA3Zd1fGrk-ZOyfeX1roaAWjfZTiv6hvIkePt0jgo8-OEVftoGScC4HV5ZL4Yow"
                    alt="erro na url da imagem"
                    className="img-fluid"
                  />
                </a>
                <div className="info p-1">
                  <a href="/promocoes">
                    <h4>Praia do Sancho</h4>
                  </a>
                  <p>Fernando de Noronha-PE</p>
                  <p>2 Dias, 3 Noites</p>
                  <div className="dst-btm">
                    <h6 className="">A partir de: </h6>
                    <div className="row d-flex justify-content-around p-1">
                      <h5 className="text-danger d-inline col-9">
                        R$<span>2332.0</span>0
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4 ">
              <div className="column  cards-destino ">
                <a href="promocoes">
                  <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHBpK_w5-HimiglG1H5qBVbSyYXjRYaslYZFgl2EIEUTY-V_et8NQr2_yb9jqq48HYknHdunHYDKxWW4qxc07kWQ"
                    alt="erro na url da imagem"
                    className="img-fluid"
                  />
                </a>
                <div className="info p-1">
                  <a href="/promocoes">
                    <h4>Chapada dos Veadeiros</h4>
                  </a>
                  <p>Chapada dos Veadeiros-GO</p>
                  <p>1 Dias</p>
                  <div className="dst-btm">
                    <h6 className="">A partir de: </h6>
                    <div className="row d-flex justify-content-around p-1">
                      <h5 className="text-danger d-inline col-9">
                        R$<span>140.0</span>0
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-sm-6 mt-md-0 mt-4 ">
              <div className="column  cards-destino ">
                <a href="promocoes">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTYF9Iku08NFY-ZXgwMLSbm0WVI0FGaPHU-3ZhHE73v5x4Cbcz2V4ogJtEB9VHdVKryR0gkibZ7W5dRxyWRtWvzUA"
                    alt="erro na url da imagem"
                    className="img-fluid"
                  />
                </a>
                <div className="info p-1">
                  <a href="/promocoes">
                    <h4>Parque Nacional Iguaçu</h4>
                  </a>
                  <p>Foz do Iguaçu-PR</p>
                  <p>2 Dias</p>
                  <div className="dst-btm">
                    <h6 className="">A partir de: </h6>
                    <div className="row d-flex justify-content-around p-1">
                      <h5 className="text-danger d-inline col-9">
                        R$<span>598.0</span>0
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsDest;
