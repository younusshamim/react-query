import axios from "axios";

export const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};
