import React , {useState} from "react";
function handleIconMenuClick(){
    document.querySelector(".menu").classList.add("active");
    document.querySelector(".app").classList.remove("active");
}

function Headerr() {
    const [readyFlag , setReadyFlag]  = useState(true);

    setTimeout(()=>{
      setReadyFlag(false)
      } , 1000);
  
    return (
        <header>
            <div class={"header" + (!readyFlag ? ' fade-in' : '')}  id="header">
                <nav>
                    <div class="brand">
                        Maryam Web
                    </div>
                    <div class="items">
                        <ul>
                            <li><a href="#about">
                                درباره ی من
                                <span class="iconify" data-icon="akar-icons:chevron-left" data-width="24" data-height="24"></span>                           
                            </a></li>
                            <li><a href="#services">
                                خدمات من
                                <span class="iconify" data-icon="akar-icons:chevron-left" data-width="24" data-height="24"></span>                           
                            </a></li>
                            <li><a href="#works">
                                نمونه کارها
                                <span class="iconify" data-icon="akar-icons:chevron-left" data-width="24" data-height="24"></span>                           
                            </a></li>
                            <li><a href="#contact">
                                ارتباط با من
                                <span class="iconify" data-icon="akar-icons:chevron-left" data-width="24" data-height="24"></span>                           
                            </a></li>
                        </ul>
                    </div>
                    <button class="menu-icon" onClick={handleIconMenuClick}>
                        <span></span>
                    </button>
                </nav>
                <div class="image"> 
                    <img src={require("../images/laptop1.png")} alt="" />
                </div>
                <div class="wellcome">
                    <div class="circle"></div>
                    <p class="small-text">سلام👋</p>
                    <p class="large-text">من <span>مریم</span> هستم.</p>
                    <p class="small-text">طراح و توسعه دهنده وبسایت💻</p>
                    <img src={require("../images/Watercolor-rb.png")} alt=""></img>
                </div>
            </div>
        </header>
  );
}

export default Headerr;