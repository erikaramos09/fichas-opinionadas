import TextoSimple from "../components/TextoSimple";
import TextoLibre from "../components/TextoLibre";
import TextoTitulo from "../components/TextoTitulo";

function RenderizadorDeComponentes() {
  return (
    <>
      <h1>Este es tu sandbox</h1>
      Titulo: <TextoTitulo tamanio="ch" titulo={""} />
      <br />
      Texto simple: <TextoSimple />
      <br />
      Texto Libre chico: <TextoLibre tamanio="ch" texto={""} />
      <br />
      Texto Libre mediano: <TextoLibre texto="ola K ase" tamanio="m" />
    </>
  );
}

export default RenderizadorDeComponentes;
