import { useQuery, useQueryClient } from "react-query";
import { fetchSuperHero } from "../services/super-heros";

const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();

  const initialHero = () => {
    const hero = queryClient
      .getQueryData("super-heroes")
      ?.data?.find((hero) => hero.id === parseInt(heroId));
    return { data: hero };
  };

  return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId), {
    // initialData for: details page e loading na hwr jnno
    initialData: initialHero,
  });
};

export default useSuperHeroData;
