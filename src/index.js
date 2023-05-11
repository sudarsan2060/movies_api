import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Cards from "./components/cards";
import Summary from "./components/summary";
import BookTicket from "./components/booktkt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/Cards" component={Cards} />
      <Route exact path="/Summary" component={Summary} />
      <Route exact path="/bookTicket" component={BookTicket} />
    </Routes>
    <App />
  </BrowserRouter>
);
