const riskReports = [
  {
    category: "Drawdown Stability",
    value: "3.2%",
    assessment: "Controlled",
    protection: "Active",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-400/10",
  },

  {
    category: "Volatility Exposure",
    value: "Moderate",
    assessment: "Elevated",
    protection: "Adaptive",
    color: "text-orange-400",
    bg: "bg-orange-500/5",
    border: "border-orange-400/10",
  },

  {
    category: "Correlated USD Risk",
    value: "28%",
    assessment: "Monitored",
    protection: "Balanced",
    color: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-400/10",
  },
];

function RiskReportPanel() {
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
          -top-20
          -right-20

          h-72
          w-72

          rounded-full

          bg-red-500/10

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

              text-red-400
            "
          >
            Institutional Risk Reporting
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
            Risk Reports
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
            AI-powered institutional risk reporting
            focused on forex exposure analysis,
            capital preservation systems, and
            volatility protection intelligence.
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
            Risk Reporting Stable
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

        {riskReports.map((report, index) => (

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
                  {report.category}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-400
                  "
                >
                  Institutional Risk Analysis
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
                {report.assessment}
              </div>

            </div>

            {/* Metrics */}
            <div
              className="
                mt-8

                grid
                grid-cols-1
                gap-5

                md:grid-cols-3
              "
            >

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Risk Value

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${report.color}
                  `}
                >
                  {report.value}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Assessment

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${report.color}
                  `}
                >
                  {report.assessment}
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Protection Status

                </p>

                <p
                  className={`
                    mt-2

                    text-2xl
                    font-black

                    ${report.color}
                  `}
                >
                  {report.protection}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RiskReportPanel;