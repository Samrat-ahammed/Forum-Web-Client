import axios from "axios";

const axiosPublic = axios.create({
  baseUrl: "./post.json",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
