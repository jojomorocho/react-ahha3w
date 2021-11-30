import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
return(
<div class="collapse navbar-collapse" id="navbarNav">
          <form>
              <div>
                <Link to={'/'}>
                  <button>
                  Home
                  </button>
                </Link>
              </div>
              <div>
              <Link to={'/About'}>
                <button>
                About
                </button>
              </Link>
              </div>
              <div>
              <Link to={'/Proyectos'}>
                <button>
                Proyectos
                </button>
              </Link>
              </div>
              <div>
              <Link to={'/Contacto'}>
                <button>
                Contacto
                </button>
              </Link>
              </div>     
          </form>
        </div>
);
}
export default Navbar;