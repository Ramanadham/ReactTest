import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>    
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
  </React.StrictMode>,
  rootElement
);
