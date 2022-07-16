import React ,{useState} from "react";

import '../styles.css';
import Headerr from "./headerr";
import Loading from "./loading";
import About from "./about";
import SectionSeprator from "./section-seprator";
import Services from "./services";
import Works from "./works";
import Contact from "./contact";
import Footer from "./footer";
import UpBtn from "./up-btn";
import Menu from "./menu";


function App(){

  window.onscroll = function () {
    if (window.pageYOffset >= 90) {
        document.querySelector('.up-btn').classList.add('active');
    } else {
        document.querySelector('.up-btn').classList.remove('active');
    }
  }

  const [readyFlag , setReadyFlag]  = useState(true);

  setTimeout(()=>{
    setReadyFlag(false)
    } , window.addEventListener('load', ()=>{}));
    
    return(
      <div>
        <Loading active={readyFlag}/>
        <Menu />
        <div class={"app" + (!readyFlag ? ' active' : '')}>
          <Headerr />
          <main>
            <UpBtn />
            <SectionSeprator src={require("../images/sun.png")}/>
            <About />
            <SectionSeprator src={require("../images/Moon.png")}/>
            <Services />
            <SectionSeprator src={require("../images/Cloud.png")}/>
            <Works />
            <SectionSeprator src={require("../images/sun-cloud.png")}/>
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    )
}

export default App;