const activities = [
  {
    pair: "EUR/USD",
    type: "BUY",
    entry: "1.0842",
    tp: "1.0915",
    sl: "1.0790",
    confidence: "92%",
    reason: "Bullish breakout with strong momentum confirmation.",
  },

  {
    pair: "NAS100",
    type: "BUY",
    entry: "18,420",
    tp: "18,760",
    sl: "18,200",
    confidence: "87%",
    reason: "AI trend continuation model detected institutional buying pressure.",
  },

  {
    pair: "BTC/USD",
    type: "SELL",
    entry: "64,200",
    tp: "61,800",
    sl: "65,400",
    confidence: "79%",
    reason: "Bearish divergence detected on higher timeframe resistance.",
  },
];

function ActivityPanel() {
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

      {/* Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>

          <h2 className="text-white text-2xl font-bold tracking-tight">

            AI Signal Feed

          </h2>

          <p className="text-gray-400 text-sm mt-1">

            Live institutional trading intelligence

          </p>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

          <p className="text-green-400 text-sm font-medium">

            Live Signals

          </p>

        </div>

      </div>

      {/* Signals */}
      <div className="space-y-5 relative z-10">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              border border-white/[0.06]
              bg-white/[0.03]
              p-5
              transition-all duration-500
              hover:border-white/20
              hover:scale-[1.01]
            "
          >

            {/* Top Row */}
            <div className="flex items-center justify-between mb-5">

              <div className="flex items-center gap-4">

                <div
                  className={`
                    px-4 py-2 rounded-2xl text-sm font-bold
                    ${
                      activity.type === "BUY"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }
                  `}
                >

                  {activity.type}

                </div>

                <div>

                  <h3 className="text-white text-lg font-bold">

                    {activity.pair}

                  </h3>

                  <p className="text-gray-400 text-sm">

                    AI Confidence: {activity.confidence}

                  </p>

                </div>

              </div>

              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

            </div>

            {/* Trade Levels */}
            <div className="grid grid-cols-3 gap-4 mb-5">

              <div className="bg-white/[0.03] rounded-2xl p-4">

                <p className="text-gray-400 text-xs uppercase tracking-wider">

                  Entry

                </p>

                <p className="text-white font-bold text-lg mt-2">

                  {activity.entry}

                </p>

              </div>

              <div className="bg-white/[0.03] rounded-2xl p-4">

                <p className="text-gray-400 text-xs uppercase tracking-wider">

                  Take Profit

                </p>

                <p className="text-green-400 font-bold text-lg mt-2">

                  {activity.tp}

                </p>

              </div>

              <div className="bg-white/[0.03] rounded-2xl p-4">

                <p className="text-gray-400 text-xs uppercase tracking-wider">

                  Stop Loss

                </p>

                <p className="text-red-400 font-bold text-lg mt-2">

                  {activity.sl}

                </p>

              </div>

            </div>

            {/* AI Reason */}
            <div className="bg-white/[0.02] rounded-2xl p-4 border border-white/[0.04]">

              <p className="text-cyan-400 text-sm font-semibold mb-2">

                AI Analysis

              </p>

              <p className="text-gray-300 text-sm leading-relaxed">

                {activity.reason}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityPanel;