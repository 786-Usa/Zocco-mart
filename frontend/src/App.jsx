import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActivationPage from "./pages/ActivationPage";
function App() {
  return (
    <>
      <div>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<></>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/activate/:activationToken" element={<ActivationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
