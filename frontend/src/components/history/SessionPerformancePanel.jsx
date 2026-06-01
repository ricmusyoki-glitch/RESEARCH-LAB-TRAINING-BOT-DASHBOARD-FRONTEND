function SessionPerformancePanel() {
  const sessions = [
    {
      session: "London Session",
      trades: 542,
      winRate: "71.4%",
      profit: "$18,450",
      status: "Best Performing Session",
      color: "text-emerald-400",
      glow: "bg-emerald-500/20",
    },
    {
      session: "New York Session",
      trades: 438,
      winRate: "66.8%",
      profit: "$14,820",
      status: "High Volatility",
      color: "text-cyan-400",
      glow: "bg-cyan-500/20",
    },
    {
      session: "Asian Session",
      trades: 268,
      winRate: "61.2%",
      profit: "$7,340",
      status: "Lower Activity",
      color: "text-purple-400",
      glow: "bg-purple-500/20",
    },
  ];

  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-slate-900/80

        p-6
        xl:p-8

        backdrop-blur-xl
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -bottom-24
          -left-24

          h-80
          w-80

          rounded-full

          bg-purple-500/20

          blur-3xl
        "
      />

      <div className="relative z-10">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]

            text-purple-400
          "
        >
          Session Intelligence
        </p>

        <h2
          className="
            mt-4

            text-3xl
            md:text-4xl

            font-black

            text-white
          "
        >
          Session Performance Analysis
        </h2>

        <div
          className="
            mt-8

            grid
            gap-5

            grid-cols-1
            lg:grid-cols-3
          "
        >
          {sessions.map((session) => (
            <div
              key={session.session}
              className="
                relative
                overflow-hidden

                rounded-3xl

                border
                border-white/10

                bg-slate-800/60

                p-6
              "
            >
              <div
                className={`
                  absolute
                  -right-10
                  -top-10

                  h-32
                  w-32

                  rounded-full

                  ${session.glow}

                  blur-3xl
                `}
              />

              <div className="relative z-10">
                <h3
                  className="
                    text-xl
                    font-bold

                    text-white
                  "
                >
                  {session.session}
                </h3>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm">
                      Total Trades
                    </p>

                    <p
                      className="
                        mt-1

                        text-2xl
                        font-black

                        text-white
                      "
                    >
                      {session.trades}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Win Rate
                    </p>

                    <p
                      className={`
                        mt-1

                        text-xl
                        font-bold

                        ${session.color}
                      `}
                    >
                      {session.winRate}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Net Profit
                    </p>

                    <p
                      className="
                        mt-1

                        text-xl
                        font-bold

                        text-white
                      "
                    >
                      {session.profit}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-6

                    inline-flex
                    items-center

                    rounded-full

                    border
                    border-white/10

                    bg-white/5

                    px-4
                    py-2
                  "
                >
                  <p
                    className={`
                      text-sm
                      font-medium

                      ${session.color}
                    `}
                  >
                    {session.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SessionPerformancePanel;