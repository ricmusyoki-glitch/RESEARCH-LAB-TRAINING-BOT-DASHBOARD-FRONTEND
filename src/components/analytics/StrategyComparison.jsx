const strategies = [
  {
    name: "Momentum Breakout",
    roi: "+24.5%",
    roiColor: "text-green-400",
    note: "Best performing strategy this month.",
  },
  {
    name: "Trend Continuation",
    roi: "+18.1%",
    roiColor: "text-blue-400",
    note: "Stable profitability with low drawdown.",
  },
  {
    name: "Mean Reversion",
    roi: "-3.7%",
    roiColor: "text-red-400",
    note: "Underperforming during volatile market conditions.",
  },
];

function StrategyComparison() {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[32px]
        border border-white/[0.08]
        bg-white/[0.03]
        backdrop-blur-2xl
        p-7
        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
      "
    >

      <div className="absolute bottom-[-80px] right-[-80px] w-[220px] h-[220px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>
          <h2 className="text-white text-2xl font-bold tracking-tight">Strategy Comparison</h2>
          <p className="text-gray-400 text-sm mt-1">AI-ranked strategy performance</p>
        </div>

      </div>

      <div className="space-y-4 relative z-10">

        {strategies.map((s, index) => (
          <div
            key={index}
            className="
              rounded-3xl border border-white/[0.05]
              bg-white/[0.03] p-5
              transition-all duration-500
              hover:border-white/20 hover:scale-[1.01]
            "
          >

            <div className="flex items-center justify-between mb-2">
              <p className="text-white font-bold">{s.name}</p>
              <p className={`font-bold ${s.roiColor}`}>{s.roi}</p>
            </div>

            <p className="text-gray-400 text-sm">{s.note}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default StrategyComparison;
