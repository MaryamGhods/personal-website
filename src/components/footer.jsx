import React from "react";

function Footer(){
    return(
        <footer>
            <img src={require("../images/flower.png")} alt="" />
            <div class="text">
                <p>ساخته شده توسط <span>Maryam Web</span></p>
                <p>تمام حقوق وبسایت محفوظ است.</p>
            </div>
        </footer>
    )
}
export default Footer;