function BacktestConfigPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Backtest Configuration
      </h2>

      <div className="space-y-4">

        {/* Strategy */}
        <div>

          <label className="text-gray-400 text-sm">
            Strategy
          </label>

          <select className="w-full mt-2 bg-[#1F2937] border border-gray-700 rounded-xl p-3 text-white">

            <option>
              Momentum Breakout
            </option>

            <option>
              Trend Continuation
            </option>

            <option>
              Mean Reversion
            </option>

          </select>

        </div>

        {/* Timeframe */}
        <div>

          <label className="text-gray-400 text-sm">
            Timeframe
          </label>

          <select className="w-full mt-2 bg-[#1F2937] border border-gray-700 rounded-xl p-3 text-white">

            <option>1H</option>
            <option>4H</option>
            <option>Daily</option>

          </select>

        </div>

        {/* Date Range */}
        <div>

          <label className="text-gray-400 text-sm">
            Historical Period
          </label>

          <input
            type="text"
            placeholder="2024 - 2025"
            className="w-full mt-2 bg-[#1F2937] border border-gray-700 rounded-xl p-3 text-white outline-none"
          />

        </div>

        {/* Run Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl text-white font-semibold">

          Run Backtest

        </button>

      </div>

    </div>
  );
}

export default BacktestConfigPanel;