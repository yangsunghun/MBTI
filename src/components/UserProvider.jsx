import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    return data;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
