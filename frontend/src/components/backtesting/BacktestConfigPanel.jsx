function BacktestConfigPanel() {
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

      <div className="absolute top-[-60px] left-[-60px] w-[180px] h-[180px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 mb-8">
        <h2 className="text-white text-2xl font-bold tracking-tight">Backtest Configuration</h2>
        <p className="text-gray-400 text-sm mt-1">Configure and run strategy backtests</p>
      </div>

      <div className="space-y-5 relative z-10">

        <div>
          <label className="text-gray-400 text-sm uppercase tracking-wider">Strategy</label>
          <select className="w-full mt-2 bg-white/[0.05] border border-white/[0.08] rounded-2xl p-3 text-white outline-none focus:border-blue-500/50 transition">
            <option className="bg-[#0B1120]">Momentum Breakout</option>
            <option className="bg-[#0B1120]">Trend Continuation</option>
            <option className="bg-[#0B1120]">Mean Reversion</option>
          </select>
        </div>

        <div>
          <label className="text-gray-400 text-sm uppercase tracking-wider">Timeframe</label>
          <select className="w-full mt-2 bg-white/[0.05] border border-white/[0.08] rounded-2xl p-3 text-white outline-none focus:border-blue-500/50 transition">
            <option className="bg-[#0B1120]">1H</option>
            <option className="bg-[#0B1120]">4H</option>
            <option className="bg-[#0B1120]">Daily</option>
          </select>
        </div>

        <div>
          <label className="text-gray-400 text-sm uppercase tracking-wider">Historical Period</label>
          <input
            type="text"
            placeholder="2024 - 2025"
            className="w-full mt-2 bg-white/[0.05] border border-white/[0.08] rounded-2xl p-3 text-white outline-none focus:border-blue-500/50 transition placeholder-gray-600"
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 p-4 rounded-2xl text-white font-bold tracking-wide">
          Run Backtest
        </button>

      </div>

    </div>
  );
}

export default BacktestConfigPanel;
