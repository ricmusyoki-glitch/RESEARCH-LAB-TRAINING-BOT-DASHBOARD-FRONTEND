const insights = [
  {
    title: "Market Sentiment Shift",
    description:
      "AI models detected increasing bullish pressure across major forex markets after liquidity expansion.",
    type: "Bullish",
  },

  {
    title: "Volatility Alert",
    description:
      "NASDAQ volatility expected to rise ahead of upcoming macroeconomic announcements.",
    type: "Warning",
  },

  {
    title: "Strategy Optimization",
    description:
      "Momentum continuation systems are outperforming reversal strategies by 18.4%.",
    type: "Optimized",
  },
];

function AIInsightsPanel() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/80
        backdrop-blur-xl
        p-5
        md:p-6
        xl:p-7
        shadow-2xl
      "
    >

      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-20
          -right-20
          h-72
          w-72
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
      />

      {/* Cyan Glow */}
      <div
        className="
          absolute
          -bottom-20
          -left-20
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Header */}
      <div
        className="
          relative
          z-10
          mb-8
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        {/* Left */}
        <div>

          <h2
            className="
              text-2xl
              md:text-3xl
              font-bold
              tracking-tight
              text-white
            "
          >
            AI Intelligence Center
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            Real-time predictive market intelligence
          </p>

        </div>

        {/* AI Status */}
        <div
          className="
            flex
            items-center
            gap-3
            self-start
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-4
            py-2
          "
        >

          <div className="relative">

            <div
              className="
                h-2
                w-2
                rounded-full
                bg-cyan-400
                animate-pulse
              "
            />

            <div
              className="
                absolute
                inset-0
                h-2
                w-2
                rounded-full
                bg-cyan-400
                animate-ping
                opacity-40
              "
            />

          </div>

          <p
            className="
              text-sm
              font-medium
              text-cyan-400
            "
          >
            AI Active
          </p>

        </div>

      </div>

      {/* AI Engine Card */}
      <div
        className="
          relative
          z-10
          rounded-3xl
          border
          border-purple-400/10
          bg-gradient-to-br
          from-purple-500/10
          to-slate-900/40
          p-6
        "
      >

        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* Left */}
          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-widest
                text-slate-400
              "
            >
              Neural Engine Status
            </p>

            <h3
              className="
                mt-4
                text-3xl
                md:text-5xl
                font-black
                tracking-tight
                text-white
              "
            >
              Operational
            </h3>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-slate-300
              "
            >
              AI systems continuously monitor liquidity,
              volatility, sentiment, and institutional flow.
            </p>

          </div>

          {/* Right */}
          <div
            className="
              flex
              h-28
              w-28
              items-center
              justify-center
              self-start
              rounded-full
              border-4
              border-cyan-400/20
              bg-cyan-500/5
              text-3xl
              font-black
              text-cyan-400
            "
          >
            98%
          </div>

        </div>

      </div>

      {/* Insights */}
      <div
        className="
          relative
          z-10
          mt-8
          space-y-5
        "
      >

        {insights.map((insight, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-800/60
              p-5
              transition-all
              duration-500
              hover:border-purple-400/30
              hover:bg-slate-800/80
            "
          >

            {/* Top */}
            <div className="flex items-center gap-4">

              <div
                className={`
                  h-3
                  w-3
                  rounded-full
                  animate-pulse

                  ${
                    insight.type === "Bullish"
                      ? "bg-emerald-400"
                      : insight.type === "Warning"
                      ? "bg-yellow-400"
                      : "bg-cyan-400"
                  }
                `}
              />

              <h3
                className="
                  text-lg
                  font-bold
                  text-white
                "
              >
                {insight.title}
              </h3>

            </div>

            {/* Description */}
            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-300
              "
            >
              {insight.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsightsPanel;