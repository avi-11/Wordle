import React from "react";

const Keypad = ({ handleKeyUp, usedKeys, turn, isCorrect }) => {
  const handle = (l) => {
    let obj = { key: l };
    if (isCorrect) {
      return console.log("you win");
    }
    if (turn > 5) {
      return console.log("out of turns");
    }
    handleKeyUp(obj);
  };
  return (
    <div className="keypad">
      <div className="text-sm" onClick={(e) => handle("Enter")}>
        Enter
      </div>
      {"ABCDEFGHIJKLMNOPQRSTUVXYZ".split("").map((l) => {
        const color = usedKeys[l];
        return (
          <div key={l} className={color} onClick={(e) => handle(l)}>
            {l}
          </div>
        );
      })}
      <div onClick={(e) => handle("Backspace")}>Del</div>
    </div>
  );
};

export default Keypad;
