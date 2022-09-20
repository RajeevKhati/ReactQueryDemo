import React from "react";
import useSuperHeroesData from "../hooks/useSuperHeroesData";

const RQSuperHeroes = () => {
  const onSuccess = (data) => console.log("data loaded successfully ", data);
  const onError = (error) => console.log("data load error ", error);

  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData(
    onSuccess,
    onError
  );
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) return <h3>{error.message}</h3>;
  return (
    <>
      <h1>RQSuperHeroes</h1>
      {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
