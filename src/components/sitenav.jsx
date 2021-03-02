import React from "react"

function SiteNav(){
    return(
        <nav className="site-nav">
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Account</li>
                <li>Support</li>
                <li>About</li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    );
}
export default SiteNav;