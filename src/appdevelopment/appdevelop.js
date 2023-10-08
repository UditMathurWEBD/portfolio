import './appdevelop.css';

import figma from '../images/figma.svg';
import yodaeye from '../images/yodaeye.svg';


function Appdevelop(){
return(



<section id='appdevelopment' className='app-section'>

<div>
<h2 className='title-name'>App Development</h2>
<br></br>
<h3 className='project-name'>Project Name : YodaEye</h3>
<br></br>
<p className='para-app'>We are making a mobile application to make life of the retailers easier . Main points Below.</p>
<br></br>
<div className='flexing-buttons'>
<button className='hover-button'>Duration : 2 months</button>
<button className='hover-button'>Total Team : 4</button>
<button className='hover-button'>Framework : Flutter</button>
</div>

<br></br>
<ul className='list-width'>
<li className='li-text-size'>My task was to create the UI of the app . I started it by looking the previous version of the app which was already created before I joined Yodacart .</li>
<li className='li-text-size'>Total screens were around 12-15 , but we had to add a new option for signing up from the app , first we give access manually from our backend . So after making the signup screens , total screens were 18 .</li>
<li className='li-text-size'>After screen completion in design , my task was to create the UI in dart, so it took 5-8 days to make the design in Dart .</li>
</ul>
<br></br>
<h3 className='project-name'>Tools Used</h3>
<br></br>
<div className='tools-used'>
<div className='box-tools'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>Figme</h5>
<h5 className='tool-experience'>Experience : 2 Years</h5>
</div>
<div>
<img alt='tool names' src={figma}></img>
</div>
</div>
</div>
<div className='box-tools'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>Dart</h5>
<h5 className='tool-experience'>Experience : 6 Months</h5>
</div>
<div>
<img alt='tool names' src={figma}></img>
</div>
</div>
</div>


</div>



</div>
<div>
<img className='img-fluid img-yodaeye' src={yodaeye}></img>
</div>

</section>






)
}


export default Appdevelop;