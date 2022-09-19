import "./App.css";
import Home from "./components/Home";
import Login from "./components/user/Login";
import Dashboard from "./components/user/DashBoard";
import Booking1 from "./components/Booking/Booking1";
import SideBar from "./components/Layout/Navbar/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />\
          <Route path="/booking" element={<Booking1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
