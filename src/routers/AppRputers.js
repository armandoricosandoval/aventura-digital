import React from "react";
import { Route, Routes } from "react-router-dom";
import ConsultItem from "../pages/ConsultItem";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import HomeAnventure from "../pages/HomeAventure";
import Login from "../pages/Login";
import Navbars from "../pages/Navbars";
import NotFoundPage from "../pages/NotPages";
import Perfil from "../pages/Perfil";
import Signup from "../pages/Signup";


const AppRputers = () => {
  return (
    <>
      <Navbars />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/home" element={<HomeAnventure />} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/item/:id" element={<ConsultItem />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
};

export default AppRputers;
