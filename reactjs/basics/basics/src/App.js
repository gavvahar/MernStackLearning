import logo from "./logo.svg";
import "./App.css";
import Text from "./Text";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Text>
          Edit <code>src/App.js</code> and save to reload.
        </Text>
      </header>
    </div>
  );
};

export default App;
