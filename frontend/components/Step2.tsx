"use client";

import { useForm } from "react-hook-form";
import { categoryFields } from "@/lib/categoryFields";

export default function Step2({ next, prev, formData }: any) {
  const { register, handleSubmit } = useForm();

  const fields = categoryFields[formData.category];

  return (
    <form onSubmit={handleSubmit((d) => next({ details: d }))} className="space-y-4">

      {fields.map((f: any) => (
        <input
          key={f.name}
          {...register(f.name)}
          placeholder={f.label}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
        />
      ))}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={prev}
          className="w-full p-3 rounded-lg bg-gray-600 hover:bg-gray-700"
        >
          Back
        </button>

        <button className="w-full p-3 rounded-lg bg-indigo-500 hover:bg-indigo-600">
          Next
        </button>
      </div>

    </form>
  );
}