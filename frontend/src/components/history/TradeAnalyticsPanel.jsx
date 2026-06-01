function TradeAnalyticsPanel() {
  const analytics = [
    {
      title: "Average Trade Duration",
      value: "2h 34m",
      description: "Average holding time across all trades.",
      color: "text-cyan-400",
      glow: "bg-cyan-500/20",
    },
    {
      title: "Best Trading Day",
      value: "Tuesday",
      description: "Highest historical profitability.",
      color: "text-emerald-400",
      glow: "bg-emerald-500/20",
    },
    {
      title: "Profit Factor",
      value: "2.41",
      description: "Gross profit divided by gross loss.",
      color: "text-purple-400",
      glow: "bg-purple-500/20",
    },
    {
      title: "Recovery Factor",
      value: "4.82",
      description: "Recovery strength after drawdowns.",
      color: "text-pink-400",
      glow: "bg-pink-500/20",
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
      "
    >
      {/* Purple Glow */}
      <div
        className="
          absolute
          -bottom-20
          -right-20

          h-80
          w-80

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
          Trade Intelligence
        </p>

        <h2
          className="
            mt-4

            text-3xl
            md:text-4xl

            font-black

            text-white
          "
        >
          Historical Trade Analytics
        </h2>

        <p
          className="
            mt-4

            max-w-3xl

            text-slate-400
            leading-7
          "
        >
          Institutional-level performance metrics,
          behavioral analysis, and execution
          intelligence derived from historical trades.
        </p>

        {/* Analytics Cards */}
        <div
          className="
            mt-8

            grid
            gap-5

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {analytics.map((item) => (
            <div
              key={item.title}
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
                  -top-10
                  -right-10

                  h-32
                  w-32

                  rounded-full

                  ${item.glow}

                  blur-3xl
                `}
              />

              <div className="relative z-10">
                <p
                  className="
                    text-sm

                    text-slate-400
                  "
                >
                  {item.title}
                </p>

                <h3
                  className={`
                    mt-4

                    text-3xl

                    font-black

                    ${item.color}
                  `}
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-4

                    text-sm
                    leading-6

                    text-slate-400
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Future Chart Area */}
        <div
          className="
            mt-8

            rounded-3xl

            border
            border-white/10

            bg-slate-800/50

            p-8
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <h3
                className="
                  text-xl
                  font-bold

                  text-white
                "
              >
                Equity Growth Timeline
              </h3>

              <p
                className="
                  mt-2

                  text-slate-400
                "
              >
                Historical account growth and drawdown
                visualization.
              </p>
            </div>

            <div
              className="
                rounded-full

                border
                border-cyan-400/20

                bg-cyan-500/10

                px-4
                py-2
              "
            >
              <p
                className="
                  text-sm
                  font-medium

                  text-cyan-400
                "
              >
                Analytics Engine Active
              </p>
            </div>
          </div>

          {/* Placeholder Chart */}
          <div
            className="
              mt-8

              flex
              items-center
              justify-center

              rounded-3xl

              border
              border-dashed
              border-white/10

              h-72

              bg-slate-900/50
            "
          >
            <p
              className="
                text-slate-500
                text-lg
              "
            >
              Equity Curve Chart (Backend Data Pending)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeAnalyticsPanel;