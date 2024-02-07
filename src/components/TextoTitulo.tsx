interface ITextoTituloProps {
  tamanio: string;
  titulo: string;
}

function TextoTitulo(props: ITextoTituloProps) {
  const tipo = props.tamanio;
  if (tipo === "ch") {
    return (
      <>
        <input value={props.titulo} type="text" size={50} />
      </>
    );
  }
}

export default TextoTitulo;
