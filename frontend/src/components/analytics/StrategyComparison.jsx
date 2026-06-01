const strategies = [
  {
    name: "Quantum Momentum",
    winRate: "72%",
    drawdown: "5.2%",
    rr: "1:3.4",
    profit: "+$24.8K",
    status: "Optimized",
  },

  {
    name: "Liquidity Sweep AI",
    winRate: "68%",
    drawdown: "4.1%",
    rr: "1:2.9",
    profit: "+$18.2K",
    status: "Learning",
  },

  {
    name: "Volatility Breakout",
    winRate: "74%",
    drawdown: "6.0%",
    rr: "1:4.1",
    profit: "+$31.4K",
    status: "High Performance",
  },
];

function StrategyComparison() {
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
          -top-20
          -left-20

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
            AI Strategy Research
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
            Strategy Comparison
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
            Compare AI-generated forex strategies
            using institutional performance metrics,
            execution intelligence, and machine
            learning optimization analytics.
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

          <div
            className="
              h-2
              w-2
              rounded-full

              bg-cyan-400

              animate-pulse
            "
          />

          <p
            className="
              text-sm
              font-medium

              text-cyan-400
            "
          >
            ML Comparison Active
          </p>

        </div>

      </div>

      {/* Desktop Table */}
      <div
        className="
          relative
          z-10

          mt-10

          hidden
          overflow-x-auto

          xl:block
        "
      >

        <table
          className="
            w-full
            border-separate
            border-spacing-y-4
          "
        >

          <thead>

            <tr>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">
                Strategy
              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">
                Win Rate
              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">
                Drawdown
              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">
                Avg RR
              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">
                Profit
              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {strategies.map((strategy, index) => (

              <tr
                key={index}
                className="
                  rounded-3xl

                  border
                  border-white/10

                  bg-slate-800/60

                  transition-all
                  duration-500

                  hover:border-purple-400/30
                  hover:bg-slate-800/80
                "
              >

                {/* Strategy */}
                <td className="rounded-l-3xl px-4 py-5">

                  <div>

                    <p className="font-bold text-white">

                      {strategy.name}

                    </p>

                    <p className="mt-1 text-sm text-slate-400">

                      AI Forex Model

                    </p>

                  </div>

                </td>

                {/* Win Rate */}
                <td className="px-4 py-5 font-bold text-emerald-400">

                  {strategy.winRate}

                </td>

                {/* Drawdown */}
                <td className="px-4 py-5 font-bold text-red-400">

                  {strategy.drawdown}

                </td>

                {/* RR */}
                <td className="px-4 py-5 font-bold text-cyan-400">

                  {strategy.rr}

                </td>

                {/* Profit */}
                <td className="px-4 py-5 font-bold text-purple-400">

                  {strategy.profit}

                </td>

                {/* Status */}
                <td className="rounded-r-3xl px-4 py-5">

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2

                      rounded-full

                      border
                      border-cyan-400/20

                      bg-cyan-500/10

                      px-4
                      py-2
                    "
                  >

                    <div
                      className="
                        h-2
                        w-2
                        rounded-full

                        bg-cyan-400

                        animate-pulse
                      "
                    />

                    <p
                      className="
                        text-sm
                        font-medium

                        text-cyan-400
                      "
                    >
                      {strategy.status}
                    </p>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div
        className="
          relative
          z-10

          mt-10

          space-y-5

          xl:hidden
        "
      >

        {strategies.map((strategy, index) => (

          <div
            key={index}
            className="
              rounded-3xl

              border
              border-white/10

              bg-slate-800/60

              p-5
            "
          >

            {/* Top */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <h3
                  className="
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  {strategy.name}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-400
                  "
                >
                  AI Forex Strategy
                </p>

              </div>

              <div
                className="
                  rounded-full

                  bg-cyan-500/10

                  px-4
                  py-2

                  text-sm
                  font-medium

                  text-cyan-400
                "
              >
                {strategy.status}
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

                  Win Rate

                </p>

                <p className="mt-2 font-bold text-emerald-400">

                  {strategy.winRate}

                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Drawdown

                </p>

                <p className="mt-2 font-bold text-red-400">

                  {strategy.drawdown}

                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Avg RR

                </p>

                <p className="mt-2 font-bold text-cyan-400">

                  {strategy.rr}

                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Profit

                </p>

                <p className="mt-2 font-bold text-purple-400">

                  {strategy.profit}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default StrategyComparison;