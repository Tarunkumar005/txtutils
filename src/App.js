import "./App.css";
import React, { useState } from "react";
// import About from "./About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#081E64";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Home(Dark)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Home(Light)";
    }
  };
  return (
    // <Router>
    //   <Navbar
    //     title="Tarun"
    //     about="About Us"
    //     contact="Contact Us"
    //     mode={mode}
    //     toggleMode={toggleMode}
    //   />
    //   <Alert alert={alert} />
    //   <div className="container">
    //   <Routes>
    //       <Route exact path="/about" element={<About/>}></Route>
    //       <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter your text'mode={mode}/>}></Route>
    //   </Routes>
    //   </div>
    //   </Router>
    <>
      <Navbar
      title="Tarun"
      about="About Us"
      contact="Contact Us"
      mode={mode}
      toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading='Enter your text'mode={mode}/>
      </>
  );
}

export default App;
