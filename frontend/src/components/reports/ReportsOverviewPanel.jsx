const reportMetrics = [
  {
    title: "Generated Reports",
    value: "148",
    description: "Institutional trading reports created",
    color: "text-cyan-400",
    bg: "bg-cyan-500/5",
    border: "border-cyan-400/10",
  },

  {
    title: "AI Performance Reviews",
    value: "32",
    description: "Machine learning performance analyses",
    color: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-400/10",
  },

  {
    title: "Risk Assessments",
    value: "74",
    description: "Institutional risk intelligence reports",
    color: "text-red-400",
    bg: "bg-red-500/5",
    border: "border-red-400/10",
  },

  {
    title: "Execution Accuracy",
    value: "96%",
    description: "AI reporting precision and consistency",
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-400/10",
  },
];

function ReportsOverviewPanel() {
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
            Institutional Reporting Systems
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
            Reports Center
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
            AI-powered reporting infrastructure
            focused on forex performance analysis,
            institutional risk documentation,
            and machine learning intelligence summaries.
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
            Reporting Systems Active
          </p>

        </div>

      </div>

      {/* Metrics */}
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

        {reportMetrics.map((metric) => (

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

export default ReportsOverviewPanel;