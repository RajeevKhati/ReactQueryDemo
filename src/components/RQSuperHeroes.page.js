import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");
const RQSuperHeroes = () => {
  const onSuccess = (data) => console.log("data loaded successfully ", data);
  const onError = (error) => console.log("data load error ", error);

  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    //select helps to transform response data. Here we have change array of objects to array to hero names.
    //We can use same method to filter out some elements as well.
    { onSuccess, onError, select:(data) => data?.data.map(hero => hero.name) }
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
