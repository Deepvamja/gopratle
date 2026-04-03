"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Step1({ next }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [category, setCategory] = useState("planner");
  const [isRange, setIsRange] = useState(false);

  const onSubmit = (data: any) => {
    next({ ...data, category });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <input
        {...register("name", { required: "Event name required" })}
        placeholder="Event Name"
        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
      />
      {errors.name?.message && (
        <p className="text-red-400 text-sm">{String(errors.name.message)}</p>
      )}

      <input
        {...register("type", { required: "Type required" })}
        placeholder="Event Type"
        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
      />

      <label className="text-sm flex items-center gap-2">
        <input type="checkbox" onChange={() => setIsRange(!isRange)} />
        Use Date Range
      </label>

      {!isRange ? (
        <input
          type="date"
          {...register("date", { required: "Date required" })}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />
      ) : (
        <div className="flex gap-2">
          <input
            type="date"
            {...register("startDate", { required: true })}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />
          <input
            type="date"
            {...register("endDate", { required: true })}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
          />
        </div>
      )}

      <input
        {...register("location", { required: "Location required" })}
        placeholder="Location"
        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
      />

      <input
        {...register("venue")}
        placeholder="Venue (optional)"
        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
      />

      <div className="grid grid-cols-3 gap-3">
        {["planner", "performer", "crew"].map((c) => (
          <div
            key={c}
            onClick={() => setCategory(c)}
            className={`p-4 rounded-xl text-center cursor-pointer border transition ${
              category === c
                ? "bg-indigo-500 border-indigo-400"
                : "bg-slate-800 border-slate-700 hover:bg-slate-700"
            }`}
          >
            {c}
          </div>
        ))}
      </div>

      <button className="w-full p-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-medium">
        Next
      </button>

    </form>
  );
}