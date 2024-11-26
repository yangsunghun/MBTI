import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  //로그인 했는지 체크
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>보호된 페이지</h1>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
