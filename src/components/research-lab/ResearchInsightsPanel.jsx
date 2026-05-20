function ResearchInsightsPanel() {
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
            AI Research Intelligence
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
            Research Insights
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
            AI-generated research observations
            focused on machine learning adaptation,
            forex pattern intelligence, and
            autonomous strategy evolution systems.
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
            Research Intelligence Active
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
            AI reinforcement models improved execution
            precision significantly after adapting to
            liquidity sweep confirmations and volatility
            expansion behavior during major forex sessions.
          </p>

        </div>

        {/* Insight 2 */}
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
            Neural Network Adaptation
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
            Neural models demonstrated stronger
            predictive confidence during high-liquidity
            market conditions while reducing unstable
            execution during consolidation phases.
          </p>

        </div>

        {/* Insight 3 */}
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
            Strategy Evolution Analysis
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
            AI experimentation systems identified
            improved profitability consistency after
            dynamically adjusting execution behavior
            according to session volatility intensity.
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
            Research Optimization Recommendation
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
            AI systems recommend increasing training
            emphasis on high-volatility London-New York
            overlap datasets to improve adaptive forex
            execution intelligence and strategy resilience.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ResearchInsightsPanel;