import React from "react";

const CounterContext = React.createContext(0);

const ParentComponent = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => setCounter(counter + 1);

  return (
    <CounterContext.Provider value={{ counter, increment }}>
      <DisplayCounterComponent />
      <IncrementCounterComponent />
    </CounterContext.Provider>
  );
};

const DisplayCounterComponent = () => {
  // const { counter } = React.useContext(CounterContext);
  console.log("DisplayCounterComponent --------------");
  return (
    <CounterContext.Consumer>
      {(value) => <div>{value.counter}</div>}
    </CounterContext.Consumer>
  );
};

const IncrementCounterComponent = () => {
  const { increment } = React.useContext(CounterContext);
  console.log("IncrementCounterComponent --------------");

  return (
    <div>
      <button onClick={() => increment()}>increment</button>
    </div>
  );
};

export default ParentComponent;