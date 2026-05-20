const riskMetrics = [
  {
    title: "Total Exposure",
    value: "12.4%",
    description: "Current market exposure",
    color: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-400/10",
  },

  {
    title: "Max Drawdown",
    value: "5.2%",
    description: "Portfolio decline protection",
    color: "text-red-400",
    bg: "bg-red-500/5",
    border: "border-red-400/10",
  },

  {
    title: "Risk Efficiency",
    value: "91%",
    description: "AI risk optimization score",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-400/10",
  },

  {
    title: "Margin Safety",
    value: "1240%",
    description: "Available margin protection",
    color: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-400/10",
  },
];

function RiskOverviewPanel() {
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
            Institutional Risk Intelligence
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
            Risk Dashboard
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
            AI-powered forex risk monitoring
            focused on exposure protection,
            drawdown prevention, and institutional
            capital preservation systems.
          </p>

        </div>

        {/* Risk Status */}
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
            Risk Systems Stable
          </p>

        </div>

      </div>

      {/* Risk Metrics */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-6

          md:grid-cols-2

          xl:grid-cols-4
        "
      >

        {riskMetrics.map((metric) => (

          <div
            key={metric.title}
            className={`
              rounded-3xl

              border
              ${metric.border}

              ${metric.bg}

              p-6
            `}
          >

            <p
              className="
                text-sm

                text-slate-400
              "
            >
              {metric.title}
            </p>

            <h3
              className={`
                mt-4

                text-3xl
                md:text-4xl

                font-black

                break-words

                ${metric.color}
              `}
            >
              {metric.value}
            </h3>

            <p
              className="
                mt-3

                text-sm
                leading-6

                text-slate-400
              "
            >
              {metric.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RiskOverviewPanel;