import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
