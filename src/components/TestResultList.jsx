import TestResultItem from "./TestResultItem";

const TestResultList = ({ result, setResult }) => {
  if (!result || result.length === 0) {
    return <p className="text-center text-gray-500">테스트 결과가 없습니다.</p>;
  }

  const updateVisibility = (id, newVisibility) => {
    setResult((prevResults) =>
      prevResults.map((item) =>
        item.id === id ? { ...item, visibility: newVisibility } : item
      )
    );
  };

  const deleteTestResultById = (id) => {
    setResult(
      (prevResults) => prevResults.filter((item) => item.id !== id) // 주어진 ID와 일치하지 않는 항목만 유지
    );
  };

  return (
    <ul className="space-y-4">
      {result
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((item) => (
          <TestResultItem
            key={item.id}
            result={item}
            updateVisibility={updateVisibility}
            deleteTestResultById={deleteTestResultById}
          />
        ))}
    </ul>
  );
};

export default TestResultList;
