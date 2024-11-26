import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full bg-gray-100 flex flex-col justify-between">
      <header className="bg-primary-color p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center text-white">
          <Link to="/" className="text-lg font-semibold">
            홈
          </Link>
          <Link to="/profile">프로필</Link>
          <Link to="/test">테스트</Link>
          <Link to="/result">결과</Link>
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
