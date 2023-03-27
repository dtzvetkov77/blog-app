import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import "./components/topbar/topbar.css";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <>
      <TopBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
      <Route path="/login"  element={user ? <Navigate to="/"/> : <Login/>}/>
      <Route path="/write"  element={user ? <Write/> : <Navigate to="/login"/> } />
      <Route path="/settings"  element={user ? <Settings/> : <Navigate to="/login"/> } />
      <Route path='/post/:postId' element={<Single/>} />
    </Routes>
    </>
    
    
  );
}

export default App;
