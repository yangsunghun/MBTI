import React, { useEffect, useState } from "react";
import TestResultList from "../components/TestResultList";
import { getTestResults } from "../api/testResults";

const TestResultPage = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fatchTestResult = async () => {
      try {
        const fatchResult = await getTestResults();
        setResult(fatchResult);
      } catch (error) {
        console.error(error);
      }
    };

    fatchTestResult();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList result={result} />
      </div>
    </div>
  );
};

export default TestResultPage;
