function RiskInsightsPanel() {
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
            AI Risk Intelligence
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
            Risk Insights
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
            AI-generated forex risk analysis focused
            on volatility adaptation, correlated
            exposure detection, and institutional
            capital preservation intelligence.
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
            Risk Analysis Stable
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
            Correlated Exposure Detection
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
            AI models detected elevated USD correlation
            exposure across multiple forex positions,
            triggering adaptive exposure balancing to
            minimize directional concentration risk.
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
            Volatility Warning
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
            Market volatility increased significantly
            during high-impact liquidity expansion,
            causing AI systems to temporarily reduce
            execution aggression and position sizing.
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
            Drawdown Stability
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
            AI protection systems successfully stabilized
            portfolio drawdown conditions through adaptive
            lot-sizing reduction and dynamic volatility
            filtering mechanisms.
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
            Risk Optimization Recommendation
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
            AI systems recommend reducing simultaneous
            correlated forex exposure during extreme
            volatility periods while prioritizing
            high-confidence execution environments.
          </p>

        </div>

      </div>

    </div>
  );
}

export default RiskInsightsPanel;