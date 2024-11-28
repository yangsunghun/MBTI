import React, { useState, useContext } from "react";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateProfile({ nickname }, user.accessToken);
      if (data.success) {
        toast.success("프로필 수정되었습니다.");
        setUser({ ...user, nickname, avatar: data.avatar });
        navigate("/");
      }
    } catch {
      alert("프로필수정에 실패했습니다.", error.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6">
          프로필 수정
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              닉네임
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-primary-color"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
