import React from 'react';
import {Link} from 'react-router-dom'; // npm install react-router-dom 해야함

const Navbar = () => {
    return(
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/" >Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Safety">Safety</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Environment">Environment</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/contact">contact</Link>
  </li>
</ul>
    );
};

export default Navbar;