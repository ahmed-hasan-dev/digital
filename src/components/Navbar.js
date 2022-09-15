// import React from 'react'
// // import './Navbar.css'

// export default function Navbar() {
//   return (
//     <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
//   <div classNameName="container-fluid">
//     <a classNameName="navbar-brand" href="#">Navbar</a>
//     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span classNameName="navbar-toggler-icon"></span>
//     </button>
//     <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
//         <li classNameName="nav-item">
//           <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li classNameName="nav-item">
//           <a classNameName="nav-link" href="#">Link</a>
//         </li>
//         <li classNameName="nav-item dropdown">
//           <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>

//         </li>
//         <li classNameName="nav-item">
//           <a classNameName="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>

//     </div>
//   </div>
// </nav>

//   )
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html" />
          Digitizal{" "}
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li className="nav-item mx-2">
              <Link to="/Home">Home</Link>
            </li>
            <li>
              {/* <a href="about.html">About</a> */}
              <Link to="/About">About</Link>
            </li>
            <li>
              {/* <a href="about.html">About</a> */}
              <Link to="/Services">Services</Link>
            </li>
            {/* <li>
              <a href="courses.html">Services</a>
            </li> */}
             <li>
              {/* <a href="about.html">About</a> */}
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
