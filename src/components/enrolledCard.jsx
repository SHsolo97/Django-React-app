import React from "react"

function EnrolledCard(props){
    return(
        <div className="course-card">
              <div className="course-image">
                <img src={props.img} />
            </div>
            <div className="course-info">
                    <h5>{props.code} - {props.credits} credits</h5>
                    <h6>{props.name}</h6>
                    <p>{props.desc}</p>
            </div>
        </div>
    );
}
export default EnrolledCard;