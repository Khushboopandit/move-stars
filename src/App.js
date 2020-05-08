import React from "react";
import "./App.css";
import $ from "jquery";

var class_to_move = ".moon";
class App extends React.Component {
  setMovement(e) {
    var p = { x: e.movementX, y: e.movementY },
      mPos = { x: e.screenX, y: e.screenY },
      x = mPos.x - p.x - 100,
      y = mPos.y - p.y - 80;
    console.log(x, y);

    $(class_to_move).css({
      left: x,
      top: y,
    });
  }

  render() {
    return (
      <div className="App" onMouseMove={(e) => this.setMovement(e)}>
        <div className="outer-div" onClick={() => (class_to_move = "")}></div>
        <h3 className="heading">Set postion of moon and star by one click.</h3>
        <div className="moon" onClick={() => (class_to_move = ".moon")}></div>
        {new Array(30).fill().map((_, i) => {
          return (
            <img
              onClick={() => (class_to_move = ".star" + i)}
              className={"star" + i}
              src="https://www.nicepng.com/png/full/38-388189_star-transparent-circle.png"
              style={{
                width: Math.floor(Math.random() * 8) + "rem",
                top: Math.floor(Math.random() * 400) + "px",
                left: Math.floor(Math.random() * 1196) + "px",
                position: "absolute",
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
