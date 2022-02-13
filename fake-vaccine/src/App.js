import styled from "@emotion/styled";
import Vaccine from "./Vaccine/Vaccine";
import UserForm from "./UserForm/UserForm";
import QR from "./QR/QR";
import { Routes, Router, Link, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const App = () => (
  <div className="App">
    <div>HELL IN THIS WORLD</div>
    {window.location.pathname === "/qr" ? "" : <NavBar />}
    <Routes>
      <Route path="/vaccine" element={<Vaccine />} />
      <Route path="/userform" element={<UserForm />} />
      <Route path="/qr" element={<QR />} />
    </Routes>
  </div>
);

export default App;
