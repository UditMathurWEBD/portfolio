import './aboutme.css';


import frontend1 from '../images/frontend1.svg';
import frontend2 from '../images/frontend2.svg';
import frontend3 from '../images/frontend3.svg';

function aboutme(){
    return(

    <main 
    id="main">
        <h3 className="tooling-heading">DRIBBBLE DESIGNS</h3>

     <div className="owl-carousel">
  <div> <img className='img-fluid img-width' alt='frontend1' src={frontend1} ></img> </div>
  <div> <img className='img-fluid img-width' alt='frontend1' src={frontend2} ></img> </div>
  <div> <img className='img-fluid img-width' alt='frontend1' src={frontend3} ></img> </div>
  <div> <img className='img-fluid img-width' alt='frontend1' src={frontend1} ></img> </div>
  <div> <img className='img-fluid img-width' alt='frontend1' src={frontend1} ></img> </div>

   
 
</div> 
          




</main>

    )
}


export default aboutme;