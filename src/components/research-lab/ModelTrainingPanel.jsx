const models = [
  {
    name: "Liquidity Sweep Neural Net",
    accuracy: "94%",
    progress: "82%",
    status: "Training",
    color: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-400/10",
  },

  {
    name: "Volatility Prediction AI",
    accuracy: "91%",
    progress: "67%",
    status: "Optimizing",
    color: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-400/10",
  },

  {
    name: "Execution Timing Engine",
    accuracy: "96%",
    progress: "93%",
    status: "Stable",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-400/10",
  },
];

function ModelTrainingPanel() {
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
            Machine Learning Systems
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
            Model Training
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
            AI model training infrastructure focused
            on neural network optimization, forex
            pattern recognition, and reinforcement
            learning adaptation systems.
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
            Neural Systems Active
          </p>

        </div>

      </div>

      {/* Models */}
      <div
        className="
          relative
          z-10

          mt-10

          space-y-6
        "
      >

        {models.map((model, index) => (

          <div
            key={index}
            className={`
              rounded-3xl

              border
              ${model.border}

              ${model.bg}

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
                md:items-center
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
                  {model.name}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-400
                  "
                >
                  AI Training Infrastructure
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

                  ${model.color}

                  bg-white/5
                `}
              >
                {model.status}
              </div>

            </div>

            {/* Metrics */}
            <div
              className="
                mt-8

                grid
                grid-cols-1
                gap-5

                md:grid-cols-2
              "
            >

              {/* Accuracy */}
              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Prediction Accuracy

                </p>

                <p
                  className={`
                    mt-3

                    text-3xl
                    font-black

                    ${model.color}
                  `}
                >
                  {model.accuracy}
                </p>

              </div>

              {/* Training Progress */}
              <div>

                <div className="flex items-center justify-between">

                  <p className="text-xs uppercase tracking-widest text-slate-400">

                    Training Progress

                  </p>

                  <p
                    className={`
                      text-sm
                      font-bold

                      ${model.color}
                    `}
                  >
                    {model.progress}
                  </p>

                </div>

                {/* Progress Bar */}
                <div
                  className="
                    mt-4

                    h-4
                    overflow-hidden

                    rounded-full

                    bg-slate-800
                  "
                >

                  <div
                    className={`
                      h-full

                      rounded-full

                      ${model.bg}
                    `}
                    style={{
                      width: model.progress,
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ModelTrainingPanel;