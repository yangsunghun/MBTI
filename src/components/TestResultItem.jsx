import { useContext, useState } from "react";
import { updateTestResultVisibility } from "../api/testResults";
import { UserContext } from "../contexts/UserContext";

const TestResultItem = ({ result }) => {
  const { user } = useContext(UserContext);
  const currentUserId = user ? user.userId : null;
  const { id, userid, username, mbti, description, createdAt, visibility } =
    result;
  const [loading, setLoading] = useState(false);

  const handleVisibilityToggle = async () => {
    setLoading(true);
    try {
      // 가시성 값을 토글
      const newVisibility = !visibility;
      await updateTestResultVisibility(id, { visibility: newVisibility });

      // 상태 업데이트 로직 추가: 여기서는 결과를 업데이트하는 로직이 필요함
      // 예: setResult(prev => prev.map(item => item.id === id ? { ...item, visibility: newVisibility } : item));
    } catch (error) {
      console.error("가시성 업데이트 오류:", error);
    } finally {
      setLoading(false);
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
        <button
          onClick={handleVisibilityToggle}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "로딩 중..." : visibility ? "공개됨" : "비공개됨 "}
        </button>
      )}
    </li>
  );
};

export default TestResultItem;
