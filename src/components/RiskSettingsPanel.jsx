function RiskSettingsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Risk Preferences
      </h2>

      <div className="space-y-4">

        <div>

          <label className="text-gray-400 text-sm">
            Maximum Daily Risk
          </label>

          <input
            type="text"
            placeholder="2%"
            className="w-full mt-2 bg-[#1F2937] border border-gray-700 rounded-xl p-3 text-white outline-none"
          />

        </div>

        <div>

          <label className="text-gray-400 text-sm">
            Maximum Drawdown
          </label>

          <input
            type="text"
            placeholder="5%"
            className="w-full mt-2 bg-[#1F2937] border border-gray-700 rounded-xl p-3 text-white outline-none"
          />

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl text-white font-semibold">

          Save Risk Settings

        </button>

      </div>

    </div>
  );
}

export default RiskSettingsPanel;