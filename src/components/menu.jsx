import React from "react";
function handleMenuItemClick(){
    document.querySelector(".menu").classList.remove("active");
    document.querySelector(".app").classList.add("active");
}
function Menu(){
    return(
        <div class="menu">
            <div class="menu-body">
                <button class="close-btn" onClick={handleMenuItemClick}>
                </button>
                <ul>
                    <li><a href="#header" onClick={handleMenuItemClick}>
                    خانه        
                    </a></li>
                    <li><a href="#about" onClick={handleMenuItemClick}>
                        درباره ی من
                    </a></li>
                    <li><a href="#services" onClick={handleMenuItemClick}>
                        خدمات من
                    </a></li>
                    <li><a href="#works" onClick={handleMenuItemClick}>
                        نمونه کارها
                    </a></li>
                    <li><a href="#contact" onClick={handleMenuItemClick}>
                        ارتباط با من
                    </a></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;