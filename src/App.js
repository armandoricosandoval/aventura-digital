import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from "./firebase/contexts/AuthContext";
import AppRputers from "./routers/AppRputers";

const App = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <AppRputers />
      </AuthProvider>
    </HashRouter>
  );
};

export default App;
