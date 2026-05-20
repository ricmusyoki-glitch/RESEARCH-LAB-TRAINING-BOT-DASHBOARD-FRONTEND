const insights = [
  {
    title: "Market Sentiment Shift",
    description:
      "AI detected increasing bullish momentum across major forex pairs after institutional liquidity expansion.",
    color: "cyan",
  },

  {
    title: "Volatility Warning",
    description:
      "NASDAQ volatility expected to rise significantly ahead of major economic announcements.",
    color: "yellow",
  },

  {
    title: "Strategy Optimization",
    description:
      "Momentum continuation strategies currently outperform reversal systems by 18.4%.",
    color: "green",
  },
];

function AIInsightsPanel() {
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

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[260px] h-[260px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>

          <h2 className="text-white text-2xl font-bold tracking-tight">

            AI Intelligence Center

          </h2>

          <p className="text-gray-400 text-sm mt-1">

            Real-time market intelligence and predictive analytics

          </p>

        </div>

        {/* AI Pulse */}
        <div className="flex items-center gap-3">

          <div className="relative">

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>

            <div className="absolute inset-0 w-3 h-3 rounded-full bg-cyan-400 animate-ping opacity-30"></div>

          </div>

          <p className="text-cyan-400 text-sm font-medium">

            AI Active

          </p>

        </div>

      </div>

      {/* AI Status Card */}
      <div
        className="
          relative z-10
          rounded-3xl
          border border-cyan-500/10
          bg-gradient-to-br from-cyan-500/10 to-transparent
          p-6
          mb-6
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-300 text-sm uppercase tracking-widest">

              Neural Engine Status

            </p>

            <h3 className="text-white text-3xl font-black mt-3">

              Operational

            </h3>

          </div>

          <div className="relative flex items-center justify-center">

            <div className="w-20 h-20 rounded-full border-4 border-cyan-500/20"></div>

            <div className="absolute text-cyan-400 font-black text-xl">

              98%

            </div>

          </div>

        </div>

      </div>

      {/* Insights */}
      <div className="space-y-5 relative z-10">

        {insights.map((insight, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              border border-white/[0.05]
              bg-white/[0.03]
              p-5
              transition-all duration-500
              hover:border-white/20
              hover:scale-[1.01]
            "
          >

            {/* Top */}
            <div className="flex items-center gap-4 mb-4">

              <div
                className={`
                  w-3 h-3 rounded-full animate-pulse
                  ${
                    insight.color === "cyan"
                      ? "bg-cyan-400"
                      : insight.color === "yellow"
                      ? "bg-yellow-400"
                      : "bg-green-400"
                  }
                `}
              ></div>

              <h3 className="text-white font-bold text-lg">

                {insight.title}

              </h3>

            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">

              {insight.description}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsightsPanel;