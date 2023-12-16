import React from "react";
import { Route, Routes } from "react-router-dom";
import ConsultItem from "../components/ConsultItem";
import ForgotPassword from "../components/ForgotPassword";
import Home from "../components/Home";
import ListAll from "../components/ListAll";
import ListPostAll from "../components/ListPostAll";
import Login from "../components/Login";
import Navbars from "../components/Navbars";
import NotFoundPage from "../components/NotPages";
import Signup from "../components/Signup";

const AppRputers = () => {
  return (
    <>
      <Navbars />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/ListAll" element={<ListAll />} />
        <Route exact path="/ListPostAll" element={<ListPostAll />} />
        <Route exact path="/item/:id" element={<ConsultItem />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
};

export default AppRputers;
