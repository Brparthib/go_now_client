import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axios";

export const useMe = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await axiosClient.get("/auth/me");
      return res.data;
    },
    retry: false,
  });
