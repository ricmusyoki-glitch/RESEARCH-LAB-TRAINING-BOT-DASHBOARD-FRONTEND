const exposureData = [
  {
    pair: "EUR/USD",
    exposure: "28%",
    direction: "Long",
    risk: "Moderate",
    color: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-400/10",
  },

  {
    pair: "GBP/USD",
    exposure: "22%",
    direction: "Long",
    risk: "Elevated",
    color: "text-orange-400",
    bg: "bg-orange-500/5",
    border: "border-orange-400/10",
  },

  {
    pair: "XAU/USD",
    exposure: "31%",
    direction: "Long",
    risk: "High",
    color: "text-red-400",
    bg: "bg-red-500/5",
    border: "border-red-400/10",
  },

  {
    pair: "USD/JPY",
    exposure: "12%",
    direction: "Short",
    risk: "Low",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-400/10",
  },
];

function ExposureAnalysisPanel() {
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
            Exposure Intelligence
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
            Exposure Analysis
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
            AI-powered forex exposure monitoring
            focused on correlated risk detection,
            directional bias analysis, and
            institutional portfolio balancing.
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
            Exposure Monitoring Active
          </p>

        </div>

      </div>

      {/* Exposure Grid */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-6

          md:grid-cols-2
        "
      >

        {exposureData.map((item, index) => (

          <div
            key={index}
            className={`
              rounded-3xl

              border
              ${item.border}

              ${item.bg}

              p-6
            `}
          >

            {/* Top */}
            <div
              className="
                flex
                items-start
                justify-between
                gap-4
              "
            >

              <div>

                <h3
                  className="
                    text-3xl
                    font-black

                    text-white
                  "
                >
                  {item.pair}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-400
                  "
                >
                  AI Exposure Tracking
                </p>

              </div>

              <div
                className={`
                  rounded-full

                  px-4
                  py-2

                  text-sm
                  font-medium

                  ${item.color}

                  bg-white/5
                `}
              >
                {item.risk}
              </div>

            </div>

            {/* Metrics */}
            <div
              className="
                mt-8

                grid
                grid-cols-2
                gap-5
              "
            >

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Exposure

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${item.color}
                  `}
                >
                  {item.exposure}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Direction

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${item.color}
                  `}
                >
                  {item.direction}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ExposureAnalysisPanel;