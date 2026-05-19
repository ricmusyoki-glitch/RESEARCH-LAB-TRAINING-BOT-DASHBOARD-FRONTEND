function ResearchInsightsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-xl font-bold text-white mb-5">
        AI Research Insights
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-blue-400 font-semibold">
            Market Structure Analysis
          </p>

          <p className="text-gray-300 text-sm mt-2">
            AI detected increasing bullish continuation patterns in major forex pairs.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-yellow-400 font-semibold">
            Strategy Weakness
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Mean reversion systems underperforming during high volatility periods.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-green-400 font-semibold">
            Optimization Suggestion
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Increase confirmation filters on breakout strategies to reduce false entries.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ResearchInsightsPanel;