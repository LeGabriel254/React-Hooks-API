import React from 'react'
import { NavLink } from 'react-router-dom'
const Header= ()=> {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-4" href="#">LA COLLECTION</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
  <div className="buttons">
<a href="" className="btn-outline-dark ms-2">
  <div className="fa fa-sign-in me-1">Login</div></a>
  <a href="" className="btn-outline-dark ms-2">
  <div className="fa fa-user-plus me-1 ms-2">Register</div></a>
  <a href="" className="btn-outline-dark ms-2">
  <div className="fa fa-shopping-cart me-1">Cart(0)</div></a>
  </div>
    </div>
  </div>
</nav>
    </div>
   )}

   export default Header;