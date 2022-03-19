import React from "react";

const Highligth3 = (props) => {
  return (
    <section className="w3l-about-breadcrumb text-left">
      <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div className="container py-2">
          <h2 className="title">{props.titulo}</h2>
          <ul className="breadcrumbs-custom-path mt-2">
            <li>
              <a href="/home">Home</a>
            </li>
            <li className="active">
              <span className="fa fa-arrow-right mx-2" aria-hidden="true"></span>
              {props.subtitulo}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Highligth3;
