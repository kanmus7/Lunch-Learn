import React from "react";
import styles from "./LunchAndLearn.module.scss";

type ParticipantsType = {
  id: number;
  name: string;
  topic: string;
  url?: string;
};

const LunchAndLearn = () => {
  const participants: Array<ParticipantsType> = [
    {
      id: 0,
      name: "Rafael Cardenas",
      topic: "Web Scraping With Python",
      url: "https://docs.google.com/document/d/1JjXYsV4MuRXYVBR_-JKxiPl-Oe3iDavjSqd2sy4NG_w/edit",
    },
    {
      id: 1,
      name: "Daniel Vergara",
      topic: "Develop Pros And APi In Golang",
      url: "https://docs.google.com/document/d/1-EsO79Gnsmjnm9VWaoM5RFJB8zevNpv5e2DrH052QNM/edit",
    },
    {
      id: 2,
      name: "Andres Felipe",
      topic: "An Overview Of The JavaScript V8 Engine",
      url: "https://docs.google.com/presentation/d/15mywKrXTPPAiltbMvEJLtS97o6WHP0R_/edit#slide=id.p1",
    },
    {
      id: 3,
      name: "Fernando Sanchez",
      topic: "Object Orientes Programming And Vue.Js",
      url: "https://docs.google.com/presentation/d/1SS4_-GAT-OYI07NyqMBOet7romh6-axRlqQOTe76oLQ/edit?pli=1#slide=id.gc6f90357f_0_0",
    },
    {
      id: 4,
      name: "Felipe Ospina",
      topic: "You Don't Know JS",
      url: "https://docs.google.com/presentation/d/1NbIDh_kB9nLKjll0Zv6cVB9kh5K9Ce2PbXxvkRR_5tA/edit#slide=id.p",
    },
    {
      id: 5,
      name: "Gabriel Santana",
      topic: "Unit Testing Node.js: A Practical Guide",
      url: "https://docs.google.com/presentation/d/1SmcC1ftxMpZEy1fDazUT5peG3-RVnQLXqwwncvnxvPY/edit#slide=id.g35f391192_00",
    },
    {
      id: 6,
      name: "Thiago Sa",
      topic:
        "AWS - The Cloud: Running Node functions on a Serverless Stack with Gateway API and Lambdas",
      url: "https://docs.google.com/presentation/d/17yhs0meJuOxF_bRevF4z-bHoCrhM7BRyHt1pbrybN-4/edit",
    },
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
              <span>{participant.name}</span> -
              <div className={styles.topic}>
                <a
                  className={styles.link}
                  href={participant.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{participant.topic}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LunchAndLearn;
