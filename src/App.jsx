import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Router from "./shared/Router";
import UserProvider from "./components/UserProvider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <UserProvider>
        <Router />
      </UserProvider>
      <ToastContainer />
    </>
  );
};

export default App;
