import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";

if (process.env.REACT_APP_MOCK) {
  console.log("========================================");
  console.log("=============== MED MOCK ===============");
  console.log("===DETTE SKAL DU IKKE SE I PRODUKSJON===");
  console.log("========================================");
  require("./mock/pamMock");
  require("./mock/syfoMock");
  require("./mock/arbeidstreningMock");
  require("./mock/altinnMock");
  require("./mock/unleashMock");
  //require("./mock/veilarbMock");
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
