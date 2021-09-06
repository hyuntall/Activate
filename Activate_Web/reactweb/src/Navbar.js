import React from 'react';
import {Link} from 'react-router-dom'; // npm install react-router-dom 해야함

const Navbar = () => {
    return(
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/" >HOME</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Safety">SAFETY</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Environment">ENVIRONMENT</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/contact">CONTACT</Link>
  </li>
</ul>
    );
};

export default Navbar;