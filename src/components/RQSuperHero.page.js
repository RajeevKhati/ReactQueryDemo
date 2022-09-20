import React from "react";
import { useParams } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";

const RQSuperHero = () => {
  const { heroId } = useParams();
  const {
    data,
    isLoading,
    isError,
    error,
  } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }
  const hero = data?.data;
  return (
    <div>
      {hero.name} - {hero.alterEgo}
    </div>
  );
};

export default RQSuperHero;
