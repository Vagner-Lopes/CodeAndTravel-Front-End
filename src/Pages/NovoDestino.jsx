import FormDestinoNovo from "../components/FormDestinoNovo";
import Highligth3 from "../components/Highlight3";
const NovoDestino = () => {
  return (
    <div className="">
      <Highligth3 titulo="Os Melhores Destinos" subtitulo=" Criar Novo Destinos" />
      <FormDestinoNovo />
    </div>
  );
};

export default NovoDestino;
