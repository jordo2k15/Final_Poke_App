import React from 'react'

function Navbar(){
  return(
    <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Login / Register</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pokedex</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Game</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Logout</a>
    </li>
  </ul>
  )
}
export default Navbar;
