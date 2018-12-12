import React, { Component } from "react";
import ReactDOM from "react-dom";

import Search from "./components/Search.jsx";

const App = () => {
  return (
    <div>
      <h1>Taxonomy Tool</h1>
      <Search />
    </div>
  )
}

export default App;

ReactDOM.render(<App/>, document.getElementById("app"));
