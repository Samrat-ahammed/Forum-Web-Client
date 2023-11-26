import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePost = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: myPosts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/posts");
        return res.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw error; // Rethrow the error to let React Query handle it
      }
    },
  });
  return [myPosts, loading, refetch];
};

export default usePost;
