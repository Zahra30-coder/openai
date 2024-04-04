import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "./component/Sidebar";
import ChatWindow from "./component/ChatWindow";

function App() {
  const [state,clearState]=useState(0);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="border-end">
            <Sidebar clearState={clearState} /> 
          </div>
        </div>

        <div className="col-md-9">
          <ChatWindow state={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
