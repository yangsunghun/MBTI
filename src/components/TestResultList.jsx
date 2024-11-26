import TestResultItem from "./TestResultItem";

const TestResultList = ({ result }) => {
  if (!result || result.length === 0) {
    return <p className="text-center text-gray-500">테스트 결과가 없습니다.</p>;
  }

  return (
    <ul className="space-y-4">
      {result.map((item) => (
        <TestResultItem key={item.id} result={item} />
      ))}
    </ul>
  );
};

export default TestResultList;
