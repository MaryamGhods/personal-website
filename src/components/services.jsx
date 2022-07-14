import React from "react";

function Services(){
    return(
        <div class="services" id="services" >
            <h1 class="heading1">خدمات من</h1>
            <div class="service-collection">
                <div class="service">
                    <div class="service-body">
                        <h3 class="service-heading">آموزش برنامه نویسی</h3>
                        <img src={require("../images/teaching.png")} alt="" />
                    </div>
                </div>
                <div class="service">
                    <div class="service-body">
                        <h3 class="service-heading">طراحی وبسایت</h3>
                        <img src={require("../images/designing.png")} alt="" />
                    </div>
                </div>
                <div class="service">
                    <div class="service-body">
                        <h3 class="service-heading">توسعه وبسایت</h3>
                        <img src={require("../images/coding.png")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;