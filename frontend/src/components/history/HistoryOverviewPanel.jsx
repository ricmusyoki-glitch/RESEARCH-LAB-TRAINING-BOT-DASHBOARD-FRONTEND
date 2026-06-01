function HistoryOverviewPanel() {
  const stats = [
    {
      title: "Total Trades",
      value: "1,248",
      change: "+12.4%",
      color: "text-cyan-400",
      glow: "bg-cyan-500/20",
    },
    {
      title: "Win Rate",
      value: "68.7%",
      change: "+2.1%",
      color: "text-emerald-400",
      glow: "bg-emerald-500/20",
    },
    {
      title: "Net Profit",
      value: "$48,920",
      change: "+18.7%",
      color: "text-purple-400",
      glow: "bg-purple-500/20",
    },
    {
      title: "Max Drawdown",
      value: "8.3%",
      change: "-1.2%",
      color: "text-amber-400",
      glow: "bg-amber-500/20",
    },
    {
      title: "Average RR",
      value: "1 : 2.9",
      change: "+0.4",
      color: "text-pink-400",
      glow: "bg-pink-500/20",
    },
    {
      title: "Winning Trades",
      value: "857",
      change: "+34",
      color: "text-sky-400",
      glow: "bg-sky-500/20",
    },
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

        p-6
        xl:p-8

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

      <div className="relative z-10">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]

            text-purple-400
          "
        >
          Historical Performance
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
          Trading History Overview
        </h2>

        <p
          className="
            mt-4

            max-w-3xl

            text-slate-400
            leading-7
          "
        >
          Institutional performance intelligence,
          historical execution tracking, risk analysis,
          and long-term strategy evaluation.
        </p>

        {/* Cards */}
        <div
          className="
            mt-10

            grid
            gap-5

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="
                relative
                overflow-hidden

                rounded-3xl

                border
                border-white/10

                bg-slate-800/60

                p-6
              "
            >
              <div
                className={`
                  absolute
                  -right-8
                  -top-8

                  h-24
                  w-24

                  rounded-full

                  ${stat.glow}

                  blur-2xl
                `}
              />

              <div className="relative z-10">
                <p
                  className="
                    text-sm

                    text-slate-400
                  "
                >
                  {stat.title}
                </p>

                <h3
                  className="
                    mt-4

                    text-3xl

                    font-black

                    text-white
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className={`
                    mt-3
                    text-sm
                    font-semibold

                    ${stat.color}
                  `}
                >
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HistoryOverviewPanel;