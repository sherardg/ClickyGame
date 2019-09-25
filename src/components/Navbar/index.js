import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Navbar(props) {
    return (
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <NavMessage score={props.score} topScore={props.topScore} />
          <li>
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
    );
  }
  
  

// const Navbar = props => (
        
// <nav class="navbar">
//   <div class="container">
//      <ul>
//          <li class="brand">Clicky Game</li>
//          <li>Click an image to begin!</li>
//          <li>Status: {props.status}</li>
//          <li>Score: {props.currentScore}</li>
//          <li>Top Score: {props.topScore} </li>
//      </ul>
//  </div>
// </nav>
//     )

export default Navbar;