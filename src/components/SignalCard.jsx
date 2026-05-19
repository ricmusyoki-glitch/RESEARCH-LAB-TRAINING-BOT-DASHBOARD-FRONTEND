function SignalCard({
  pair,
  type,
  entry,
  tp,
  sl,
  confidence,
  timeframe,
  strategy,
  reason,
  status,
}) {

  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">

        <div>

          <h2
            className={`text-2xl font-bold ${
              type === "BUY"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {type} {pair}
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            {strategy} Strategy
          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            status === "Active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status}
        </span>

      </div>

      {/* Trade Levels */}
      <div className="grid grid-cols-2 gap-4 mb-4">

        <div className="bg-[#1F2937] p-3 rounded-xl">
          <p className="text-gray-400 text-sm">
            Entry
          </p>

          <p className="text-white font-bold mt-1">
            {entry}
          </p>
        </div>

        <div className="bg-[#1F2937] p-3 rounded-xl">
          <p className="text-gray-400 text-sm">
            Timeframe
          </p>

          <p className="text-white font-bold mt-1">
            {timeframe}
          </p>
        </div>

        <div className="bg-[#1F2937] p-3 rounded-xl">
          <p className="text-green-400 text-sm">
            Take Profit
          </p>

          <p className="text-white font-bold mt-1">
            {tp}
          </p>
        </div>

        <div className="bg-[#1F2937] p-3 rounded-xl">
          <p className="text-red-400 text-sm">
            Stop Loss
          </p>

          <p className="text-white font-bold mt-1">
            {sl}
          </p>
        </div>

      </div>

      {/* Confidence */}
      <div className="mb-4">

        <div className="flex justify-between mb-2">

          <p className="text-gray-400 text-sm">
            Confidence
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

      {/* Reason */}
      <div className="bg-[#1F2937] p-4 rounded-xl">

        <p className="text-gray-400 text-sm">
          AI Reasoning
        </p>

        <p className="text-gray-300 text-sm mt-2">
          {reason}
        </p>

      </div>

    </div>
  );
}

export default SignalCard;