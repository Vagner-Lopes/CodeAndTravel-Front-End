import Grids from "../components/Grids";
import Header2 from "../components/Header2";
import Highligth3 from "../components/Highlight3";

const Promocoes = () => {
  return (
    <div>
      <Highligth3 titulo="As Melhores Promoções" subtitulo="Promoções" />
      <br />
      <Header2 titulo="Veja os destinos mais populares" subtitulo="em alta" />
      <Grids
        url1="https://ibis.accor.com/editorial/imagerie/article/praia-de-boa-viagem-6db9_660x440.jpg"
        titulo1="Praia de Boa Viagem"
        dias1="3dias, 4noites"
        valor1="1989,90"
        url2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuv8pvre5hCCbRoi_4BkDtQr7JIz9MOAVtgnJ_521XcgPQY8AvfIjEtoqR1ix65irZJuKAP7IkSgUUROtUZs4_6w"
        titulo2="Pão de Açucar"
        dias2="3dias, 4noites"
        valor2="1489,90"
      />
      <Grids
        url1="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkSStV1QrJZ0KFO-igIUmaD0kPQWGjGr_zRdPXTP7z47_Kwk3BEVQsakmsnzyL2piF9Z0tE3bl-URy4AYv7t3hRQ"
        titulo1="Museu Assis Chateaubriand"
        dias1="3dias, 4noites"
        valor1="189,90"
        url2="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-lI8dDTAYonrBjH1ZDTy6VJkS3PhDRWjg-gROGf_YngjBO_cMrPuhGem-ndq_WQlV-xseOYbMDQlW02L1Y6fZhw"
        titulo2="Cristo Redentor"
        dias2="3dias, 4noites"
        valor2="989,90"
      />
      <Grids
        url1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMNPneDMkyhJdHQSCyFpi8nwV4vTODb5hZ85wl5BM7ys2gVGVLCejxi6fwtct_2OwuV2urEBK97NOXyUyNUGF7Q"
        titulo1="Lençóis Maranhenses"
        dias1="3dias, 4noites"
        valor1="1349,90"
        url2="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTBPtsRsstQbsHeE2msRQjnmijpA3Zd1fGrk-ZOyfeX1roaAWjfZTiv6hvIkePt0jgo8-OEVftoGScC4HV5ZL4Yow"
        titulo2="Praia do Sancho"
        dias2="3dias, 4noites"
        valor2="1285,90"
      />
      <Grids
        url1="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHBpK_w5-HimiglG1H5qBVbSyYXjRYaslYZFgl2EIEUTY-V_et8NQr2_yb9jqq48HYknHdunHYDKxWW4qxc07kWQ"
        titulo1="Chapada dos Veadeiros"
        dias1="3dias, 4noites"
        valor1="229,90"
        url2="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTYF9Iku08NFY-ZXgwMLSbm0WVI0FGaPHU-3ZhHE73v5x4Cbcz2V4ogJtEB9VHdVKryR0gkibZ7W5dRxyWRtWvzUA"
        titulo2="Parque Nacional Iguaçu"
        dias2="3dias, 4noites"
        valor2="189,00"
      />
    </div>
  );
};

export default Promocoes;
