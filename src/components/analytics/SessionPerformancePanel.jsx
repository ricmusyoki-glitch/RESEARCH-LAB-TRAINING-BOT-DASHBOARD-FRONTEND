const sessions = [
  {
    name: "Asian Session",
    profit: "+$4.2K",
    winRate: "61%",
    confidence: "74%",
    volatility: "Low",
    color: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-400/10",
  },

  {
    name: "London Session",
    profit: "+$28.6K",
    winRate: "78%",
    confidence: "93%",
    volatility: "High",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-400/10",
  },

  {
    name: "New York Session",
    profit: "+$19.8K",
    winRate: "72%",
    confidence: "88%",
    volatility: "High",
    color: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-400/10",
  },

  {
    name: "Session Overlap",
    profit: "+$31.2K",
    winRate: "84%",
    confidence: "96%",
    volatility: "Extreme",
    color: "text-orange-400",
    bg: "bg-orange-500/5",
    border: "border-orange-400/10",
  },
];

function SessionPerformancePanel() {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-slate-900/80

        p-5
        md:p-6
        xl:p-7

        backdrop-blur-xl
        shadow-2xl
      "
    >

      {/* Glow */}
      <div
        className="
          absolute
          -bottom-20
          -right-20

          h-72
          w-72

          rounded-full

          bg-purple-500/20

          blur-3xl
        "
      />

      {/* Header */}
      <div
        className="
          relative
          z-10

          flex
          flex-col
          gap-4

          md:flex-row
          md:items-start
          md:justify-between
        "
      >

        <div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]

              text-purple-400
            "
          >
            Forex Session Intelligence
          </p>

          <h2
            className="
              mt-4

              text-4xl
              md:text-5xl

              font-black
              tracking-tight

              text-white
            "
          >
            Session Performance
          </h2>

          <p
            className="
              mt-5

              max-w-3xl

              text-sm
              md:text-base

              leading-7

              text-slate-400
            "
          >
            AI-powered session analytics measuring
            profitability, volatility adaptation,
            and execution quality across global
            forex trading environments.
          </p>

        </div>

        {/* Status */}
        <div
          className="
            flex
            items-center
            gap-3

            self-start

            rounded-full

            border
            border-emerald-400/20

            bg-emerald-500/10

            px-4
            py-2
          "
        >

          <div
            className="
              h-2
              w-2
              rounded-full

              bg-emerald-400

              animate-pulse
            "
          />

          <p
            className="
              text-sm
              font-medium

              text-emerald-400
            "
          >
            Live Session Analytics
          </p>

        </div>

      </div>

      {/* Session Grid */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-6

          md:grid-cols-2
        "
      >

        {sessions.map((session, index) => (

          <div
            key={index}
            className={`
              rounded-3xl

              border
              ${session.border}

              ${session.bg}

              p-6
            `}
          >

            {/* Top */}
            <div
              className="
                flex
                items-start
                justify-between
                gap-4
              "
            >

              <div>

                <h3
                  className="
                    text-2xl
                    font-black

                    text-white
                  "
                >
                  {session.name}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-400
                  "
                >
                  AI Session Intelligence
                </p>

              </div>

              <div
                className={`
                  rounded-full

                  px-4
                  py-2

                  text-sm
                  font-medium

                  ${session.color}

                  bg-white/5
                `}
              >
                {session.volatility}
              </div>

            </div>

            {/* Metrics */}
            <div
              className="
                mt-8

                grid
                grid-cols-2
                gap-5
              "
            >

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Profit

                </p>

                <p
                  className={`
                    mt-2

                    text-xl
                    font-black

                    ${session.color}
                  `}
                >
                  {session.profit}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Win Rate

                </p>

                <p
                  className={`
                    mt-2

                    text-xl
                    font-black

                    ${session.color}
                  `}
                >
                  {session.winRate}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  AI Confidence

                </p>

                <p
                  className={`
                    mt-2

                    text-xl
                    font-black

                    ${session.color}
                  `}
                >
                  {session.confidence}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Volatility

                </p>

                <p
                  className={`
                    mt-2

                    text-xl
                    font-black

                    ${session.color}
                  `}
                >
                  {session.volatility}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SessionPerformancePanel;