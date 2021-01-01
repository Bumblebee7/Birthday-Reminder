import React, { useState } from "react";
import Person from "./Person";
import "./Persons.css";
import { data } from "./data";

function Persons() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let todayDDMM = mm + "-" + dd;

  const [personsList, setPersonsList] = useState(data);
  let todaysBirthday = personsList.filter(
    (person) => person.birthday.slice(5, 10) === todayDDMM
  );

  return (
    <main>
      <section className="personsContainer">
        <h3>{todaysBirthday.length} Birthdays today</h3>

        {todaysBirthday.map((person) => {
          return <Person {...person}></Person>;
        })}
        <button
          type="button"
          className="btn"
          onClick={() => setPersonsList([])}
        >
          Delete all Entries!
        </button>
      </section>
    </main>
  );
}

export default Persons;
