import React from "react";
import Person from "./Person";
import "./Persons.css";
import { data } from "./data";

function Persons() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

  today = mm + "-" + dd;
  let todaysBirthday = data.filter(
    (person) => person.birthday.slice(5, 10) === today
  );

  return (
    <main>
      <section className="personsContainer">
        {todaysBirthday.map((person) => {
          return <Person {...person}></Person>;
        })}
        <input type="date" id="dateField"></input>
        <button type="button" className="btn">
          Change Date
        </button>
      </section>
    </main>
  );
}

export default Persons;
