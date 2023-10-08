import './frontend.css';
import snap from '../images/snap.svg'
import resume from '../images/resume.pdf'


function frontend(){
    return(
   <div id='aboutmeudit' className='info-card'>
      <div> <img className='img-fluid img-width' alt='frontend1' src={snap} ></img> </div>
      <div className='para-description'>
         
         <p className="para-frontend">
         
             I have been working in many startups for the last 2+ years
             and I have developed and designed many websites and products .<br></br>
         </p>
       
         <p className="para-frontend">I have been using many languages to develop the websites and working with many
             frameworks to make the websites beautiful .<br></br><br></br>
            
             Some of them are HTML , CSS , Javascript , Bootstrap .
             For Designing I use Figma , Adobe Softwares .
         </p>
        


         <button className='hover-button'>
         <a className='resume' href={resume} view="">View Resume
 
         </a>
         </button>



     </div>

   </div>


    )
}


export default frontend;