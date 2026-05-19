function StrategyCard({
  name,
  winRate,
  profitFactor,
  drawdown,
  status,
}) {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-white text-xl font-bold">
          {name}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            status === "Optimized"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {status}
        </span>

      </div>

      <div className="space-y-3">

        <div className="flex justify-between">

          <p className="text-gray-400">
            Win Rate
          </p>

          <p className="text-green-400 font-bold">
            {winRate}
          </p>

        </div>

        <div className="flex justify-between">

          <p className="text-gray-400">
            Profit Factor
          </p>

          <p className="text-blue-400 font-bold">
            {profitFactor}
          </p>

        </div>

        <div className="flex justify-between">

          <p className="text-gray-400">
            Max Drawdown
          </p>

          <p className="text-red-400 font-bold">
            {drawdown}
          </p>

        </div>

      </div>

    </div>
  );
}

export default StrategyCard;