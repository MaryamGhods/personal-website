import React from "react";

function Loading(prop){

    return(
        <div className={"loading-page" + (prop.active ? '.active' : '') } dir="ltr">
            <div class="letter-collections">
                <span style={{"--i":"1"}}>l</span>
                <span style={{"--i":"2"}}>o</span>
                <span style={{"--i":"3"}}>a</span>
                <span style={{"--i":"4"}}>d</span>
                <span style={{"--i":"5"}}>i</span>
                <span style={{"--i":"6"}}>n</span>
                <span style={{"--i":"7"}}>g</span>
            </div>

            <div class="rect-collections">
                <div class="rect" style={{"--j":"1"}}></div>
                <div class="rect" style={{"--j":"2"}}></div>
                <div class="rect" style={{"--j":"3"}}></div>
                <div class="rect" style={{"--j":"4"}}></div>
                <div class="rect" style={{"--j":"5"}}></div>
                <div class="rect" style={{"--j":"6"}}></div>
                <div class="rect" style={{"--j":"7"}}></div>
            </div>
        </div>
    )
}
export default Loading;