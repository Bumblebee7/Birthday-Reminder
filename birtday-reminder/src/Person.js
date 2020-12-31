import React from "react";
import "./Person.css";

const Person = ({ id, name, birthday }) => {
  let today = new Date();
  let currentYear = today.getFullYear();
  let yearOfBirth = birthday.slice(0, 4);
  let age = currentYear - yearOfBirth;

  return (
    <div className="gridContainer">
      <img
        src="https://cdn.pixabay.com/photo/2018/01/15/14/07/background-3084012_1280.jpg"
        alt="Portrait"
      ></img>
      <div>
        <h2>{name}</h2>
        <p>{age} Years</p>
      </div>
    </div>
  );
};

export default Person;
