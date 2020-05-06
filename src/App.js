import React from "react";
import "./App.css";
import $ from "jquery";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class App extends React.Component {
  setMovement(e) {
    var p = { x: e.movementX, y: e.movementY },
      mPos = { x: e.screenX, y: e.screenY },
      x = mPos.x - p.x - 100,
      y = mPos.y - p.y - 100;
    console.log(x, y);

    $(".moon").css({
      left: x,
      top: y,
      backgroundPosition: -x + "px " + -y + "px",
    });
  }
  render() {
    return (
      <div className="App" onMouseMove={(e) => this.setMovement(e)}>
        <div className="moon"></div>
      </div>
    );
  }
}

export default App;
