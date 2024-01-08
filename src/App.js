import React from "react";
import "./app.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
import Login from "./pages/login/Login";
import { ContextProvider } from "./components/Auth/Auth";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gig/:id" element={<Gig />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/mygigs" element={<MyGigs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:id" element={<Message />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
