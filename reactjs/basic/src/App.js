import "./App.css";
import ComponentLifeCycle from "./component-lifecycle";
import Controlled from "./forms/Controlled";
import CouterApp from "./hooks/CountApp";
import ParentComponent from "./context";

function App() {
  return (
    <div className="App">
      {/* <ComponentLifeCycle />
      <Controlled />
      <CouterApp /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
