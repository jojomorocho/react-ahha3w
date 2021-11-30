import React from 'react';
import Navbar from './Navbar';
import './style';

const Proyectos = () => {
  return (
  <>
    <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div >
        <form class = "form-Proyectos">
          <h3 class = "h4">Proyeto Lista de tareas</h3>
          <p class = "h4">
            En este proyecto uso un TO DO List es una lista donde uno puede agregar cosas TO DO (para hacer). Consiste de un textbox donde se ingresa lo que tengo que hacer, un botón para agregar el item a la lista, y una lista donde se muestran todos los items que se fueron agregando. Cada item puede ser marcado como resuelto y aparecerá en la lista tachado. {' '}
          </p>
        </form>
      </div>
    </>
  );
};

export default Proyectos;