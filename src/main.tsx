import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import libros from './data/libros.tsx';
import Card from './components/Card.tsx';
import RenderizadorDeComponentes from './views/RenderizadorDeComponentes.tsx';

const routes = [
  {
    path: "/fichas-opinionadas",
    element: <App />,
  },
  {
    path: "/fichas-opinionadas/pruebaComps",
    element: <RenderizadorDeComponentes />,
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
