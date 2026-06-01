function StrategyInsightsPanel() {
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

        {/* Left */}
        <div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]

              text-purple-400
            "
          >
            AI Strategy Intelligence
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
            Quantum Momentum Strategy
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
            AI-powered intraday forex execution model
            focused on liquidity sweeps, momentum
            continuation, and institutional volatility
            expansion during London and New York sessions.
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
            Active Strategy
          </p>

        </div>

      </div>

      {/* Metrics */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-5

          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {/* Confidence */}
        <div
          className="
            rounded-2xl

            border
            border-emerald-400/10

            bg-emerald-500/5

            p-5
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            AI Confidence
          </p>

          <h3
            className="
              mt-3

              text-3xl

              font-black

              text-emerald-400
            "
          >
            92%
          </h3>

        </div>

        {/* Drawdown */}
        <div
          className="
            rounded-2xl

            border
            border-red-400/10

            bg-red-500/5

            p-5
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            Max Drawdown
          </p>

          <h3
            className="
              mt-3

              text-3xl

              font-black

              text-red-400
            "
          >
            5.2%
          </h3>

        </div>

        {/* Win Rate */}
        <div
          className="
            rounded-2xl

            border
            border-cyan-400/10

            bg-cyan-500/5

            p-5
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            Win Rate
          </p>

          <h3
            className="
              mt-3

              text-3xl

              font-black

              text-cyan-400
            "
          >
            71%
          </h3>

        </div>

        {/* Avg RR */}
        <div
          className="
            rounded-2xl

            border
            border-purple-400/10

            bg-purple-500/5

            p-5
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            Avg RR
          </p>

          <h3
            className="
              mt-3

              text-3xl

              font-black

              text-purple-400
            "
          >
            1:3.4
          </h3>

        </div>

      </div>

      {/* AI Logic */}
      <div
        className="
          relative
          z-10

          mt-10

          rounded-3xl

          border
          border-purple-400/10

          bg-purple-500/5

          p-6
        "
      >

        <p
          className="
            text-sm
            font-semibold

            text-purple-400
          "
        >
          AI Execution Logic
        </p>

        <div
          className="
            mt-5

            grid
            grid-cols-1
            gap-5

            md:grid-cols-2
          "
        >

          <div>

            <p className="text-sm leading-7 text-slate-300">

              • Detects liquidity sweeps around key
              institutional levels.

            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300">

              • Confirms momentum continuation using
              volatility expansion models.

            </p>

          </div>

          <div>

            <p className="text-sm leading-7 text-slate-300">

              • Filters low-quality entries during
              ranging market conditions.

            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300">

              • Optimized for M5 and M15 intraday
              forex execution.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StrategyInsightsPanel;