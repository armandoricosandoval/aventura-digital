import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./firebase/contexts/AuthContext";
import AppRputers from "./routers/AppRputers";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRputers />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
