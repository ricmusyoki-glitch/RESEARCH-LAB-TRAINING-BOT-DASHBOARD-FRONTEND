function ActivityPanel() {
    
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-xl font-bold text-white mb-5">
        Live Signals
      </h2>

      <div className="space-y-4">

        {/* Signal 1 */}
        <div className="bg-[#1F2937] p-4 rounded-xl border border-gray-700">

          <div className="flex items-center justify-between">

            <p className="text-green-400 font-bold text-lg">
              BUY EUR/USD
            </p>

            <span className="text-sm text-gray-400">
              2 min ago
            </span>

          </div>

          <div className="mt-3 space-y-1 text-sm">

            <p className="text-gray-300">
              Entry: 1.0842
            </p>

            <p className="text-green-400">
              Take Profit: 1.0895
            </p>

            <p className="text-red-400">
              Stop Loss: 1.0810
            </p>

            <p className="text-blue-400">
              Confidence: 87%
            </p>

          </div>

          <div className="mt-3 bg-[#111827] p-3 rounded-lg">

            <p className="text-gray-400 text-sm">
              Reason:
            </p>

            <p className="text-gray-300 text-sm mt-1">
              Bullish momentum detected with strong volume breakout above resistance.
            </p>

          </div>

        </div>

        {/* Signal 2 */}
        <div className="bg-[#1F2937] p-4 rounded-xl border border-gray-700">

          <div className="flex items-center justify-between">

            <p className="text-red-400 font-bold text-lg">
              SELL GBP/USD
            </p>

            <span className="text-sm text-gray-400">
              5 min ago
            </span>

          </div>

          <div className="mt-3 space-y-1 text-sm">

            <p className="text-gray-300">
              Entry: 1.2675
            </p>

            <p className="text-green-400">
              Take Profit: 1.2610
            </p>

            <p className="text-red-400">
              Stop Loss: 1.2712
            </p>

            <p className="text-blue-400">
              Confidence: 72%
            </p>

          </div>

          <div className="mt-3 bg-[#111827] p-3 rounded-lg">

            <p className="text-gray-400 text-sm">
              Reason:
            </p>

            <p className="text-gray-300 text-sm mt-1">
              Bearish structure formed after rejection from key resistance zone.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ActivityPanel;