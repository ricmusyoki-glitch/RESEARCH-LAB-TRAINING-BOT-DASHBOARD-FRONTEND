function RiskAlertsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Risk Alerts
      </h2>

      <div className="space-y-4">

        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">

          <p className="text-red-400 font-semibold">
            High NAS100 Volatility
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Increased volatility detected ahead of major economic announcements.
          </p>

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">

          <p className="text-yellow-400 font-semibold">
            Elevated Drawdown Risk
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Current exposure approaching predefined account safety threshold.
          </p>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">

          <p className="text-blue-400 font-semibold">
            Risk Optimization Suggestion
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Reduce correlated forex positions to improve portfolio diversification.
          </p>

        </div>

      </div>

    </div>
  );
}

export default RiskAlertsPanel;