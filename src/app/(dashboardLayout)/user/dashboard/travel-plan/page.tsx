"use client";

import { useGetMyTravelPlans } from "@/hooks/useTravelPlan";

export default function TravelPlansPage() {
  const { data, isLoading } = useGetMyTravelPlans();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data?.map((plan) => (
        <div key={plan._id}>
          <h3>{plan.destinationCountry}</h3>
          <p>{plan.destinationCity}</p>
        </div>
      ))}
    </div>
  );
}
