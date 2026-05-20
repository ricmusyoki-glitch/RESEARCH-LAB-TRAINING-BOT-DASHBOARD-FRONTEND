function TradingJournalPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Trading Journal
      </h2>

      <div className="space-y-4">

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <div className="flex justify-between mb-2">

            <p className="text-white font-bold">
              EUR/USD BUY
            </p>

            <p className="text-green-400">
              +$420
            </p>

          </div>

          <p className="text-gray-400 text-sm">
            Closed after bullish breakout confirmation.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <div className="flex justify-between mb-2">

            <p className="text-white font-bold">
              NAS100 BUY
            </p>

            <p className="text-green-400">
              +$610
            </p>

          </div>

          <p className="text-gray-400 text-sm">
            AI trend continuation strategy executed successfully.
          </p>

        </div>

        <div className="bg-[#1F2937] p-4 rounded-xl">

          <div className="flex justify-between mb-2">

            <p className="text-white font-bold">
              GBP/USD SELL
            </p>

            <p className="text-red-400">
              -$180
            </p>

          </div>

          <p className="text-gray-400 text-sm">
            Trade stopped out after unexpected volatility spike.
          </p>

        </div>

      </div>

    </div>
  );
}

export default TradingJournalPanel;