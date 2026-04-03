export default function ProgressBar({ step }: { step: number }) {
  const steps = [1, 2, 3, 4];

  return (
    <div className="flex items-center mb-6">
      {steps.map((s) => (
        <div key={s} className="flex-1 flex items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              step >= s ? "bg-indigo-500" : "bg-gray-600"
            }`}
          >
            {s}
          </div>

          {s !== 4 && (
            <div
              className={`flex-1 h-1 ${
                step > s ? "bg-indigo-500" : "bg-gray-600"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}