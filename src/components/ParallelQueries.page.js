import React from "react";
import { useQuery } from "react-query";
import { fetchSuperHeroes } from "../services/super-heros";
import { fetchFriends } from "../services/friends";

const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <div>
      <h2>Parallel Queries Page</h2>
      <h3>Hero: {superHeroes?.data[0].name}</h3>
      <h3>Friend: {friends?.data[0].name}</h3>
    </div>
  );
};

export default ParallelQueriesPage;
