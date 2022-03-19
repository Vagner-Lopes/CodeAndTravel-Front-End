import React from "react";

const Grids = (props) => {
  return (
    <section className="w3l-grids-3">
      <div className="container py-md-3">
        <div className="row bottom-ab-grids">
          <div className="col-12 col-sm-6 col-md- subject-card mt-lg-0 mt-4">
            <div className="subject-card-header p-4">
              <a href="#" className="card_title p-lg-4d-block">
                <div className="row align-items-center">    
                    <img src={props.url1} className="img-fluid col-12 " alt="" />
                  <div className="col-12  subject-content mt-sm-0 mt-4">
                    <h4>{props.titulo1}</h4>
                    <p>{props.dias1}</p>
                    <div className="dst-btm">
                      <h6 className=""> À partir de </h6>
                      <span>R${props.valor1}</span>
                    </div>
                    <p className="sub-para">
                      Por pessoa. Consulte valores para compartilhado!
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md- subject-card mt-lg-0 mt-4">
            <div className="subject-card-header p-4">
              <a href="#" className="card_title p-lg-4d-block">
                <div className="row align-items-center">
                    <img src={props.url2} className="img-fluid col-12 " alt="" />
                  <div className="col-12  subject-content mt-sm-0 mt-4">
                    <h4>{props.titulo2}</h4>
                    <p>{props.dias2}</p>
                    <div className="dst-btm">
                      <h6 className=""> À partir de </h6>
                      <span>R${props.valor2}</span>
                    </div>
                    <p className="sub-para">
                      Por pessoa. Consulte valores para compartilhado!
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grids;
