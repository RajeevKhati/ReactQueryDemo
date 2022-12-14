import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = ({queryKey}) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], fetchSuperHero);
};

export default useSuperHeroData;
