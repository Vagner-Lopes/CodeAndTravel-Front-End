import React from "react";

const Slider2 = () => {
  return (
    <div>
      <div className=" position-realtive">
        <div className="">
          <img
            className="img-thumbnail "
            src="assets/images/banner1.jpg"
            alt=""
          />
        </div>
        <div
          className="demo-inner-content position-absolut"
          style={{ top: -200 }}
        >
          <div className="container">
            <form className="booking-form">
              <div className="row book-form">
                <div className="form-input col-md-4 mt-md-0 mt-3">
                  <select name="selectpicker" className="selectpicker">
                    <option value="">Nárnia</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="leste-europeu">Leste Europeu</option>
                    <option value="europa">Europa</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>
                <div className="form-input col-md-4 mt-md-0 mt-3">
                  <input type="date" name="" placeholder="Data" required="" />
                </div>
                <div className="bottom-btn col-md-4 mt-md-0 mt-3">
                  <button className="btn btn-style btn-secondary">
                    <span
                      className="fa fa-search mr-3"
                      aria-hidden="true"
                    ></span>
                    Pesquisar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
