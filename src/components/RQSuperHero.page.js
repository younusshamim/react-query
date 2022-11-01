import React from "react";
import { useParams } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>RQ Super Hero Details</h1>
      <h3>
        {data?.data.name} - {data?.data.alterEgo}
      </h3>
    </div>
  );
};

export default RQSuperHeroPage;
