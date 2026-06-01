function SettingsInsightsPanel() {
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
            AI Configuration Intelligence
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
            Settings Insights
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
            AI-generated institutional configuration
            analysis focused on automation efficiency,
            execution intelligence, and adaptive
            forex infrastructure optimization.
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
            Configuration Intelligence Active
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
            AI Execution Optimization
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
            Current execution intelligence remains
            optimized for M15 continuation setups,
            allowing adaptive trade frequency during
            elevated institutional liquidity periods.
          </p>

        </div>

        {/* Insight 2 */}
        <div
          className="
            rounded-3xl

            border
            border-red-400/10

            bg-red-500/5

            p-6
          "
        >

          <p
            className="
              text-sm
              font-semibold

              text-red-400
            "
          >
            Risk Configuration Analysis
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
            AI risk protection systems currently
            maintain stable drawdown preservation
            behavior while dynamically balancing
            correlated forex exposure conditions.
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
            Reinforcement Learning Observation
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
            Reinforcement learning systems continue
            adapting to volatility behavior patterns
            across all forex sessions while improving
            execution precision and AI confidence stability.
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
            Institutional Recommendation
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
            AI systems recommend maintaining adaptive
            execution intelligence while prioritizing
            high-confidence forex continuation setups
            during elevated volatility expansion phases.
          </p>

        </div>

      </div>

    </div>
  );
}

export default SettingsInsightsPanel;