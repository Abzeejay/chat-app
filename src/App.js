import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./component/SetAvatar";
import Chat from "./page/Chat";
import Login from "./page/Login";
import Register from "./page/Register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
