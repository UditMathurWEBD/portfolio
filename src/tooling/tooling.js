import './tooling.css';
import react from '../images/react.svg';
import bootstrap from '../images/bootstrap.svg';
import css from '../images/css.svg';
import html from '../images/html.svg';
import figma from '../images/figma.svg';
import xd from '../images/xd.svg';
import js from '../images/js.svg';
import sql from '../images/sql.svg';
import flutter from '../images/flutter.svg';


function tooling(){
return(
<section id='toolslearned' className="text-center">

<h4 className='head-line'> Some Frameworks ,<br></br> And Tools</h4>
<br></br><br></br><br></br>
<div className='tools-names'>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>React JS</h5>
<h5 className='tool-experience'>Experience : 1 Years</h5>
</div>
<div>
<img alt='tool names' src={react}></img>
</div>
</div>
</div>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>HTML</h5>
<h5 className='tool-experience'>Experience : 3 Years</h5>
</div>
<div>
<img alt='tool names' src={html}></img>
</div>
</div>
</div>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>CSS</h5>
<h5 className='tool-experience'>Experience : 3 Years</h5>
</div>
<div>
<img alt='tool names' src={css}></img>
</div>
</div>
</div>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>Figma</h5>
<h5 className='tool-experience'>Experience : 3 Years</h5>
</div>
<div>
<img alt='tool names' src={figma}></img>
</div>
</div>
</div>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>Bootstrap</h5>
<h5 className='tool-experience'>Experience : 3 Years</h5>
</div>
<div>
<img alt='tool names' src={bootstrap}></img>
</div>
</div>
</div>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>Adobe xd</h5>
<h5 className='tool-experience'>Experience : 1 Years</h5>
</div>
<div>
<img alt='tool names' src={xd}></img>
</div>
</div>
</div>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>Javascript</h5>
<h5 className='tool-experience'>Experience : 2 Years</h5>
</div>
<div>
<img alt='tool names' src={js}></img>
</div>
</div>
</div>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>SQL</h5>
<h5 className='tool-experience'>Experience : 1 Years</h5>
</div>
<div>
<img alt='tool names' src={sql}></img>
</div>
</div>
</div>

<div className='box-tools-main'>
<div className='flex-tools'>
<div>
<h5 className='tool-name'>Flutter</h5>
<h5 className='tool-experience'>Experience : 6 months</h5>
</div>
<div>
<img alt='tool names' src={flutter}></img>
</div>
</div>
</div>


</div>


</section>
)
}


export default tooling;