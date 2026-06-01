function EquityCurveChart() {
  
  const chartData = [
    20, 35, 28, 46, 58, 66,
    74, 68, 82, 95, 110, 124,
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
            AI Market Intelligence
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
            Performance Analytics
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
            AI-driven forex performance analysis
            tracking execution quality, market
            adaptation, and institutional strategy
            intelligence across live trading activity.
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
            AI Learning Active
          </p>

        </div>

      </div>

      {/* Chart Section */}
      <div
        className="
          relative
          z-10

          mt-10
        "
      >

        {/* Chart Labels */}
        <div
          className="
            mb-6

            flex
            items-center
            justify-between
          "
        >

          <p
            className="
              text-sm
              font-medium

              text-slate-400
            "
          >
            Equity Curve Intelligence
          </p>

          <p
            className="
              text-sm
              font-semibold

              text-emerald-400
            "
          >
            +84.2% Growth
          </p>

        </div>

        {/* Chart */}
        <div
          className="
            flex
            h-72
            items-end
            justify-between
            gap-2
          "
        >

          {chartData.map((value, index) => (

            <div
              key={index}
              className="
                relative

                flex-1

                rounded-t-3xl

                bg-gradient-to-t
                from-purple-500
                via-cyan-400
                to-emerald-400

                transition-all
                duration-500

                hover:scale-105
              "
              style={{
                height: `${value * 2}px`,
              }}
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0

                  rounded-t-3xl

                  bg-white/10

                  blur-md
                "
              />

            </div>

          ))}

        </div>

      </div>

      {/* Bottom Metrics */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-5

          md:grid-cols-3
        "
      >

        {/* Confidence */}
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
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            AI Confidence
          </p>

          <h3
            className="
              mt-3

              text-3xl

              font-black

              text-cyan-400
            "
          >
            94%
          </h3>

        </div>

        {/* Precision */}
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
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            Signal Precision
          </p>

          <h3
            className="
              mt-3

              text-3xl

              font-black

              text-purple-400
            "
          >
            91%
          </h3>

        </div>

        {/* Adaptability */}
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
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            Market Adaptability
          </p>

          <h3
            className="
              mt-3

              text-3xl

              font-black

              text-emerald-400
            "
          >
            8.9/10
          </h3>

        </div>

      </div>

    </div>
  );
}

export default EquityCurveChart;