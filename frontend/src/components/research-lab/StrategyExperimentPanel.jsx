const experiments = [
  {
    strategy: "Liquidity Sweep Model",
    status: "Running",
    confidence: "94%",
    adaptation: "High",
    result: "+18.4%",
    color: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-400/10",
  },

  {
    strategy: "Momentum Continuation AI",
    status: "Optimizing",
    confidence: "89%",
    adaptation: "Moderate",
    result: "+12.8%",
    color: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-400/10",
  },

  {
    strategy: "Volatility Expansion Engine",
    status: "Stable",
    confidence: "97%",
    adaptation: "Extreme",
    result: "+26.1%",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-400/10",
  },
];

function StrategyExperimentPanel() {
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
            AI Strategy Experimentation
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
            Strategy Experiments
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
            Autonomous AI experimentation systems
            focused on forex strategy evolution,
            reinforcement learning optimization,
            and execution intelligence adaptation.
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
            Experiment Systems Active
          </p>

        </div>

      </div>

      {/* Experiment Cards */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-6
        "
      >

        {experiments.map((experiment, index) => (

          <div
            key={index}
            className={`
              rounded-3xl

              border
              ${experiment.border}

              ${experiment.bg}

              p-6
            `}
          >

            {/* Top */}
            <div
              className="
                flex
                flex-col
                gap-4

                md:flex-row
                md:items-start
                md:justify-between
              "
            >

              <div>

                <h3
                  className="
                    text-2xl
                    md:text-3xl

                    font-black

                    text-white
                  "
                >
                  {experiment.strategy}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-400
                  "
                >
                  AI Experiment Framework
                </p>

              </div>

              <div
                className={`
                  self-start

                  rounded-full

                  px-4
                  py-2

                  text-sm
                  font-medium

                  ${experiment.color}

                  bg-white/5
                `}
              >
                {experiment.status}
              </div>

            </div>

            {/* Metrics */}
            <div
              className="
                mt-8

                grid
                grid-cols-2
                gap-5

                xl:grid-cols-4
              "
            >

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  AI Confidence

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${experiment.color}
                  `}
                >
                  {experiment.confidence}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Adaptation

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${experiment.color}
                  `}
                >
                  {experiment.adaptation}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Experiment Result

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${experiment.color}
                  `}
                >
                  {experiment.result}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Status

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${experiment.color}
                  `}
                >
                  {experiment.status}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default StrategyExperimentPanel;