import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    toast.success("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <header className="bg-primary-color p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <div>
          <Link to="/" className="text-lg font-semibold">
            홈
          </Link>
        </div>
        <div className="flex justify-end gap-20">
          {user ? (
            <>
              <Link to="/profile">프로필</Link>
              <Link to="/test">테스트</Link>
              <Link to="/results">결과</Link>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <button onClick={() => navigate("/login")}>로그인</button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
