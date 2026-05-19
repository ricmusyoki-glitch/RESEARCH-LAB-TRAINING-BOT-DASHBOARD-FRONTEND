function StrategyInsightsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Strategy Insights
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-green-400 font-semibold">
            Best Performer
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Momentum Breakout strategy outperforming all other systems this week.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-yellow-400 font-semibold">
            Optimization Needed
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Mean reversion systems struggling in volatile market conditions.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-blue-400 font-semibold">
            AI Recommendation
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Increase trend confirmation filters before executing breakout entries.
          </p>

        </div>

      </div>

    </div>
  );
}

export default StrategyInsightsPanel;