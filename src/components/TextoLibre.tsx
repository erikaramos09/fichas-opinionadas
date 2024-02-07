interface ITextoLibreProps {
  tamanio: string;
  texto: string;
}

function TextoLibre(props: ITextoLibreProps) {
  const tipo = props.tamanio;
  if(tipo === 'ch') {
    return (
      <>
        <input value={props.texto} type="text" size={30}/> 
      </>
    );
  } else if (tipo === 'm') {
    return (
      <>
        <input value={props.texto} type="text" size={80}/> 
      </>
    );
  }
  return <>Tipo no soportado: {tipo}</>;
}

export default TextoLibre;
