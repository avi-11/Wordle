import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

const Wordle = ({ solution }) => {
  const [showModal, setShowModal] = useState(false);
  const { currentGuess, handleKeyUp, usedKeys, guesses, isCorrect, turn } =
    useWordle(solution);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div>
      <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
      <Keypad
        handleKeyUp={handleKeyUp}
        usedKeys={usedKeys}
        turn={turn}
        isCorrect={isCorrect}
      />
      {showModal && (
        <Modal isCorrect={isCorrect} solution={solution} turn={turn} />
      )}
    </div>
  );
};

export default Wordle;
