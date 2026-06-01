const stats = [
  {
    title: "Virtual Balance",
    value: "$50,000",
    color: "text-white",
  },

  {
    title: "Open Positions",
    value: "3",
    color: "text-cyan-400",
  },

  {
    title: "Win Rate",
    value: "71%",
    color: "text-emerald-400",
  },

  {
    title: "Daily P/L",
    value: "+$2,520",
    color: "text-purple-400",
  },
];

function PaperTradingStats() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        md:grid-cols-2

        xl:grid-cols-4
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

            bg-slate-900/80

            p-6

            backdrop-blur-xl
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              -top-10
              -right-10

              h-40
              w-40

              rounded-full

              bg-purple-500/10

              blur-3xl
            "
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

            <h2
              className={`
                mt-4

                text-4xl

                font-black

                ${stat.color}
              `}
            >

              {stat.value}

            </h2>

          </div>

        </div>

      ))}

    </div>
  );
}

export default PaperTradingStats;