import React from "react";
import styles from "./LeftLayout.module.scss";
import pizzaImage from "assets/pizza.jpg";
import agileLogo from "assets/rocket-ae.svg";

const LeftLayout = () => {
  return (
    <section className={styles.left}>
      <img className={styles.agileLogo} src={agileLogo} alt="agile engine" />
      <div className={styles.container}>
        <img className={styles.pizza} src={pizzaImage} alt="pizza" />
        <h1 className={styles.title}>{"Lunch & Learn"}</h1>
      </div>
    </section>
  );
};

export default LeftLayout;
