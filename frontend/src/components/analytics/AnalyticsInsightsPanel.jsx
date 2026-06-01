function AnalyticsInsightsPanel() {
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
            AI Intelligence Insights
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
            Analytics Intelligence
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
            AI-generated market intelligence and
            machine learning observations derived
            from forex execution behavior, volatility
            adaptation, and institutional strategy
            performance analysis.
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
            AI Analysis Active
          </p>

        </div>

      </div>

      {/* Insights Grid */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-6

          xl:grid-cols-2
        "
      >

        {/* Insight 1 */}
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
              text-sm
              font-semibold

              text-emerald-400
            "
          >
            Performance Observation
          </p>

          <p
            className="
              mt-5

              text-sm
              md:text-base

              leading-8

              text-slate-300
            "
          >
            AI execution quality improved significantly
            during London and New York overlap sessions,
            where volatility expansion and liquidity
            conditions increased directional movement
            efficiency.
          </p>

        </div>

        {/* Insight 2 */}
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
              text-sm
              font-semibold

              text-cyan-400
            "
          >
            Machine Learning Adaptation
          </p>

          <p
            className="
              mt-5

              text-sm
              md:text-base

              leading-8

              text-slate-300
            "
          >
            Reinforcement learning models identified
            improved entry precision after liquidity
            sweep confirmations, reducing premature
            execution during ranging market conditions.
          </p>

        </div>

        {/* Insight 3 */}
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
              text-sm
              font-semibold

              text-purple-400
            "
          >
            Volatility Intelligence
          </p>

          <p
            className="
              mt-5

              text-sm
              md:text-base

              leading-8

              text-slate-300
            "
          >
            AI confidence levels increase during
            institutional volatility expansion periods,
            especially after high-impact forex liquidity
            injections during major session openings.
          </p>

        </div>

        {/* Insight 4 */}
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
              text-sm
              font-semibold

              text-orange-400
            "
          >
            Optimization Recommendation
          </p>

          <p
            className="
              mt-5

              text-sm
              md:text-base

              leading-8

              text-slate-300
            "
          >
            AI models recommend increasing execution
            weighting toward high-confidence M15
            continuation setups while reducing exposure
            during low-volatility consolidation periods.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsInsightsPanel;