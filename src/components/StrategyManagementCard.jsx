function StrategyManagementCard({
  name,
  category,
  roi,
  winRate,
  risk,
  status,
  description,
}) {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <div>

          <h2 className="text-white text-xl font-bold">
            {name}
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            {category}
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

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-5">

        <div className="bg-[#1F2937] p-3 rounded-xl">

          <p className="text-gray-400 text-sm">
            ROI
          </p>

          <p className="text-green-400 font-bold mt-1">
            {roi}
          </p>

        </div>

        <div className="bg-[#1F2937] p-3 rounded-xl">

          <p className="text-gray-400 text-sm">
            Win Rate
          </p>

          <p className="text-blue-400 font-bold mt-1">
            {winRate}
          </p>

        </div>

        <div className="bg-[#1F2937] p-3 rounded-xl">

          <p className="text-gray-400 text-sm">
            Risk
          </p>

          <p
            className={`font-bold mt-1 ${
              risk === "High"
                ? "text-red-400"
                : risk === "Medium"
                ? "text-yellow-400"
                : "text-green-400"
            }`}
          >
            {risk}
          </p>

        </div>

      </div>

      {/* Description */}
      <div className="bg-[#1F2937] p-4 rounded-xl mb-5">

        <p className="text-gray-300 text-sm">
          {description}
        </p>

      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">

        <button className="bg-blue-600 px-4 py-2 rounded-xl text-white">
          View Details
        </button>

        <button className="bg-[#1F2937] px-4 py-2 rounded-xl text-gray-300 border border-gray-700">
          Optimize
        </button>

      </div>

    </div>
  );
}

export default StrategyManagementCard;