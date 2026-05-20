function AIPredictionCard({
  asset,
  prediction,
  confidence,
  direction,
}) {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-white text-xl font-bold">
          {asset}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            direction === "Bullish"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {direction}
        </span>

      </div>

      <p className="text-gray-300 text-sm mb-4">
        {prediction}
      </p>

      {/* Confidence Bar */}
      <div>

        <div className="flex justify-between mb-2">

          <p className="text-gray-400 text-sm">
            AI Confidence
          </p>

          <p className="text-blue-400 text-sm">
            {confidence}%
          </p>

        </div>

        <div className="w-full bg-[#1F2937] rounded-full h-3">

          <div
            className="bg-blue-500 h-3 rounded-full"
            style={{ width: `${confidence}%` }}
          ></div>

        </div>

      </div>

    </div>
  );
}

export default AIPredictionCard;