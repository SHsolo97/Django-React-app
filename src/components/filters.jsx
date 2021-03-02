import React,{ useState } from "react"
import Courses from "./courses"
function Filters(){
    const [query,setQuery]=useState("")
    const [credits,setCredits]=useState("")
    function search(event){
        var q=event.target.value;
        return(setQuery(q))
    }
    function changeCredits(event){
        var c=event.target.value;
        return(setCredits(c)) 
    }
    return(
        <div className="Filters">
            <div> <input onChange={search} type="text" className="search" placeholder="Course Search" value={query} /> </div>
        <div className="Filteritem">
            <label>Credits:</label>
            <select id='credits' className='credits' onchange={changeCredits}>
                <option value="0">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <Courses type="available" query={query} credits={credits}/>
    </div>
    );
}
export default Filters;