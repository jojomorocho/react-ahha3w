import React from 'react';
import Navbar from './Navbar';

const Contacto = () => {

  function mensaje() {
    alert('El mensaje se envio con exito');
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div >
            <form class = "form">
              <div >
                <div >
                  <span class = "h4">Para contactarme</span>
                </div>
                <div >
                  <h5 class = "h4">Mi gmail: ljoelemanuel@gmail.com</h5>
                </div>
              </div>
              <div >
                <div >
                  <div >
                    <input  placeholder="NOMBRE" />
                  </div>
                  <div >
                    <input  placeholder="APELLIDO" />
                  </div>
                  <div >
                    <input  placeholder="EMAIL" />
                  </div>
                  <div >
                    <input  placeholder="MESSAGE" />
                  </div>
                  <div >
                    <button
                      onClick={mensaje}
                      type="submit"
        
  >
                     Enviar
                    </button>
                  </div>
                </div>
              </div>
             </form>
          </div>
    </>
  );

}
export default Contacto;