import './frproject.css';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

import React, { useState } from "react";
import pepper from '../images/pepper.svg';
import prabhu from '../images/prabhu.svg';
import samde from '../images/samde.svg';



  function FrontendProject(){
  
    return(
<div id='frontendev' className='fr-section'>

    <h4 className='frdev-line'> Frontend Development</h4>
    <br></br>
    {/* <p className='second-line'>Project Name : Pepperscript.com</p> */}
    <br></br>

    <div className='flexing-buttons-fr'>
<button className='hover-button'>Duration : 15 Days/ Project</button>
<button className='hover-button'>Total Team : 1</button>
<button className='hover-button'>Framework : Bootstrap</button>
<button className='hover-button'>Tools : HTML, CSS, JS</button>
</div>


    <br></br>
    <br></br>
    <br></br>
<div className='image-center'>
    <AliceCarousel>
        <a href='https://pepperscript.com/'>  <img className='image-change' src={pepper}></img></a>
        <a href='https://samde.in/'>   <img className='image-change' src={samde}></img></a>
        <a href='https://prabhupriya.com/'>     <img className='image-change' src={prabhu}></img></a>
      
  

  
    </AliceCarousel>

</div>
   
   

</div>

    )

}


export default FrontendProject;