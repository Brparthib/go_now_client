import api from "@/lib/axios";
import { TravelPlan } from "@/types/userType";

export const createTravelPlan = async (payload: Partial<TravelPlan>) => {
  const { data } = await api.post("/plan", payload);
  return data.data;
};

export const getMyTravelPlans = async (): Promise<TravelPlan[]> => {
  const { data } = await api.get("/plan/me");
  return data.data;
};

export const updateTravelPlan = async ({
  id,
  payload,
}: {
  id: string;
  payload: Partial<TravelPlan>;
}) => {
  const { data } = await api.patch(`/plan/${id}`, payload);
  return data.data;
};

export const deleteTravelPlan = async (id: string) => {
  const { data } = await api.delete(`/plan/${id}`);
  return data.data;
};
