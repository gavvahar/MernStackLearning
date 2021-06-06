import logo from "./logo.svg";
import "./App.css";
import Text from "./Text";
import TextContent from "./TextContent";
import UserComponent from "./basics";

import ComponentLifeCycle from "./component-lifecycle";
function App() {
  return (
    <div className="App">
      <Text title="HEllo......" />
      <TextContent title="My text content...." />
      <TextContent />
      <Text title="HEllo3" />
      <UserComponent />

      <ComponentLifeCycle />
    </div>
  );
}

export default App;
