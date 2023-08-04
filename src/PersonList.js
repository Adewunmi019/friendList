 import React from "react";
 import Person from "./Person";


 const PersonList = () => {
  const people = [
    {
      img: 34,
      name: "facelessDev",
      job: "Developer",
    },
    {
      img: 44,
      name: "izy gabs",
      job: "Designer",
    },
    {
      img: 64,
      name: "Anonu",
      job: "the boss",
    },
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus in
        sint delectus nostrum, eaque sapiente!
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

export default PersonList;
