import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import "./components/topbar/topbar.css";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <TopBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/write" element={<Write/>} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
    </>
    
    
  );
}

export default App;
