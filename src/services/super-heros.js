import axios from "axios";

export const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
