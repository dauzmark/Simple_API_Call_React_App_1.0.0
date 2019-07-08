import React from "react";
import ReactDOM from "react-dom";
//
import Comments from "../public/Component/Comments";

import "./styles.css";

function App() {
  return (
    <div>
      <Comments />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
