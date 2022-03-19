import React from "react";

$(".counter").countUp();

const Stats = () => {
  return (
    <section className="w3l-stats py-5" id="stats">
      <div className="gallery-inner container py-lg-0 py-3">
        <div className="row stats-con pb-lg-3">
          <div className="col-lg-3 col-6 stats_info counter_grid">
            <p className="counter">730</p>
            <h4>Destinos</h4>
          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid1">
            <p className="counter">1680</p>
            <h4>Guias</h4>
          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid mt-lg-0 mt-5">
            <p className="counter">812</p>
            <h4>Clientes satisfeitos</h4>
          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid2 mt-lg-0 mt-5">
            <p className="counter">990</p>
            <h4>Premios</h4>
          </div>
        </div>
      </div>
      <script>$('.counter').countUp();</script>
    </section>
  );
};

export default Stats;
