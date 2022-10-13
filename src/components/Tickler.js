import React from "react";

function Tickler() {
  function tickle(event) {
    console.log("Ive been Tickled");
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
