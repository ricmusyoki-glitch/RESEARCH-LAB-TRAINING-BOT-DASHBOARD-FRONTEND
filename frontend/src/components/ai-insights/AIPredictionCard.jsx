function AIPredictionCard({ asset, prediction, confidence, direction }) {
  const bullish = direction === "Bullish";

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
        transition-all duration-500
        hover:scale-[1.02] hover:border-white/20
      "
    >

      <div className={`absolute top-[-40px] right-[-40px] w-[140px] h-[140px] rounded-full blur-3xl ${bullish ? "bg-green-500/15" : "bg-red-500/15"}`}></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 flex items-center justify-between mb-6">

        <h2 className="text-white text-2xl font-bold tracking-tight">{asset}</h2>

        <span
          className={`px-4 py-2 rounded-2xl text-sm font-bold ${
            bullish ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
          }`}
        >
          {direction}
        </span>

      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">{prediction}</p>

      <div className="relative z-10">

        <div className="flex justify-between mb-3">
          <p className="text-gray-400 text-sm uppercase tracking-wider">AI Confidence</p>
          <p className="text-blue-400 text-sm font-bold">{confidence}%</p>
        </div>

        <div className="w-full bg-white/[0.06] rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-700"
            style={{ width: `${confidence}%` }}
          ></div>
        </div>

      </div>

    </div>
  );
}

export default AIPredictionCard;
