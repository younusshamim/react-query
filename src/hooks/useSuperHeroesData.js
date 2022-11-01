import { useMutation, useQuery, useQueryClient } from "react-query";
import { addSuperHero, fetchSuperHeroes } from "../services/super-heros";

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
  });
};

// **---------useQuery er 3rd prmtr e ei configuration gulo use krte parbo---------**

// cacheTime: 180000, // default was 5 min // (loading:false, isFetching: true)
// staleTime: 30000, // default was 0s // tab chng e 30s por api call hbe (chk ntwrk tab) // (loading:false, isFetching: 'false' for 30s)).
// refetchOnMount: true, // default is true
// refetchOnWindowFocus: true // default is true
// refetchInterval: 2000, // default value false // 2s por por refetch krte thkbe
// refetchIntervalInBackground: true // default is false // tab focus na thkleO refetching chlbe
// enabled: false, // component mount e data fetching na korte

// select: (data) => {
//   const superHeroNames = data.data.map((hero) => hero.name);
//   return superHeroNames;
// }, // data transformation

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();

  // const handleSuccess = () => queryClient.invalidateQueries("super-heroes");

  // const handleSuccess = (data) => {
  //   queryClient.setQueryData("super-heroes", (oldQueryData) => {
  //     return {
  //       ...oldQueryData,
  //       data: [...oldQueryData.data, data.data],
  //     };
  //   });
  // };

  return useMutation(addSuperHero, {
    // onSuccess: handleSuccess,

    /**Optimistic Update Start */
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousHeroData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return { previousHeroData };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData("super-heroes", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
    /**Optimistic Update End */
  });
};

// invalidateQueries: refetch kora (network tab e api re get hocche)
// setQueryData : diye cache data update krtchi mainly (jar karone network tab e api re get hocche na)
