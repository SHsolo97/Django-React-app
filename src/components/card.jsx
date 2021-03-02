import React from "react"

function Card(props){
    return(
        <div className="course-card">
              <div className="course-image">
                <img src={props.img} />
            </div>
            <div className="course-info">
                    <h5>{props.code} - {props.credits} credits</h5>
                    <h6>{props.name}</h6>
                    <p>{props.desc}</p>
                    <p>Seats Remaining: {props.seats}</p>
            </div>
            <center> <button type="button" className="button1">Enroll</button></center>
        </div>
    );
}
export default Card;