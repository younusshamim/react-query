import React from "react";
import { useQueries } from "react-query";
import { fetchSuperHero } from "../services/super-heros";

const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => ({
      queryKey: ["super-hero", id],
      queryFn: () => fetchSuperHero(id),
    }))
  );
  const { isLoading } = queryResults[1];

  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  return (
    <div>
      <h2>Dynamic Parallel Page</h2>
      {JSON.stringify(queryResults[0].data.data)}
      <br />
      {JSON.stringify(queryResults[1].data.data)}
    </div>
  );
};

export default DynamicParallelPage;
