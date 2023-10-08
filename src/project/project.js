
import ejoy from '../images/ejoy.svg'
import lassi from '../images/lassi.svg'
import play from '../images/play.svg'
import trubot from '../images/truebot.svg'
import ladder from '../images/ladder.svg'
import './project.css';



function project(){
return(
<div className="four-cards">

<div className="card card-1" >
<div className="card-body">
<h3 className='project-heading'>Ejoy Shop</h3>
<br></br>
<h5 className='project-meaning'>We Provide Clothes From your     <br></br>Favourite Brand And Shop</h5>
<br></br>
<p className="card-text project-lines">India’s Number 1 platform to directly buy clothes from your favourite shops in your favourite city  just from your home . A 4 Steps process to buy your Clothes from you favourite vendors .</p>
<button className='project-view'><a href='/#'><img src={play} className="img-fluid" alt="..."></img> View Project</a></button>
</div>
<img src={ejoy} className="img-fluid four-images " alt="..."></img>
</div>



<div className="card card-2" >
<div className="card-body">
<h3 className='project-heading'>Lassi Story</h3>
<br></br>
<h5 className='project-meaning'>Make successful stories with <br></br> Lassi Story.</h5>
<br></br>
<p className="card-text project-lines">Encouraging young individuals to become independent entrepreneurs. Join us to frame your success story with Lassi Story. </p>
<button className='project-view'><a href='/#'><img src={play} className="img-fluid" alt="..."></img> View Project</a></button>
</div>
<img src={lassi} className="img-fluid four-images lassi-image" alt="..."></img>
</div>


<div className="card card-3" >
<div className="card-body">
<h3 className='project-heading'>TrueBot</h3>
<br></br>
<h5 className='project-meaning'>India’s Highest Rated Apple Repairs<br></br> at your doorstep</h5>
<br></br>
<p className="card-text project-lines">India’s Highest Rated Apple Repairs at your doorstep .Most trusted iPhone, iPad, iWatch & MacBook repair service in Hyderabad<br></br> </p>
<button className='project-view'><a href='/#'><img src={play} className="img-fluid" alt="..."></img> View Project</a></button>
</div>
<img src={trubot} className="img-fluid four-images trubot-image" alt="..."></img>
</div>


<div className="card card-4" >
<div className="card-body">
<h3 className='project-heading'>Ejoy Shop</h3>
<br></br>
<h5 className='project-meaning'>India's Most Trusted Career <br></br> Counselling Platform    </h5>
<br></br>
<p className="card-text project-lines">India's largest space where Dreams meet destination  We help you make informed choices at  every step of your career!</p>
<button className='project-view'><a href='/#'><img src={play} className="img-fluid" alt="..."></img> View Project</a></button>
</div>
<img src={ladder} className="img-fluid four-images" alt="..."></img>
</div>
</div>

)
}



export default project;
