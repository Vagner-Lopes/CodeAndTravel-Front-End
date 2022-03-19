import React from "react";

const Highlight = () => {
  return (
    <section className="w3l-bottom py-5">
      <div className="container py-md-4 py-3 text-center">
        <div className="row my-lg-4 mt-4">
          <div className="col-lg-9 col-md-10 ml-auto">
            <div className="bottom-info ml-auto">
              <div className="header-section text-left">
                <h3 className="hny-title two">
                  Viajar torna o homem sábio, codar torna o homem mais
                  feliz
                </h3>
                <p className="mt-3 pr-lg-5">
                  Este é nosso lema. Este é nosso estilo de vida.
                </p>
                <a
                  href="/promocoes"
                  className="btn btn-style btn-secondary mt-5"
                >
                  Promoções
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
