function StrategyHistoryPanel() {
  const strategies = [
    {
      name: "Donchian Breakout",
      trades: 312,
      winRate: "72.4%",
      profitFactor: "2.31",
      drawdown: "5.1%",
      color: "text-purple-400",
      glow: "bg-purple-500/20",
    },
    {
      name: "Liquidity Sweep",
      trades: 274,
      winRate: "68.9%",
      profitFactor: "2.04",
      drawdown: "6.3%",
      color: "text-cyan-400",
      glow: "bg-cyan-500/20",
    },
    {
      name: "Market Structure",
      trades: 198,
      winRate: "74.8%",
      profitFactor: "2.72",
      drawdown: "4.2%",
      color: "text-emerald-400",
      glow: "bg-emerald-500/20",
    },
    {
      name: "Trend Continuation",
      trades: 221,
      winRate: "69.7%",
      profitFactor: "2.18",
      drawdown: "5.8%",
      color: "text-pink-400",
      glow: "bg-pink-500/20",
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
          -top-24
          -right-24

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
          Strategy Archive
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
          Historical Strategy Performance
        </h2>

        <p
          className="
            mt-4

            text-slate-400
            leading-7
          "
        >
          Track how every strategy has performed
          across historical market conditions,
          sessions, and volatility environments.
        </p>

        <div
          className="
            mt-8

            grid
            gap-5

            grid-cols-1
            lg:grid-cols-2
          "
        >
          {strategies.map((strategy) => (
            <div
              key={strategy.name}
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
                  -top-10
                  -right-10

                  h-32
                  w-32

                  rounded-full

                  ${strategy.glow}

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
                  {strategy.name}
                </h3>

                <div
                  className="
                    mt-6

                    grid
                    grid-cols-2

                    gap-5
                  "
                >
                  <div>
                    <p className="text-slate-400 text-sm">
                      Trades
                    </p>

                    <p
                      className="
                        mt-1

                        text-2xl
                        font-black

                        text-white
                      "
                    >
                      {strategy.trades}
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

                        ${strategy.color}
                      `}
                    >
                      {strategy.winRate}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Profit Factor
                    </p>

                    <p
                      className="
                        mt-1

                        text-xl
                        font-bold

                        text-white
                      "
                    >
                      {strategy.profitFactor}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Drawdown
                    </p>

                    <p
                      className="
                        mt-1

                        text-xl
                        font-bold

                        text-amber-400
                      "
                    >
                      {strategy.drawdown}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-6

                    h-2
                    w-full

                    overflow-hidden

                    rounded-full

                    bg-slate-700
                  "
                >
                  <div
                    className="
                      h-full
                      w-[72%]

                      rounded-full

                      bg-purple-500
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StrategyHistoryPanel;