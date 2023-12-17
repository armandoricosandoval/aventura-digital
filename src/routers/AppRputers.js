import React from "react";
import { Route, Routes } from "react-router-dom";
import ConsultItem from "../pages/ConsultItem";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import ListAll from "../pages/ListAll";
import ListPostAll from "../pages/ListPostAll";
import Navbars from "../pages/Navbars";
import NotFoundPage from "../pages/NotPages";


const AppRputers = () => {
  return (
    <>
      <Navbars />
      <Routes>
        <Route exact path="/" element={<Home />} />
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
