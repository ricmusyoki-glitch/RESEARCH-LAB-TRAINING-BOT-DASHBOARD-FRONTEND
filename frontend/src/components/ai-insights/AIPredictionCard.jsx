function AIPredictionCard() {
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
      <div
        className="
          absolute
          -right-24
          -top-24

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
          AI Prediction Engine
        </p>

        <h2
          className="
            mt-4

            text-4xl
            md:text-5xl

            font-black

            text-white
          "
        >
          BUY XAUUSD
        </h2>

        <p
          className="
            mt-4

            text-slate-400
          "
        >
          High-probability institutional setup detected.
        </p>

        <div
          className="
            mt-10

            grid
            gap-5

            grid-cols-1
            md:grid-cols-3
          "
        >
          <div
            className="
              rounded-3xl

              border
              border-white/10

              bg-slate-800/60

              p-5
            "
          >
            <p className="text-slate-400 text-sm">
              Confidence
            </p>

            <h3
              className="
                mt-3

                text-4xl

                font-black

                text-purple-400
              "
            >
              87%
            </h3>
          </div>

          <div
            className="
              rounded-3xl

              border
              border-white/10

              bg-slate-800/60

              p-5
            "
          >
            <p className="text-slate-400 text-sm">
              Risk Level
            </p>

            <h3
              className="
                mt-3

                text-4xl

                font-black

                text-cyan-400
              "
            >
              Medium
            </h3>
          </div>

          <div
            className="
              rounded-3xl

              border
              border-white/10

              bg-slate-800/60

              p-5
            "
          >
            <p className="text-slate-400 text-sm">
              Expected RR
            </p>

            <h3
              className="
                mt-3

                text-4xl

                font-black

                text-emerald-400
              "
            >
              1:3
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIPredictionCard;