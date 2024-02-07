import './App.css';
import Card from "./components/Card";
import ShowHide from './components/ShowHide';
import libros from "./data/libros";

function App() {
  const libroslist = libros.map(v => {
    return <Card title={v.name} description ={v.description} image={v.image}/>
  })
return (
  <div className="App">
    <h1>Holi mundi</h1>
    <div className='container'>
    {/*<Card title="Titulo del libro"
    description="reseña del libro" />
    <Card />
    <Card />
<Card />*/}
      {libroslist}
    </div>
   <ShowHide/> 
  </div>
  );
}

export default App;

/*<div className="contenedor">
  <div className="titulo">
    <h2>Títilo del libro</h2>
  </div>
  <div className="imagen">
    <h2>Deposite una imagen aquí</h2>
  </div>
  <div className="reseña">
    <p>La reseña va aquí</p>
  </div>
  <div className="autor">
    <p>Autor:</p><input type="text"  />
  </div>
  <div className="pais"></div>
  <div className="paginas"></div>
  <div className="año"></div>
  <div className="calificacion"></div>
  <div className="opinion"></div>

</div>;*/ 