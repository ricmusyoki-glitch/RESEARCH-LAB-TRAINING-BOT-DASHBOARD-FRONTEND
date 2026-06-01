function PaperAccountCard() {
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

      {/* Purple Glow */}
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
      <div className="relative z-10">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-purple-400
          "
        >
          Paper Trading Account
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
          $50,000
        </h2>

        <p
          className="
            mt-4

            text-sm
            leading-7

            text-slate-400
          "
        >
          AI-managed virtual forex trading environment
          for institutional execution simulation.
        </p>

      </div>

      {/* Metrics */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-5

          md:grid-cols-2
        "
      >

        {/* Equity */}
        <div
          className="
            rounded-2xl

            border
            border-white/10

            bg-slate-800/60

            p-5
          "
        >

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Equity
          </p>

          <h3
            className="
              mt-3

              text-2xl

              font-black

              text-white
            "
          >
            $52,420
          </h3>

        </div>

        {/* Floating P/L */}
        <div
          className="
            rounded-2xl

            border
            border-emerald-400/10

            bg-emerald-500/5

            p-5
          "
        >

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Floating P/L
          </p>

          <h3
            className="
              mt-3

              text-2xl

              font-black

              text-emerald-400
            "
          >
            +$2,420
          </h3>

        </div>

        {/* Margin Level */}
        <div
          className="
            rounded-2xl

            border
            border-cyan-400/10

            bg-cyan-500/5

            p-5
          "
        >

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Margin Level
          </p>

          <h3
            className="
              mt-3

              text-2xl

              font-black

              text-cyan-400
            "
          >
            1240%
          </h3>

        </div>

        {/* Free Margin */}
        <div
          className="
            rounded-2xl

            border
            border-purple-400/10

            bg-purple-500/5

            p-5
          "
        >

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Free Margin
          </p>

          <h3
            className="
              mt-3

              text-2xl

              font-black

              text-purple-400
            "
          >
            $47,900
          </h3>

        </div>

      </div>

    </div>
  );
}

export default PaperAccountCard;