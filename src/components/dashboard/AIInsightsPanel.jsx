function AIInsightsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        AI Insights
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-blue-400 font-semibold">
            Market Sentiment
          </p>

          <p className="text-gray-300 text-sm mt-2">
            AI analysis indicates bullish USD momentum across major forex pairs.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-yellow-400 font-semibold">
            Risk Alert
          </p>

          <p className="text-gray-300 text-sm mt-2">
            NAS100 volatility increasing ahead of economic news release.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-green-400 font-semibold">
            Strategy Optimization
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Momentum breakout strategy currently outperforming mean reversion setups.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIInsightsPanel;