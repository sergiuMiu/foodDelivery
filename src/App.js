import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/index";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
