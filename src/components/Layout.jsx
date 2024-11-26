import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

const Layout = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    toast.success("로그아웃");
    navigate("/");
  };

  return (
    <div className="h-full bg-gray-100 flex flex-col justify-between">
      <header className="bg-primary-color p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center text-white">
          <Link to="/" className="text-lg font-semibold">
            홈
          </Link>
          <Link to="/profile">프로필</Link>
          <Link to="/test">테스트</Link>
          <Link to="/results">결과</Link>
          {user ? (
            <button onClick={handleLogout}>로그아웃</button>
          ) : (
            <button onClick={() => navigate("/login")}>로그인</button>
          )}
        </nav>
      </header>

      <main className="container mx-auto pt-10 main">
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;
