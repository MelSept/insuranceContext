import useInsurance from "../hooks/useInsurance";

const Result = () => {
  const { result } = useInsurance();

  if (result === 0) return null;

  return <div>{result}</div>;
};

export default Result;
