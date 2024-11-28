import React, { useContext } from "react";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const { id, password } = formData;
      const data = await login({ id, password });
      if (data.success) {
        toast.success("로그인되었습니다.");
        setUser(data);
        navigate("/");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      error.message;
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="mt-4">
          <p className="text-gray-600">
            계정이 없으신가요?
            <Link className="text-primary-color hover:underline" to="/signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
