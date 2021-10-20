import App from "./App";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React, { Component, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";

function Favourites({ props }) {
  console.log(props);
  return (
    <div className="App">
      {props &&
        props.map((data) => {
          <div className="full-card">
            <div className="card">
              <img src={data[1]} />

              {data[0]}
            </div>
          </div>;
        })}
    </div>
  );
}

export default Favourites;
