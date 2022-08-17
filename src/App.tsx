import React from "react";
import RightLayout from "./components/RightLayout";
import LeftLayout from "./components/LeftLayout";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <LeftLayout />
      <RightLayout />
    </div>
  );
}

export default App;
