import React from "react";
import styles from "./LunchAndLearn.module.scss";

type ParticipantsType = {
  id: number;
  name: string;
  topic: string;
};

const LunchAndLearn = () => {
  const participants: Array<ParticipantsType> = [
    { id: 0, name: "Rafael Cardenas", topic: "Web Scraping With Python" },
    { id: 1, name: "Daniel Vergara", topic: "Develop Pros And APi In Golang" },
    {
      id: 2,
      name: "Andres Felipe",
      topic: "An Overview Of The JavaScript V8 Engine",
    },
    {
      id: 3,
      name: "Fernando Sanchez",
      topic: "Object Orientes Programming And Vue.Js",
    },
    { id: 4, name: "Felipe Ospina", topic: "" },
    {
      id: 5,
      name: "Gabriel Santana",
      topic: "Unit Testing Node.js: A Practical Guide",
    },
    { id: 6, name: "Thiago Sa", topic: "" },
    { id: 7, name: "Sebastian Gomez", topic: "React Basics" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.participants}>
        <h2 className={styles.title}>Participants - Topics</h2>
        <hr className={styles.line} />
        <ul className={styles.list}>
          {participants.map((participant) => (
            <li key={participant.id} className={styles.participant}>
              {participant.name} - <span>{participant.topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LunchAndLearn;
