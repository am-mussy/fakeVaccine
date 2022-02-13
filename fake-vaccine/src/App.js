import styled from "@emotion/styled";
import Vaccine from "./Vaccine/Vaccine";
import UserForm from "./UserForm/UserForm";
import QR from "./QR/QR";
import { Routes, Router, Link, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/vaccine" element={<Vaccine />} />
      <Route path="/" element={<UserForm />} />
      <Route path="/qr" element={<QR />} />
    </Routes>
  </div>
);

export default App;
