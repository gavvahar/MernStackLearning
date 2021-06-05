import logo from "./logo.svg";
import "./App.css";
import Text from "./Text";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text title="HEllo......" />
        <Text title="HEllo2" />
        <Text title="HEllo3" />
      </header>
    </div>
  );
}

export default App;
