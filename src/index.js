import React from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";

import Content from "./Content.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Create React Modal with 22 line of code </h1>
      <Popup modal trigger={<button>Click Me</button>}>
        {close => <Content close={close} />}
      </Popup>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
