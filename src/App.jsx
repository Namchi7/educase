import { Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/landing-page" element={<LandingPage />} /> */}
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </div>
  );
}

export default App;
