import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface IPropsEstrella {
  indice: number;
  rating: number;
  setRating: (v: number) => void;
}

function Estrella(props: IPropsEstrella) {
  const { indice, rating, setRating } = props;

  const valorDefault: boolean = rating >= indice;
  const [color, setColor] = useState<"gold" | "gray">(
    valorDefault ? "gold" : "gray"
  );

  const clickEstrella = function (evt: any) {
    setRating(indice);
  };

  useEffect(() => {
    const nuevoColor = rating >= indice ? "gold" : "gray";
    setColor(nuevoColor);
  }, [rating, indice]);

  //const estadoEstrella = hookEstado[0];
  //const setEstadoEstrella = hookEstado[1];

  // desestructurado
  // const { activado } = props;

  return (
    <FontAwesomeIcon icon={faStar} color={color} onClick={clickEstrella} />
  );
}

interface IStarRatingProps {
  rating?: number;
}
function StarRating(props: IStarRatingProps) {
  const ratingDefault = props.rating === undefined ? 0 : props.rating;
  const [estadoRating, setEstadoRating] = useState<number>(ratingDefault);

  return (
    <div
      style={{ backgroundColor: "#aaa", width: "fit-content", padding: "2px" }}
    >
      {/*
        <Estrella indice={1} rating={estadoRating} setRating={setEstadoRating} />
      <Estrella indice={2} rating={estadoRating} setRating={setEstadoRating} />
      <Estrella indice={3} rating={estadoRating} setRating={setEstadoRating} />
      <Estrella indice={4} rating={estadoRating} setRating={setEstadoRating} />
      <Estrella indice={5} rating={estadoRating} setRating={setEstadoRating} />
  */}
      {[1, 2, 3, 4, 5].map((valorIndice) => {
        return (
          <Estrella
            indice={valorIndice}
            rating={estadoRating}
            setRating={setEstadoRating}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
