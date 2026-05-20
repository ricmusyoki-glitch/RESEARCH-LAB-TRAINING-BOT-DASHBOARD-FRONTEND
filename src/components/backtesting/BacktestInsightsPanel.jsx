function BacktestInsightsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        AI Optimization Insights
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-green-400 font-semibold">
            Strong Historical Performance
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Momentum Breakout strategy maintained stable profitability across trending markets.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-yellow-400 font-semibold">
            Optimization Opportunity
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Reducing trade frequency may improve overall risk-adjusted returns.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-blue-400 font-semibold">
            AI Recommendation
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Increase volatility filters before entering breakout positions during news events.
          </p>

        </div>

      </div>

    </div>
  );
}

export default BacktestInsightsPanel;