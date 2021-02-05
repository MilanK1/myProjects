import React from "react"
import { NavLink } from "react-router-dom";
import "./content.css";
export default function Content() {
    return (
      <div className="container">


      <NavLink className="NavLink" to="/Page1">PageOne</NavLink>
      <br/>
    <NavLink className="NavLink"  to="/Page2">PageTwo</NavLink>
    <NavLink className="NavLink" to="Projects">Projects</NavLink>


      </div>
    );
  }
