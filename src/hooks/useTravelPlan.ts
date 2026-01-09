import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTravelPlan } from "@/services/travelPlan/travelPlan.api";
import { useQuery } from "@tanstack/react-query";
import { getMyTravelPlans } from "@/services/travelPlan/travelPlan.api";
import { updateTravelPlan } from "@/services/travelPlan/travelPlan.api";
import { deleteTravelPlan } from "@/services/travelPlan/travelPlan.api";

export const useCreateTravelPlan = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createTravelPlan,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["my-travel-plans"] });
    },
  });
};

export const useGetMyTravelPlans = () => {
  return useQuery({
    queryKey: ["my-travel-plans"],
    queryFn: getMyTravelPlans,
  });
};

export const useUpdateTravelPlan = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateTravelPlan,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["my-travel-plans"] });
    },
  });
};

export const useDeleteTravelPlan = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deleteTravelPlan,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["my-travel-plans"] });
    },
  });
};