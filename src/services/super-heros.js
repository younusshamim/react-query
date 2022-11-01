import { request } from "../utils/axios-utils";

export const fetchSuperHeroes = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({ url: "/superheroes" });
};

export const fetchSuperHero = (heroId) => {
  // return axios.get(`http://localhost:4000/superheroes/${heroId}`);
  return request({ url: `/superheroes/${heroId}` });
};

export const addSuperHero = (hero) => {
  // return axios.post(`http://localhost:4000/superheroes`, hero);
  return request({ url: "/superheroes", method: "post", data: hero });
};
