import React from "react";
import styles from "./myStyles.module.css";

class App extends React.Component {
  render() {
    const mystyle = {
      color: "Green",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 className={styles.mystyle}>Hello MERN stack</h1>
        <p style={{ backgroundColor: "red" }}>Sample text...</p>
      </div>
    );
  }
}
export default App;
