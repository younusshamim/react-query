import axios from "axios";

export const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
