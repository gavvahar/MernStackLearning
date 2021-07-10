import React from "react";
import styles from "./myStyles.module.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.mystyle}>Ford</h1>
        <p className={styles.parastyle}>Mustang Shelby GT500 Super Snake</p>
      </div>
    );
  }
}
export default App;
