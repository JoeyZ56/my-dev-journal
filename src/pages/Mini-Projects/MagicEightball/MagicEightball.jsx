import { useState } from "react";
import "./styles.scss";

const MagicEightball = () => {
  const [eightball, setEightball] = useState("");
  const [resetInput, setResetInput] = useState("");

  const predictions = () => {
    const num = Math.floor(Math.random() * 8);

    if (num === 0) {
      return "Its possible, but im to tired to tell..";
    } else if (num === 1) {
      return "Are you really asking this again?";
    } else if (num === 2) {
      return "Sure... i guess.. yea why not!";
    } else if (num === 3) {
      return "*signs*... You know i can not answer that!";
    } else if (num === 4) {
      return "Have you tried to ask Chat GPT?";
    } else if (num === 5) {
      return "Oh deffinitly! Its gunna happen!";
    } else if (num === 6) {
      return "Haha.. what a weird question..";
    } else if (num === 7) {
      return "Ask me later.. Im watching my Tik Toks right now..";
    }
  };

  const handlePredictionBtn = (e) => {
    e.preventDefault();
    if (resetInput.trim() === "") {
      return setEightball(
        <h1 style={{ color: "red" }}>Please make a request!</h1>
      );
    } else {
      setEightball(predictions());
    }
  };

  const handleInputChange = (e) => {
    setResetInput(e.target.value);
  };

  const handleResetInput = () => {
    setResetInput("");
    setEightball("");
  };

  const handleBackBtn = () => {
    window.history.back();
  };

  return (
    <>
      <div>
        <button onClick={handleBackBtn} className="back-btn">
          Back
        </button>
      </div>
      <div className="eightball-main-container">
        <div className="eightball-title">
          {" "}
          <h1>Magic Eightball</h1>
        </div>
        <div className="eightball-container">
          <h1>{eightball}</h1>
          <input type="text" value={resetInput} onChange={handleInputChange} />
          <button onClick={handlePredictionBtn}>Get your prediction!</button>
          <button onClick={handleResetInput}>reset</button>
        </div>
      </div>
    </>
  );
};

export default MagicEightball;
