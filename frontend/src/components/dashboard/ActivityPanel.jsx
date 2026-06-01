const activities = [
  {
    pair: "EUR/USD",
    type: "BUY",
    entry: "1.0842",
    tp: "1.0915",
    sl: "1.0790",
    confidence: "92%",
    reason:
      "Bullish breakout confirmed by AI momentum analysis.",
  },

  {
    pair: "NAS100",
    type: "BUY",
    entry: "18,420",
    tp: "18,760",
    sl: "18,200",
    confidence: "87%",
    reason:
      "Institutional buying pressure detected by AI engine.",
  },

  {
    pair: "BTC/USD",
    type: "SELL",
    entry: "64,200",
    tp: "61,800",
    sl: "65,400",
    confidence: "79%",
    reason:
      "Bearish divergence identified on higher timeframe.",
  },
];

function ActivityPanel() {
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
        md:p-6
        xl:p-7
        shadow-2xl
      "
    >

      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-16
          -left-16
          h-56
          w-56
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
          mb-8
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        {/* Left */}
        <div>

          <h2
            className="
              text-2xl
              md:text-3xl
              font-bold
              tracking-tight
              text-white
            "
          >
            AI Signal Feed
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            Real-time institutional trading intelligence
          </p>

        </div>

        {/* Live Badge */}
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
            Live Signals
          </p>

        </div>

      </div>

      {/* Signals */}
      <div className="relative z-10 space-y-5">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-800/60
              p-5
              transition-all
              duration-500
              hover:border-purple-400/30
              hover:bg-slate-800/80
            "
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

              {/* Left */}
              <div className="flex items-center gap-4">

                {/* Buy/Sell */}
                <div
                  className={`
                    rounded-2xl
                    px-4
                    py-2
                    text-sm
                    font-bold

                    ${
                      activity.type === "BUY"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }
                  `}
                >

                  {activity.type}

                </div>

                {/* Pair */}
                <div>

                  <h3
                    className="
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    {activity.pair}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-400
                    "
                  >
                    AI Confidence: {activity.confidence}
                  </p>

                </div>

              </div>

              {/* Live Dot */}
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  animate-pulse
                "
              />

            </div>

            {/* Levels */}
            <div
              className="
                mt-6
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
                  bg-slate-900/60
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

                <p
                  className="
                    mt-3
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {activity.entry}
                </p>

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

                <p
                  className="
                    mt-3
                    text-xl
                    font-bold
                    text-emerald-400
                  "
                >
                  {activity.tp}
                </p>

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

                <p
                  className="
                    mt-3
                    text-xl
                    font-bold
                    text-red-400
                  "
                >
                  {activity.sl}
                </p>

              </div>

            </div>

            {/* AI Reason */}
            <div
              className="
                mt-6
                rounded-2xl
                border
                border-cyan-400/10
                bg-cyan-500/5
                p-4
              "
            >

              <p
                className="
                  text-sm
                  font-semibold
                  text-cyan-400
                "
              >
                AI Analysis
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-300
                "
              >
                {activity.reason}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityPanel;