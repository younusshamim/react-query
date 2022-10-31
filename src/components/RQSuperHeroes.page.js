import React from "react";
import { useQuery } from "react-query";
import { fetchSuperHeroes } from "../services/super-heros";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fethcing", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after fetching error!", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 180000, // default was 5 min // (loading:false, isFetching: true)
      // staleTime: 30000, // default was 0s // tab chng e 30s por api call hbe (chk ntwrk tab) // (loading:false, isFetching: 'false' for 30s)).
      // refetchOnMount: true, // default is true
      // refetchOnWindowFocus: true // default is true
      // refetchInterval: 2000, // default value false // 2s por por refetch krte thkbe
      // refetchIntervalInBackground: true // default is false // tab focus na thkleO refetching chlbe
      // enabled: false, // component mount e data fetching na korte
      onSuccess,
      onError,
      select: (data) => {
        const superHeroNames = data.data.map((hero) => hero.name);
        return superHeroNames; // data transformation
      },
    }
  );

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heross</button>
      {/* {data?.data.map((hero, i) => (
        <div key={i}>{hero.name}</div>
      ))} */}

      {data?.map((heroName, i) => (
        <div key={i}>{heroName}</div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
