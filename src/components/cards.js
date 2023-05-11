import React, { useState } from "react";
import Summary from "./summary";
const Cards = ({ name, image, language, rating, summary }) => {
  return (
    <div className="card col-md-3 m-3" style={{ width: "18rem" }}>
      <img
        src={image}
        style={{ height: "60%" }}
        className="card-img-top my-1"
        alt="img"
      />
      <div className="card-body  ">
        <h5 className="card-title">Movie :-{name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Language :-{language}</li>
          <li className="list-group-item">Rating :-{rating}</li>
        </ul>
        <button className="btn btn-primary">Read Summary</button>
      </div>
    </div>
  );
};

export default Cards;
