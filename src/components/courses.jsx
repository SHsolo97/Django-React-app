import React from "react"
import Card from "./card"
import EnrolledCard from "./enrolledCard"
import courses from "../subject"


function createEnrollCard(course) {
  return (
    <EnrolledCard
      key={course.sid}
      code={course.ccode}
      name={course.ctitle}
      img={course.imageUrl}
      credits={course.credits}
      desc={course.cdescription}
    />
  );
}

function createCard(course) {
    return (
      <Card
        key={course.sid}
        code={course.ccode}
        name={course.ctitle}
        img={course.imageUrl}
        credits={course.credits}
        desc={course.cdescription}
        seats={course.seatsRemaining}
      />
    );
  }



function Courses(props){

  const availableCourses = courses.filter( courses =>{
  return (courses.ctitle.toLowerCase().includes(props.query) && courses.seatsRemaining==60)
  } )
  const activeCourses = courses.filter( courses =>{
    return (courses.seatsRemaining!=60)
    } )
    if(props.type=="available"){
    return(
        <section className="Courses">
                { availableCourses.map(createCard) }
            </section>
    );
  }
    else{
      return(
        <section className="Courses">
            <p>Total Credits: 4</p>
                { activeCourses.map(createEnrollCard) }
            </section>
      );
    }
}

export default Courses;