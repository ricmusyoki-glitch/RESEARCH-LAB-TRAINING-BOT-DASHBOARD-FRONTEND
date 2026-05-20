function StrategyComparison() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-xl font-bold text-white mb-5">
        Strategy Comparison
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <div className="flex items-center justify-between">

            <p className="text-white font-bold">
              Momentum Breakout
            </p>

            <p className="text-green-400 font-bold">
              +24.5%
            </p>

          </div>

          <p className="text-gray-400 text-sm mt-2">
            Best performing strategy this month.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <div className="flex items-center justify-between">

            <p className="text-white font-bold">
              Trend Continuation
            </p>

            <p className="text-blue-400 font-bold">
              +18.1%
            </p>

          </div>

          <p className="text-gray-400 text-sm mt-2">
            Stable profitability with low drawdown.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <div className="flex items-center justify-between">

            <p className="text-white font-bold">
              Mean Reversion
            </p>

            <p className="text-red-400 font-bold">
              -3.7%
            </p>

          </div>

          <p className="text-gray-400 text-sm mt-2">
            Underperforming during volatile market conditions.
          </p>

        </div>

      </div>

    </div>
  );
}

export default StrategyComparison;