import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
//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
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              window.localStorage.getItem("number") === null ? (
                <Login />
              ) : (
                <Home />
              )
            }
          />

          <Route path="/home" element={<Home />} />
          <Route path="/signout" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
