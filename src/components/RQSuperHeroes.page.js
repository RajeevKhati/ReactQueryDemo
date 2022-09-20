import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");
const RQSuperHeroes = () => {
  const onSuccess = (data) => console.log("data loaded successfully ", data);
  const onError = (error) => console.log("data load error ", error);

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    { onSuccess, onError }
  );
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) return <h3>{error.message}</h3>;
  return (
    <>
      <h1>RQSuperHeroes</h1>
      <button onClick={refetch}>Fetch Super Heroes</button>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
