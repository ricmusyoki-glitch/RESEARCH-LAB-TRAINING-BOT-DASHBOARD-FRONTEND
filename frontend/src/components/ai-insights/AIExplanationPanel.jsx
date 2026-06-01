function AIExplanationPanel() {
  const reasons = [
    {
      title: "Bullish Market Structure",
      description:
        "Higher highs and higher lows detected across multiple timeframes.",
      color: "text-emerald-400",
    },
    {
      title: "Strong ADX Reading",
      description:
        "Trend strength exceeds institutional threshold requirements.",
      color: "text-purple-400",
    },
    {
      title: "Liquidity Sweep Confirmed",
      description:
        "Recent liquidity grab detected before continuation movement.",
      color: "text-cyan-400",
    },
    {
      title: "London Session Active",
      description:
        "Current market session historically provides the highest probability opportunities.",
      color: "text-pink-400",
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
      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-20
          -left-20

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
          AI Reasoning Engine
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
          Why The AI Approved This Trade
        </h2>

        <p
          className="
            mt-4

            max-w-3xl

            text-slate-400
            leading-7
          "
        >
          Institutional-grade explainability showing
          the exact conditions that influenced the AI
          decision process.
        </p>

        {/* AI Decision */}
        <div
          className="
            mt-10

            rounded-3xl

            border
            border-emerald-500/20

            bg-emerald-500/5

            p-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                h-3
                w-3

                rounded-full

                bg-emerald-400

                animate-pulse
              "
            />

            <p
              className="
                font-bold

                text-emerald-400
              "
            >
              TRADE APPROVED
            </p>
          </div>

          <p
            className="
              mt-4

              text-slate-300
              leading-7
            "
          >
            AI confidence has exceeded the required
            execution threshold and market conditions
            are currently aligned with high-probability
            trend continuation behavior.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-8 space-y-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="
                rounded-3xl

                border
                border-white/10

                bg-slate-800/60

                p-5
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <div
                  className="
                    mt-1

                    flex
                    h-7
                    w-7

                    items-center
                    justify-center

                    rounded-full

                    bg-white/5
                  "
                >
                  ✓
                </div>

                <div>
                  <h3
                    className={`
                      font-semibold

                      ${reason.color}
                    `}
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-sm
                      leading-6

                      text-slate-400
                    "
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence Box */}
        <div
          className="
            mt-8

            rounded-3xl

            border
            border-purple-500/20

            bg-purple-500/5

            p-6
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <p
                className="
                  text-sm

                  text-slate-400
                "
              >
                AI Confidence Score
              </p>

              <h3
                className="
                  mt-2

                  text-5xl

                  font-black

                  text-purple-400
                "
              >
                87%
              </h3>
            </div>

            <div
              className="
                rounded-full

                border
                border-purple-500/20

                bg-purple-500/10

                px-4
                py-2
              "
            >
              <p
                className="
                  text-sm
                  font-medium

                  text-purple-400
                "
              >
                High Probability Setup
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIExplanationPanel;