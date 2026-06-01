function HistoricalTradesTable() {
  const trades = [
    {
      id: "#TRD-001",
      asset: "XAUUSD",
      strategy: "Donchian Breakout",
      direction: "BUY",
      entry: "3352.40",
      exit: "3367.90",
      lotSize: "0.50",
      profit: "+$775",
      drawdown: "1.4%",
      confidence: "89%",
      session: "London",
      status: "Win",
    },
    {
      id: "#TRD-002",
      asset: "EURUSD",
      strategy: "Liquidity Sweep",
      direction: "SELL",
      entry: "1.0820",
      exit: "1.0791",
      lotSize: "1.00",
      profit: "+$290",
      drawdown: "0.9%",
      confidence: "84%",
      session: "New York",
      status: "Win",
    },
    {
      id: "#TRD-003",
      asset: "GBPUSD",
      strategy: "Market Structure",
      direction: "BUY",
      entry: "1.2734",
      exit: "1.2708",
      lotSize: "0.75",
      profit: "-$195",
      drawdown: "2.1%",
      confidence: "73%",
      session: "London",
      status: "Loss",
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
      {/* Glow */}
      <div
        className="
          absolute
          -bottom-24
          -right-24

          h-96
          w-96

          rounded-full

          bg-purple-500/20

          blur-3xl
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-4

            lg:flex-row
            lg:items-center
            lg:justify-between
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
              Trade Archive
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
              Historical Trades
            </h2>

            <p
              className="
                mt-4

                text-slate-400
              "
            >
              Institutional trade journal and
              execution archive.
            </p>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search trades..."
            className="
              rounded-2xl

              border
              border-white/10

              bg-slate-800/70

              px-5
              py-3

              text-white

              outline-none

              focus:border-purple-500/50
            "
          />
        </div>

        {/* Filters */}
        <div
          className="
            mt-8

            flex
            flex-wrap
            gap-3
          "
        >
          <button
            className="
              rounded-full

              bg-purple-500/20

              px-4
              py-2

              text-sm
              font-medium

              text-purple-400
            "
          >
            All Trades
          </button>

          <button
            className="
              rounded-full

              border
              border-white/10

              bg-slate-800/60

              px-4
              py-2

              text-sm

              text-slate-300
            "
          >
            Winners
          </button>

          <button
            className="
              rounded-full

              border
              border-white/10

              bg-slate-800/60

              px-4
              py-2

              text-sm

              text-slate-300
            "
          >
            Losses
          </button>
        </div>

        {/* Table */}
        <div
          className="
            mt-8

            overflow-x-auto
          "
        >
          <table className="w-full">
            <thead>
              <tr
                className="
                  border-b
                  border-white/10
                "
              >
                {[
                  "Trade ID",
                  "Asset",
                  "Strategy",
                  "Direction",
                  "Entry",
                  "Exit",
                  "Lot",
                  "Profit",
                  "DD",
                  "Confidence",
                  "Session",
                  "Status",
                ].map((header) => (
                  <th
                    key={header}
                    className="
                      py-4
                      text-left

                      text-xs
                      uppercase

                      tracking-wider

                      text-slate-500
                    "
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {trades.map((trade) => (
                <tr
                  key={trade.id}
                  className="
                    border-b
                    border-white/5

                    hover:bg-white/5

                    transition-all
                  "
                >
                  <td className="py-5 text-white">
                    {trade.id}
                  </td>

                  <td className="text-white">
                    {trade.asset}
                  </td>

                  <td className="text-slate-300">
                    {trade.strategy}
                  </td>

                  <td>
                    <span
                      className={`
                        ${
                          trade.direction === "BUY"
                            ? "text-emerald-400"
                            : "text-red-400"
                        }

                        font-semibold
                      `}
                    >
                      {trade.direction}
                    </span>
                  </td>

                  <td className="text-slate-300">
                    {trade.entry}
                  </td>

                  <td className="text-slate-300">
                    {trade.exit}
                  </td>

                  <td className="text-slate-300">
                    {trade.lotSize}
                  </td>

                  <td
                    className={
                      trade.profit.startsWith("+")
                        ? "text-emerald-400 font-semibold"
                        : "text-red-400 font-semibold"
                    }
                  >
                    {trade.profit}
                  </td>

                  <td className="text-amber-400">
                    {trade.drawdown}
                  </td>

                  <td className="text-cyan-400">
                    {trade.confidence}
                  </td>

                  <td className="text-slate-300">
                    {trade.session}
                  </td>

                  <td>
                    <span
                      className={`
                        rounded-full

                        px-3
                        py-1

                        text-xs
                        font-medium

                        ${
                          trade.status === "Win"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                        }
                      `}
                    >
                      {trade.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div
          className="
            mt-8

            flex
            items-center
            justify-between
          "
        >
          <p className="text-slate-500">
            Showing recent historical trades
          </p>

          <button
            className="
              rounded-2xl

              bg-purple-500/20

              px-5
              py-3

              text-sm
              font-medium

              text-purple-400
            "
          >
            View Full Archive
          </button>
        </div>
      </div>
    </div>
  );
}

export default HistoricalTradesTable;