import React from "react";
import Udit from '../udit.svg';
import './header.css';


function Header(){
    return(
      <div>
        <br></br>   <br></br>  <br></br>
        <nav className="navbar navbar-expand-lg navbar-main">
  <div className="container-fluid">
  
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#aboutmeudit">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#appdevelopment">App Development</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#toolslearned">Tooling</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#frontendev">Frontend Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Design Projects</a>
        </li>
       
        <li className="nav-item">
         <button className="header-button"><a className="nav-link hireme" href='mailto:mathurudit90@gmail.com?subject=Important!&amp;body=Hi.Lets conncect'>Hire Me</a></button> 
        </li>
       
      </ul>
    </div>
  </div>
</nav>
<br></br>
<br></br>
<br></br>
</div>
    )
  
}

export default Header;