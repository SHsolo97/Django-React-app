import React from "react"
import Heading from "./heading"
import SiteNav from "./sitenav"
import Filters from "./filters"
import Courses from "./courses"
import Sidebar from "./sidebar"
function Home(){
    return(
    <div className="containerHome">
        <Heading heading="BITS Learning Management System" />
        <SiteNav />
        <main className="main">
            <Heading heading="Active Courses" />
            <Courses type="active" />
            <Heading heading="Available Courses" />
            <Filters />
        </main>
        <Sidebar />
        </div>
    );
}
export default Home;