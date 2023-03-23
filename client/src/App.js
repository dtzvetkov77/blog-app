import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import "./components/topbar/topbar.css";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      {/* <Single/> */}
      <Write/>
    </div>
  );
}

export default App;
