function VolatilityPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-xl font-bold text-white mb-5">
        Volatility Analysis
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between bg-[#1F2937] p-4 rounded-xl">

          <p className="text-white">
            EUR/USD
          </p>

          <span className="text-green-400 font-bold">
            Low
          </span>

        </div>

        <div className="flex items-center justify-between bg-[#1F2937] p-4 rounded-xl">

          <p className="text-white">
            GBP/USD
          </p>

          <span className="text-yellow-400 font-bold">
            Medium
          </span>

        </div>

        <div className="flex items-center justify-between bg-[#1F2937] p-4 rounded-xl">

          <p className="text-white">
            NAS100
          </p>

          <span className="text-red-400 font-bold">
            High
          </span>

        </div>

      </div>

    </div>
  );
}

export default VolatilityPanel;