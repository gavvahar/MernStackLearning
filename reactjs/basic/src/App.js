import "./App.css";
import ComponentLifeCycle from "./component-lifecycle";
import Controlled from "./forms/Controlled";
import CouterApp from "./hooks/CountApp";
import ParentComponent from "./context";
import StyledComponent from "./react-css/StyledComponent";

function App() {
  return (
    <div className="App">
      {/* <ComponentLifeCycle />
      <Controlled />
      <CouterApp /> */}
      {/* <ParentComponent /> */}
      <StyledComponent />
    </div>
  );
}

export default App;
