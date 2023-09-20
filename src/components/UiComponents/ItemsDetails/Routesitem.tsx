import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RazerEdge from "../../Home/RazerEdge";
import BlackShark from "./BlackShark";

function App() {
  return (
    <Router>
      <Route path="/razer-edge" Component={RazerEdge} />
      <Route path="/blackshark" Component={BlackShark} />
    </Router>
  );
}

export default App;
