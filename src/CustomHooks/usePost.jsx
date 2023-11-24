import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePost = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: post = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axiosPublic.get();
      return res.data;
    },
  });

  return [post, loading, refetch];
};

export default usePost;
