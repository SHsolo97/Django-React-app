import React from "react"

function Sidebar(){
    return(
    <div className="sidebar">
        <div className="sidebar-top">
        <p>Spotlight</p>
    </div>

    <div className="sidebar-bottom">
        <small>Coming up</small>
        <div>
            <span>New Course </span>
            <br />
            <span>Starting - Jan 2020</span>
        </div>
        <a>
          <center> <button type="button" className="button1">Sign up</button></center>
        </a>
    </div>
    </div>
    );
}
export default Sidebar;