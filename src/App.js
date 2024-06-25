// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import Topbar from "./components/topbar/tobar";
// import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home/>
      
    </div>
  );
}

export default App;
