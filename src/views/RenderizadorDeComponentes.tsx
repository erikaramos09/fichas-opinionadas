import TextoSimple from "../components/TextoSimple";
import TextoLibre from "../components/TextoLibre";
import TextoTitulo from "../components/TextoTitulo";
import Imagen from "../components/Imagen";
import StarRating from "../components/StarRating";

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
        Autor: <TextoLibre tamanio="ch" texto={""} />
      </div>
      <div>
        País: <TextoLibre tamanio="ch" texto={""} />
      </div>
      <div>
        Páginas: <TextoLibre tamanio="ch" texto={""} />
      </div>
      <div>
        Año: <TextoLibre tamanio="ch" texto={""} />
      </div>
      <div className="App">
        <h4>Calificación:</h4>
        <StarRating />
      </div>
    </>
  );
}

export default RenderizadorDeComponentes;
