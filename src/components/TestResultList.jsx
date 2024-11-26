import TestResultItem from "./TestResultItem";

const TestResultList = ({ result }) => {

  
  return (
    <ul className="space-y-4">
      {result.map((item) => (
        <TestResultItem key={item.id} result={item} />
      ))}
    </ul>
  );
};

export default TestResultList;
