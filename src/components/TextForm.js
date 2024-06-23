import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked");
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted to UPPERCASE","success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    console.log("Lower case was clicked");
    let newTxt = text.toLowerCase();
    setText(newTxt);
    props.showAlert("Converted to lowercase","success");
  };
  const clearTxt = () => {
    console.log("Text cleared");
    let newTxt = "";
    setText(newTxt);
    props.showAlert("Text cleared","success");
  };
  const copyTxt = () => {
    console.log("Text copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spsces removed","success");
  };
  const [text, setText] = useState("");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    bacgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  return (
    <>
      <div className="container" style={myStyle}>
        <h1  style={{ color: props.mode === "dark" ? "white" : "black" }} >{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          placeholder="Enter your text"
          style={{ backgroundColor: props.mode === "dark" ? "grey" : "white",color: props.mode === "dark" ? "white" : "black" }}
        ></textarea>
        <div className="btns container">
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            To UPPERCASE
          </button>
          <button
            className="btn btn-primary mx-5 my-3"
            onClick={handleLowClick}
          >
            To lowercase
          </button>
          <button className="btn btn-primary my-3" onClick={copyTxt}>
            Copy
          </button>
          <button
            className="btn btn-primary my-3 mx-5"
            onClick={handleExtraSpaces}
          >
            Remove extra spaces
          </button>
          <button className="btn btn-danger my-3" onClick={clearTxt}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3 " style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h2>Your text summary</h2>
        <p>
          {text.split(/\s+\n/).filter((el)=>{return el.length!==0}).length}words and {text.length} characters
        </p>
        <p>This text can be read in {0.008 * text.split(/\s+\n/).filter((el)=>{return el.length!==0}).length} minutes</p>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Output preview here"}</p>
      </div>
    </>
  );
}
