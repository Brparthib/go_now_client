/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import TravelPlanForm from "@/components/modules/TravelPlan/TravelPlanForm";
import { useCreateTravelPlan } from "@/hooks/useTravelPlan";
import { useRouter } from "next/navigation";

export default function CreateTravelPlanPage() {
  const { mutate, isPending } = useCreateTravelPlan();
  const router = useRouter();

  return (
    <TravelPlanForm
      loading={isPending}
      onSubmit={(data: any) =>
        mutate(data, { onSuccess: () => router.push("/user/travel-plans") })
      }
    />
  );
}
