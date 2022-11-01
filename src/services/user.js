import axios from "axios";

export const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
