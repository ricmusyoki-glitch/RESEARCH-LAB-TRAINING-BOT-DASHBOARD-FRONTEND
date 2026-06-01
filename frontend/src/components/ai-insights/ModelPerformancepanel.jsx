function ModelPerformancePanel() {
  const models = [
    {
      name: "Random Forest",
      accuracy: "78.4%",
      precision: "75.2%",
      recall: "72.8%",
      profitFactor: "2.14",
      status: "Active",
      color: "text-purple-400",
      glow: "bg-purple-500/20",
    },
    {
      name: "XGBoost",
      accuracy: "82.1%",
      precision: "79.6%",
      recall: "77.4%",
      profitFactor: "2.48",
      status: "Primary",
      color: "text-cyan-400",
      glow: "bg-cyan-500/20",
    },
    {
      name: "LightGBM",
      accuracy: "80.7%",
      precision: "77.9%",
      recall: "75.3%",
      profitFactor: "2.31",
      status: "Testing",
      color: "text-emerald-400",
      glow: "bg-emerald-500/20",
    },
  ];

  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-slate-900/80

        p-6
        xl:p-8

        backdrop-blur-xl
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -bottom-24
          -left-24

          h-96
          w-96

          rounded-full

          bg-purple-500/20

          blur-3xl
        "
      />

      <div className="relative z-10">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]

            text-purple-400
          "
        >
          AI Performance
        </p>

        <h2
          className="
            mt-4

            text-3xl
            md:text-4xl

            font-black

            text-white
          "
        >
          Model Performance Center
        </h2>

        <p
          className="
            mt-4

            text-slate-400
            leading-7
          "
        >
          Monitor machine learning performance,
          prediction quality, and profitability
          across deployed models.
        </p>

        <div
          className="
            mt-10

            grid
            gap-6

            grid-cols-1
            xl:grid-cols-3
          "
        >
          {models.map((model) => (
            <div
              key={model.name}
              className="
                relative
                overflow-hidden

                rounded-3xl

                border
                border-white/10

                bg-slate-800/60

                p-6
              "
            >
              <div
                className={`
                  absolute
                  -top-10
                  -right-10

                  h-32
                  w-32

                  rounded-full

                  ${model.glow}

                  blur-3xl
                `}
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold

                      text-white
                    "
                  >
                    {model.name}
                  </h3>

                  <span
                    className={`
                      text-sm
                      font-semibold

                      ${model.color}
                    `}
                  >
                    {model.status}
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <div>
                    <p className="text-slate-400 text-sm">
                      Accuracy
                    </p>

                    <p
                      className={`
                        mt-1

                        text-2xl
                        font-black

                        ${model.color}
                      `}
                    >
                      {model.accuracy}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Precision
                    </p>

                    <p className="text-white font-semibold">
                      {model.precision}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Recall
                    </p>

                    <p className="text-white font-semibold">
                      {model.recall}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Profit Factor
                    </p>

                    <p className="text-white font-semibold">
                      {model.profitFactor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            mt-8

            rounded-3xl

            border
            border-cyan-500/20

            bg-cyan-500/5

            p-5
          "
        >
          <p
            className="
              text-sm

              text-cyan-400
            "
          >
            Current Production Model
          </p>

          <p
            className="
              mt-3

              text-slate-300
              leading-7
            "
          >
            XGBoost currently leads in predictive
            performance and profitability, making it
            the primary signal-ranking model for
            active market analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModelPerformancePanel;