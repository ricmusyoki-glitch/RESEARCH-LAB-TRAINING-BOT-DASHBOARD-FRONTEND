function AISettingsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        AI Preferences
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between bg-[#1F2937] p-4 rounded-xl">

          <div>

            <p className="text-white font-semibold">
              AI Trade Signals
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Enable AI-generated trading opportunities
            </p>

          </div>

          <button className="bg-green-500 px-4 py-2 rounded-xl text-white">
            Enabled
          </button>

        </div>

        <div className="flex items-center justify-between bg-[#1F2937] p-4 rounded-xl">

          <div>

            <p className="text-white font-semibold">
              Volatility Alerts
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Receive AI volatility warnings
            </p>

          </div>

          <button className="bg-green-500 px-4 py-2 rounded-xl text-white">
            Enabled
          </button>

        </div>

        <div className="flex items-center justify-between bg-[#1F2937] p-4 rounded-xl">

          <div>

            <p className="text-white font-semibold">
              Strategy Optimization
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Allow AI optimization recommendations
            </p>

          </div>

          <button className="bg-red-500 px-4 py-2 rounded-xl text-white">
            Disabled
          </button>

        </div>

      </div>

    </div>
  );
}

export default AISettingsPanel;