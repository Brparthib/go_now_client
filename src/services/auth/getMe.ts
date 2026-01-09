"use server";

import { axiosServer } from "@/lib/axiosServer";

export const getMe = async () => {
  const res = await axiosServer.get("/auth/me");
  return res.data;
};
