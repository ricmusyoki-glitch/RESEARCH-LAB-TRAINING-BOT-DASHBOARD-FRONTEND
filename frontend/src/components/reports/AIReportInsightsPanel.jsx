function AIReportInsightsPanel() {
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
            AI Reporting Intelligence
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
            AI Report Insights
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
            AI-generated executive reporting insights
            focused on forex performance behavior,
            institutional risk intelligence, and
            machine learning execution analysis.
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
            AI Executive Analysis Active
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
            Performance Intelligence Summary
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
            AI execution systems demonstrated improved
            profitability consistency during London-New
            York overlap sessions where volatility and
            liquidity conditions supported stronger
            directional continuation behavior.
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
            Institutional Risk Observation
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
            AI protection systems reduced correlated
            USD exposure during elevated volatility
            environments, stabilizing portfolio
            drawdown conditions and preserving
            institutional capital efficiency.
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
            Machine Learning Analysis
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
            Reinforcement learning systems improved
            execution precision after adapting to
            liquidity sweep confirmations and
            volatility expansion conditions across
            major forex trading sessions.
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
            Executive Recommendation
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
            AI systems recommend prioritizing
            high-confidence M15 continuation setups
            during elevated institutional liquidity
            periods while reducing execution activity
            during unstable consolidation phases.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIReportInsightsPanel;