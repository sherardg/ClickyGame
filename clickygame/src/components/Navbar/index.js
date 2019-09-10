import React from "react";

const Navbar = props => (
        
<nav class="navbar">
  <div class="container">
     <ul>
         <li class="brand">Clicky Game</li>
         <li>Click an image to begin!</li>
         <li>Status: {props.status}</li>
         <li>Score: {props.currentScore}</li>
         <li>Top Score: {props.topScore} </li>
     </ul>
 </div>
</nav>
    )

export default Navbar;