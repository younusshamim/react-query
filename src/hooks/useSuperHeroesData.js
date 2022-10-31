import { useQuery } from "react-query";
import { fetchSuperHeroes } from "../services/super-heros";

const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    }, // data transformation
  });
};

export default useSuperHeroesData;

// **---------useQuery er 3rd prmtr e ei configuration gulo use krte parbo---------**

// cacheTime: 180000, // default was 5 min // (loading:false, isFetching: true)
// staleTime: 30000, // default was 0s // tab chng e 30s por api call hbe (chk ntwrk tab) // (loading:false, isFetching: 'false' for 30s)).
// refetchOnMount: true, // default is true
// refetchOnWindowFocus: true // default is true
// refetchInterval: 2000, // default value false // 2s por por refetch krte thkbe
// refetchIntervalInBackground: true // default is false // tab focus na thkleO refetching chlbe
// enabled: false, // component mount e data fetching na korte
