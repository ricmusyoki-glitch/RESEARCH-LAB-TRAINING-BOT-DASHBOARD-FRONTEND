const feeds = [
  {
    label: "Trend Detection",
    color: "blue",
    message: "AI detected strong bullish continuation patterns in EUR/USD.",
  },
  {
    label: "Volatility Alert",
    color: "yellow",
    message: "NAS100 volatility increasing ahead of economic announcements.",
  },
  {
    label: "Strategy Optimization",
    color: "green",
    message: "Momentum strategies currently outperforming reversal systems.",
  },
];

const labelColors = {
  blue: "text-blue-400",
  yellow: "text-yellow-400",
  green: "text-green-400",
};

const dotColors = {
  blue: "bg-blue-400",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
};

const borderColors = {
  blue: "border-blue-500/10",
  yellow: "border-yellow-500/10",
  green: "border-green-500/10",
};

function AIMonitoringFeed() {
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

      <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>
          <h2 className="text-white text-2xl font-bold tracking-tight">
            AI Monitoring Feed
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Real-time AI market intelligence
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <p className="text-blue-400 text-sm font-medium">Live</p>
        </div>

      </div>

      <div className="space-y-4 relative z-10">

        {feeds.map((feed, index) => (
          <div
            key={index}
            className={`
              rounded-3xl border ${borderColors[feed.color]}
              bg-white/[0.03] p-5
              transition-all duration-500
              hover:border-white/20 hover:scale-[1.01]
            `}
          >

            <div className="flex items-center gap-3 mb-3">
              <div className={`w-2 h-2 rounded-full animate-pulse ${dotColors[feed.color]}`}></div>
              <p className={`font-bold ${labelColors[feed.color]}`}>{feed.label}</p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{feed.message}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AIMonitoringFeed;
