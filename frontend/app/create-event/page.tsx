"use client";

import { useState, useEffect } from "react";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step4 from "@/components/Step4";
import ProgressBar from "@/components/ui/ProgressBar";

export default function Page() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<any>({});

  // Load draft
  useEffect(() => {
    const saved = localStorage.getItem("draft");
    if (saved) setData(JSON.parse(saved));
  }, []);


  // Save draft
  useEffect(() => {
    localStorage.setItem("draft", JSON.stringify(data));
  }, [data]);

  const next = (d: any) => {
    setData((prev: any) => ({ ...prev, ...d }));
    setStep(step + 1);
  };

  const prev = () => setStep(step - 1);

 
  const reset = () => {
    setData({});
    setStep(1);
    localStorage.removeItem("draft");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-black text-white">
      <div className="w-full max-w-xl bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-8">

        <h1 className="text-2xl font-semibold mb-6 text-center">
          Create Event Requirement
        </h1>

        <ProgressBar step={step} />

        {step === 1 && <Step1 next={next} />}
        {step === 2 && <Step2 next={next} prev={prev} formData={data} />}
        {step === 3 && (
          <Step4 data={data} prev={prev} reset={reset} />
        )}

      </div>
    </div>
  );
}