import logo from "./logo.svg";
import "./App.css";
import Text from "./Text";
import Car from "./Car";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo"  size="50"/> 
        <Text title="HEllo......" />
        <Text title="HEllo2" />
       </header>
      <p>
        <Car year="1967"  make="Ford" model="Shelby GT500" />
      </p>
    </div>
  );
}

export default App;
