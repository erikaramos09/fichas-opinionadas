interface IimagenProps {
  imagen: string;
}

function Imagen(props: IimagenProps) {
  return (
    <>
      <input type="image" src={props.imagen} alt="Aqui iria una imagen" />
    </>
  );
}

export default Imagen;
