import TextoSimple from "../components/TextoSimple";
import TextoLibre from "../components/TextoLibre";
import TextoTitulo from "../components/TextoTitulo";
import Imagen from "../components/Imagen";
import Autor from "../components/Autor";
import Pais from "../components/Autor";

function RenderizadorDeComponentes() {
  return (
    <>
      <h1>Este es tu sandbox</h1>
      <div>
        Titulo: <TextoTitulo tamanio="ch" titulo={""} />
        <br />
        Portada:
        <Imagen imagen={""} />
        <br />
        Texto simple: <TextoSimple />
        <br />
        Texto Libre chico: <TextoLibre tamanio="ch" texto={""} />
        <br />
        Texto Libre mediano: <TextoLibre texto="ola K ase" tamanio="m" />
      </div>
      <div>
        Autor: <Autor tamanio="ch" autor={""} />
      </div>
      <div>
        País: <Autor tamanio="ch" autor={""} />
      </div>
      <div>
        Páginas: <Autor tamanio="ch" autor={""} />
      </div>
      <div>
        Año: <Autor tamanio="ch" autor={""} />
      </div>
    </>
  );
}

export default RenderizadorDeComponentes;
