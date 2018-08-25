import React from "react";
import ReactDOM from "react-dom";
import StaticTimer from "./StaticTimer";

const App = () => {
  return (
    <div>
      <StaticTimer ms={125842553} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
