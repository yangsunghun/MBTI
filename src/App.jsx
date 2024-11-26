import React from "react";
import Router from "./shared/Router";
import UserProvider from "./components/UserProvider";

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};

export default App;
