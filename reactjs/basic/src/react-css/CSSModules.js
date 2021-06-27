import React from "react";
import styles from "./myStyles.module.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.mystyle}>Hello MERN stack</h1>
        <p className={styles.parastyle}>practice makes you perfect.</p>
      </div>
    );
  }
}
export default App;
