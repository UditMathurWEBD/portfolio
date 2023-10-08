import './App.css';
import Header from './header/header';
import Landing from './landing_text/landing_text';
import Project from './project/project';
import Tooling from './tooling/tooling';
import Aboutme from './aboutme/aboutme';
import Frontend from './frontend/frontend';
import Appdevelop from './appdevelopment/appdevelop';
import FrontendProject from './frproject/frproject';

function App() {
  return (
    <div className="App">
      <section  className='landing-bg'>
      <Landing></Landing>
      <Project></Project>
      </section>
      <br></br>   <br></br>
      <Header></Header>


      <Appdevelop></Appdevelop>
      <Tooling></Tooling>
     <FrontendProject></FrontendProject>
     <br></br>   <br></br>
     <Frontend></Frontend>
 
     

   
    </div>
  );
}

export default App;
