import { useContext, useState } from "react";
import {
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

const TestResultItem = ({ result, updateVisibility, deleteTestResultById }) => {
  const { user } = useContext(UserContext);
  const currentUserId = user ? user.userId : null;
  const { id, userid, username, mbti, description, createdAt, visibility } =
    result;

  const [loading, setLoading] = useState(false);

  const handleVisibilityToggle = async () => {
    setLoading(true);
    try {
      const newVisibility = !visibility;
      await updateTestResultVisibility(id, newVisibility);
      updateVisibility(id, newVisibility);
      toast.success(
        `${newVisibility ? "공개됨" : "비공개됨"}으로 변경되었습니다.`
      );
    } catch (error) {
      console.error("공개 업데이트 오류:", error);
      toast.error("공개 업데이트 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteTestResult(id);
      deleteTestResultById(id);
      toast.success("테스트 결과가 삭제되었습니다.");
    } catch (error) {
      console.error(
        "삭제 오류:",
        error.response ? error.response.data : error.message
      );
      toast.error("삭제 중 오류가 발생했습니다."); // 오류 메시지
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  return (
    <li className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
        <h4 className="text-xl font-semibold">{username}</h4>
        <p className="text-sm text-gray-400">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>
      <p className="text-2xl font-bold text-yellow-400 mb-4">{mbti}</p>
      <p className="text-base text-gray-300 mb-4">{description}</p>
      {currentUserId === userid && (
        <div className="flex justify-between items-center">
          <button
            onClick={handleVisibilityToggle}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "로딩 중..." : visibility ? "비공개하기" : "공개하기"}
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "로딩 중..." : "삭제"}
          </button>
        </div>
      )}
    </li>
  );
};

export default TestResultItem;
