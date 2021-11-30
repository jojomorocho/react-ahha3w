import React from 'react';
import "./style.css";
import Navbar from './Navbar'

const About = () => {
 
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div >
      <div >
        <form class = "form-Layout">
          <h3 class = "h4">Objetivos prfecionales</h3>
          <p class = "h4">
            Mi objetivo profecional seria llegar aprender sobre animacion 2D y 3D y mejorar dibujando para poder llegar a trabajr en una buena empresa {' '}
          </p>
          </form>
        </div>
        <div >
          <form class = "form-Layout">
            <h3 class = "h4">intereses</h3>
            <p class = "h4">
           Mis intereces actualmente se inclinan del lado del arte orientado al dibujo digital y anmimacion 2D y 3D
            </p>
          </form>
        </div>
      </div>
    </>
  );

}
export default About;