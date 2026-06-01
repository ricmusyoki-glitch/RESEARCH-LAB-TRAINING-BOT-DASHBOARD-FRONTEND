const sentiments = [
  { market: "Forex Market", label: "Bullish", color: "green", width: "72%" },
  { market: "Indices Market", label: "Neutral", color: "yellow", width: "50%" },
  { market: "Crypto Market", label: "Bearish", color: "red", width: "35%" },
];

const labelColors = { green: "text-green-400", yellow: "text-yellow-400", red: "text-red-400" };
const barColors = { green: "bg-green-500", yellow: "bg-yellow-500", red: "bg-red-500" };

function MarketSentimentPanel() {
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

      <div className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>
          <h2 className="text-white text-2xl font-bold tracking-tight">Market Sentiment</h2>
          <p className="text-gray-400 text-sm mt-1">AI-driven sentiment analysis</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <p className="text-green-400 text-sm font-medium">Live</p>
        </div>

      </div>

      <div className="space-y-6 relative z-10">

        {sentiments.map((s, index) => (
          <div key={index}>

            <div className="flex justify-between mb-3">
              <p className="text-gray-300 font-medium">{s.market}</p>
              <p className={`font-bold text-sm ${labelColors[s.color]}`}>{s.label}</p>
            </div>

            <div className="w-full bg-white/[0.06] rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-700 ${barColors[s.color]}`}
                style={{ width: s.width }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MarketSentimentPanel;
