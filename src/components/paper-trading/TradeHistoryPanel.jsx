function TradeHistoryPanel() {

  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-xl font-bold text-white mb-5">
        Trade History
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl flex items-center justify-between">

          <div>

            <p className="text-white font-bold">
              EUR/USD BUY
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Closed at Take Profit
            </p> 

          </div>

          <p className="text-green-400 font-bold">
            +$420
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl flex items-center justify-between">

          <div>

            <p className="text-white font-bold">
              GBP/USD SELL
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Closed at Stop Loss
            </p>

          </div>

          <p className="text-red-400 font-bold">
            -$180
          </p>

        </div>

      </div>

    </div>
  );
}

export default TradeHistoryPanel;