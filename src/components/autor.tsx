interface IAutorProps {
  tamanio: string;
  autor: string;
}

function Autor(props: IAutorProps) {
  const tipo = props.tamanio;
  if (tipo === "ch") {
    return (
      <>
        <input value={props.autor} type="text" size={30} />
      </>
    );
  }
}

export default Autor;
