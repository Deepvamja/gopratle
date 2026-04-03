"use client";

import axios from "axios";
import { useState } from "react";

export default function Step4({ data, prev, reset }: any) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submit = async () => {
    try {
      setLoading(true);
      setMessage("");

      await axios.post("http://localhost:5000/api/events", data);

      
      setMessage("success");

  
      setTimeout(() => {
        reset();
      }, 1000);

    } catch {
      setMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      
      <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700 space-y-4">

        <h2 className="text-lg font-semibold text-indigo-400">
          Event Summary
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm">

          <div>
            <p className="text-gray-400">Name</p>
            <p>{data.name}</p>
          </div>

          <div>
            <p className="text-gray-400">Type</p>
            <p>{data.type}</p>
          </div>

          <div>
            <p className="text-gray-400">Location</p>
            <p>{data.location}</p>
          </div>

          <div>
            <p className="text-gray-400">Venue</p>
            <p>{data.venue || "-"}</p>
          </div>

          <div>
            <p className="text-gray-400">Category</p>
            <p className="capitalize">{data.category}</p>
          </div>

          <div>
            <p className="text-gray-400">Date</p>
            <p>
              {data.date
                ? data.date
                : `${data.startDate} → ${data.endDate}`}
            </p>
          </div>

        </div>
      </div>

    
      <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700 space-y-2">
        <h2 className="text-lg font-semibold text-indigo-400">
          Requirements
        </h2>

        {Object.entries(data.details || {}).map(([key, value]) => (
          <div key={key} className="flex justify-between text-sm">
            <span className="text-gray-400 capitalize">{key}</span>
            <span>{String(value)}</span>
          </div>
        ))}
      </div>

   
      {message === "success" && (
        <p className="text-green-400 font-medium">
           Event created successfully!
        </p>
      )}

      {message === "error" && (
        <p className="text-red-400 font-medium">
           Failed to create event
        </p>
      )}

   
      <div className="flex gap-3">
        <button
          onClick={prev}
          className="w-full p-3 rounded-lg bg-gray-600 hover:bg-gray-700"
        >
          Back
        </button>

        <button
          onClick={submit}
          disabled={loading}
          className="w-full p-3 rounded-lg bg-green-500 hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

    </div>
  );
}