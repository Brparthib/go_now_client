/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function TravelPlanForm({ onSubmit, loading }: any) {
  const [form, setForm] = useState({
    destinationCountry: "",
    destinationCity: "",
    startDate: "",
    endDate: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4"
    >
      <input
        placeholder="Country"
        onChange={(e) =>
          setForm({ ...form, destinationCountry: e.target.value })
        }
      />
      <input
        placeholder="City"
        onChange={(e) =>
          setForm({ ...form, destinationCity: e.target.value })
        }
      />
      <input type="date" onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
      <input type="date" onChange={(e) => setForm({ ...form, endDate: e.target.value })} />

      <button disabled={loading}>
        {loading ? "Saving..." : "Save Plan"}
      </button>
    </form>
  );
}
