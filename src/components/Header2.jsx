import React from "react";

const Header2 = (props) => {
  return (
    <div className="container mt-5">
      <div className="title-content text-left mb-lg-5 mb-4">
        <h6 className="sub-title">{props.subtitulo}</h6>
        <h3 className="hny-title">{props.titulo}</h3>
      </div>
    </div>
  );
};

export default Header2;
