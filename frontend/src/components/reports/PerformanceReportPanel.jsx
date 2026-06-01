const performanceReports = [
  {
    session: "London Session",
    profit: "+$18.4K",
    winRate: "78%",
    execution: "94%",
    status: "High Performance",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-400/10",
  },

  {
    session: "New York Session",
    profit: "+$14.1K",
    winRate: "72%",
    execution: "91%",
    status: "Stable",
    color: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-400/10",
  },

  {
    session: "Asian Session",
    profit: "+$4.8K",
    winRate: "61%",
    execution: "84%",
    status: "Low Volatility",
    color: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-400/10",
  },
];

function PerformanceReportPanel() {
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
            AI Performance Reporting
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
            Performance Reports
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
            Institutional trading performance
            analytics focused on forex profitability,
            execution quality, and AI-driven
            trading intelligence reporting.
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
            Performance Analysis Active
          </p>

        </div>

      </div>

      {/* Reports */}
      <div
        className="
          relative
          z-10

          mt-10

          space-y-6
        "
      >

        {performanceReports.map((report, index) => (

          <div
            key={index}
            className={`
              rounded-3xl

              border
              ${report.border}

              ${report.bg}

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
                md:items-start
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
                  {report.session}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-400
                  "
                >
                  Institutional Session Analysis
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

                  ${report.color}

                  bg-white/5
                `}
              >
                {report.status}
              </div>

            </div>

            {/* Metrics */}
            <div
              className="
                mt-8

                grid
                grid-cols-2
                gap-5

                xl:grid-cols-4
              "
            >

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Profitability

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${report.color}
                  `}
                >
                  {report.profit}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Win Rate

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${report.color}
                  `}
                >
                  {report.winRate}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Execution Quality

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${report.color}
                  `}
                >
                  {report.execution}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Status

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${report.color}
                  `}
                >
                  {report.status}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PerformanceReportPanel;