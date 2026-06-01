function SignalCard({
  pair,
  type,
  entry,
  tp,
  sl,
  confidence,
  status,
  timeframe,
  reason,
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/80
        backdrop-blur-xl
        p-5
        shadow-2xl
        transition-all
        duration-500

        hover:border-purple-400/30
        hover:bg-slate-900
      "
    >

      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-16
          -right-16
          h-56
          w-56
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      {/* Top Section */}
      <div
        className="
          relative
          z-10

          flex
          flex-col
          gap-5

          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        {/* Left */}
        <div>

          <div className="flex items-center gap-4">

            {/* BUY/SELL */}
            <div
              className={`
                rounded-2xl
                px-4
                py-2
                text-sm
                font-bold

                ${
                  type === "BUY"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                }
              `}
            >

              {type}

            </div>

            {/* Pair */}
            <h2
              className="
                text-2xl
                font-black
                tracking-tight
                text-white
              "
            >

              {pair}

            </h2>

          </div>

          {/* Timeframe */}
          <p
            className="
              mt-4
              text-sm
              text-slate-400
            "
          >

            Timeframe: {timeframe}

          </p>

        </div>

        {/* Right */}
        <div
          className="
            flex
            items-center
            gap-3
            self-start

            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10

            px-4
            py-2
          "
        >

          <div
            className="
              h-2
              w-2
              rounded-full
              bg-cyan-400
              animate-pulse
            "
          />

          <p
            className="
              text-sm
              font-medium
              text-cyan-400
            "
          >

            {status}

          </p>

        </div>

      </div>

      {/* Confidence */}
      <div
        className="
          relative
          z-10
          mt-8
        "
      >

        <div className="flex items-center justify-between">

          <p
            className="
              text-sm
              text-slate-400
            "
          >

            AI Confidence

          </p>

          <p
            className="
              text-sm
              font-bold
              text-white
            "
          >

            {confidence}

          </p>

        </div>

        {/* Progress */}
        <div
          className="
            mt-3
            h-3
            overflow-hidden
            rounded-full
            bg-slate-800
          "
        >

          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-cyan-400
            "
            style={{
              width: confidence,
            }}
          />

        </div>

      </div>

      {/* Trade Levels */}
      <div
        className="
          relative
          z-10

          mt-8

          grid
          grid-cols-1
          gap-4

          md:grid-cols-3
        "
      >

        {/* Entry */}
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-slate-800/50
            p-4
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest
              text-slate-400
            "
          >

            Entry

          </p>

          <h3
            className="
              mt-3
              text-2xl
              font-black
              text-white
            "
          >

            {entry}

          </h3>

        </div>

        {/* TP */}
        <div
          className="
            rounded-2xl
            border
            border-emerald-400/10
            bg-emerald-500/5
            p-4
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest
              text-slate-400
            "
          >

            Take Profit

          </p>

          <h3
            className="
              mt-3
              text-2xl
              font-black
              text-emerald-400
            "
          >

            {tp}

          </h3>

        </div>

        {/* SL */}
        <div
          className="
            rounded-2xl
            border
            border-red-400/10
            bg-red-500/5
            p-4
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest
              text-slate-400
            "
          >

            Stop Loss

          </p>

          <h3
            className="
              mt-3
              text-2xl
              font-black
              text-red-400
            "
          >

            {sl}

          </h3>

        </div>

      </div>

      {/* AI Analysis */}
      <div
        className="
          relative
          z-10

          mt-8

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
            font-semibold
            text-purple-400
          "
        >

          AI Market Analysis

        </p>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-slate-300
          "
        >

          {reason}

        </p>

      </div>

    </div>
  );
}

export default SignalCard;