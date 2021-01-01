import React from "react";
import "./Person.css";

const Person = ({ id, name, birthday, image }) => {
  let today = new Date();
  let currentYear = today.getFullYear();
  let yearOfBirth = birthday.slice(0, 4);
  let age = currentYear - yearOfBirth;

  return (
    <div className="gridContainer">
      <img src={image} alt="Portrait"></img>
      <div>
        <h2>{name}</h2>
        <p>{age} Years</p>
      </div>
    </div>
  );
};

export default Person;
