import React from 'react'

function TenthStudent(props) {
    console.log(`Creating TenthStudent copy`)
  return (
    <div className="student">
      <h1>Student Name:{props.name}</h1>
      <h2>English:{props.engMarks}</h2>
      <h2>Telugu:{props.telMarks}</h2>
      <h2>Maths:{props.matMarks}</h2>
      <h2>Hindi:{props.hinMarks}</h2>
      <h2>Science:{props.sciMarks}</h2>
      <h2>Social:{props.socMarks}</h2>
      
      
    </div>
  )
}

export default TenthStudent;
