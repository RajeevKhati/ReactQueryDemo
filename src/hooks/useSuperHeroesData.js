import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
    "super-heroes",
    fetchSuperHeroes,
    //select helps to transform response data. Here we have change array of objects to array to hero names.
    //We can use same method to filter out some elements as well.
    { onSuccess, onError }
  );
}

export default useSuperHeroesData