function FeatureImportancePanel() {
  const features = [
    {
      name: "ADX Strength",
      value: 34,
      color: "bg-purple-500",
      textColor: "text-purple-400",
    },
    {
      name: "EMA Slope",
      value: 26,
      color: "bg-cyan-500",
      textColor: "text-cyan-400",
    },
    {
      name: "Liquidity Sweep",
      value: 18,
      color: "bg-emerald-500",
      textColor: "text-emerald-400",
    },
    {
      name: "Session Strength",
      value: 12,
      color: "bg-pink-500",
      textColor: "text-pink-400",
    },
    {
      name: "RSI Momentum",
      value: 10,
      color: "bg-amber-500",
      textColor: "text-amber-400",
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
          -top-24
          -right-24

          h-80
          w-80

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
          AI Explainability
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
          Feature Importance Analysis
        </h2>

        <p
          className="
            mt-4

            max-w-3xl

            text-slate-400
            leading-7
          "
        >
          Understand the factors that most influenced
          the AI model's current decision-making process.
        </p>

        <div className="mt-10 space-y-6">
          {features.map((feature) => (
            <div key={feature.name}>
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <p
                  className={`
                    font-semibold

                    ${feature.textColor}
                  `}
                >
                  {feature.name}
                </p>

                <p
                  className="
                    text-white
                    font-bold
                  "
                >
                  {feature.value}%
                </p>
              </div>

              <div
                className="
                  mt-3

                  h-3
                  w-full

                  overflow-hidden

                  rounded-full

                  bg-slate-800
                "
              >
                <div
                  className={`
                    h-full

                    rounded-full

                    ${feature.color}
                  `}
                  style={{
                    width: `${feature.value}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            mt-10

            rounded-3xl

            border
            border-purple-500/20

            bg-purple-500/5

            p-5
          "
        >
          <p
            className="
              text-sm

              text-purple-300
            "
          >
            Current AI Interpretation:
          </p>

          <p
            className="
              mt-3

              leading-7

              text-slate-300
            "
          >
            The model currently places the greatest
            weight on trend strength (ADX), followed
            by EMA slope alignment and liquidity sweep
            confirmation. Market conditions are
            currently classified as favorable for
            trend continuation strategies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureImportancePanel;