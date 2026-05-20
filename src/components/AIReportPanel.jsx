function AIReportPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        AI Performance Summary
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-blue-400 font-semibold">
            Monthly Overview
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Trading performance improved significantly during high momentum market conditions.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-green-400 font-semibold">
            Best Strategy
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Momentum Breakout strategy achieved the highest profitability this month.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-yellow-400 font-semibold">
            AI Recommendation
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Reduce exposure during major economic news releases to improve account stability.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIReportPanel;