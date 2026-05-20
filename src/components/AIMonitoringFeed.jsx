function AIMonitoringFeed() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        AI Monitoring Feed
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-blue-400 font-semibold">
            Trend Detection
          </p>

          <p className="text-gray-300 text-sm mt-2">
            AI detected strong bullish continuation patterns in EUR/USD.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-yellow-400 font-semibold">
            Volatility Alert
          </p>

          <p className="text-gray-300 text-sm mt-2">
            NAS100 volatility increasing ahead of economic announcements.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <p className="text-green-400 font-semibold">
            Strategy Optimization
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Momentum strategies currently outperforming reversal systems.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIMonitoringFeed;