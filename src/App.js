import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
