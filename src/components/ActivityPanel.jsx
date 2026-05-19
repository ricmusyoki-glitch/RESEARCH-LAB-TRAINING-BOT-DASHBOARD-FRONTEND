function ActivityPanel() {
    
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-xl font-bold text-white mb-5">
        Recent Signals
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-green-400 font-bold">
            BUY EUR/USD
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Confidence: 87%
          </p>
        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-red-400 font-bold">
            SELL GBP/USD
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Confidence: 72%
          </p>
        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">
          <p className="text-green-400 font-bold">
            BUY NAS100
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Confidence: 91%
          </p>
        </div>

      </div>

    </div>
  );
}

export default ActivityPanel;