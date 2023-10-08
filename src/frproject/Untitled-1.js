

import './frproject.css';

import React, { useState } from "react";
import pepper from '../images/pepper.svg';



function FrontendProject(){
   
    return(
<div id='#frontendev' className='fr-section'>

    <h4 className='frdev-line'> Frontend Development</h4>
    <br></br>
    <p className='second-line'>Project Name : Pepperscript.com</p>
    <br></br>

    <div className='flexing-buttons-fr'>
<button className='hover-button'>Duration : 2 months</button>
<button className='hover-button'>Total Team : 4</button>
<button className='hover-button'>Framework : Flutter</button>
<button className='hover-button'>Tools : HTML, CSS, JS</button>
</div>


    <br></br>
    <br></br>
    <br></br>
<div className='image-center'>
<img className='image-change' src={pepper}></img>
</div>
   
   

</div>

    )

}


export default FrontendProject;