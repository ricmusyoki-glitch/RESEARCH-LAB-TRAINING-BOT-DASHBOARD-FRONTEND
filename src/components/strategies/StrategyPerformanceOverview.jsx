function StrategyPerformanceOverview() {
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
            Institutional Quant Analytics
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
            Strategy Performance
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
            AI-driven forex strategy analytics
            focused on execution efficiency,
            profitability consistency, and
            institutional-grade risk management.
          </p>

        </div>

        {/* AI Optimization */}
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
            AI Optimized
          </p>

        </div>

      </div>

      {/* Analytics Grid */}
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

        {/* Net Profit */}
        <div
          className="
            rounded-3xl

            border
            border-emerald-400/10

            bg-emerald-500/5

            p-6
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
            Net Profit
          </p>

          <h3
            className="
              mt-4

              text-3xl
              md:text-4xl

              font-black

              text-emerald-400
            "
          >
            +$42.8K
          </h3>

          <p
            className="
              mt-3

              text-sm

              text-slate-400
            "
          >
            6-Month Strategy Growth
          </p>

        </div>

        {/* Profit Factor */}
        <div
          className="
            rounded-3xl

            border
            border-cyan-400/10

            bg-cyan-500/5

            p-6
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
            Profit Factor
          </p>

          <h3
            className="
              mt-4

              text-3xl
              md:text-4xl

              font-black

              text-cyan-400
            "
          >
            2.84
          </h3>

          <p
            className="
              mt-3

              text-sm

              text-slate-400
            "
          >
            Risk-Adjusted Efficiency
          </p>

        </div>

        {/* Execution Efficiency */}
        <div
          className="
            rounded-3xl

            border
            border-purple-400/10

            bg-purple-500/5

            p-6
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
            Execution Accuracy
          </p>

          <h3
            className="
              mt-4

              text-3xl
              md:text-4xl

              font-black

              text-purple-400
            "
          >
            94%
          </h3>

          <p
            className="
              mt-3

              text-sm

              text-slate-400
            "
          >
            AI Entry Precision
          </p>

        </div>

        {/* Stability */}
        <div
          className="
            rounded-3xl

            border
            border-orange-400/10

            bg-orange-500/5

            p-6
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
            Stability Score
          </p>

          <h3
            className="
              mt-4

              text-3xl
              md:text-4xl

              font-black

              text-orange-400
            "
          >
            8.9/10
          </h3>

          <p
            className="
              mt-3

              text-sm

              text-slate-400
            "
          >
            Market Adaptability
          </p>

        </div>

      </div>

      {/* Bottom Analysis */}
      <div
        className="
          relative
          z-10

          mt-10

          rounded-3xl

          border
          border-white/10

          bg-slate-800/50

          p-6
        "
      >

        <h3
          className="
            text-2xl
            font-black
            text-white
          "
        >
          AI Optimization Summary
        </h3>

        <p
          className="
            mt-5

            text-sm
            md:text-base

            leading-8

            text-slate-300
          "
        >
          The Quantum Momentum Strategy has shown
          strong adaptability during high-volatility
          London and New York sessions, maintaining
          high execution precision while minimizing
          unnecessary exposure during ranging market
          conditions. AI optimization models continue
          to refine entry timing and liquidity sweep
          detection for improved intraday forex
          performance.
        </p>

      </div>

    </div>
  );
}

export default StrategyPerformanceOverview;