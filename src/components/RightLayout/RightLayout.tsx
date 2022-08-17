import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./RightLayout.module.scss";

const RightLayout = () => {
  return (
    <section className={styles.right}>
      <Outlet />
    </section>
  );
};

export default RightLayout;
