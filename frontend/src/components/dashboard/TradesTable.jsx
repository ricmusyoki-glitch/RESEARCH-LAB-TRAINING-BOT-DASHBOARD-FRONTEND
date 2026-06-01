const trades = [
  {
    pair: "EUR/USD",
    type: "BUY",
    entry: "1.0842",
    current: "1.0891",
    pnl: "+$420",
    status: "Running",
  },

  {
    pair: "NAS100",
    type: "BUY",
    entry: "18,420",
    current: "18,710",
    pnl: "+$860",
    status: "Running",
  },

  {
    pair: "BTC/USD",
    type: "SELL",
    entry: "64,200",
    current: "63,100",
    pnl: "+$1,240",
    status: "Running",
  },

  {
    pair: "GBP/USD",
    type: "SELL",
    entry: "1.2710",
    current: "1.2764",
    pnl: "-$210",
    status: "Drawdown",
  },
];

function TradesTable() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/80
        backdrop-blur-xl
        p-5
        md:p-6
        xl:p-7
        shadow-2xl
      "
    >

      {/* Purple Glow */}
      <div
        className="
          absolute
          -bottom-16
          -right-16
          h-56
          w-56
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
          mb-8
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        {/* Left */}
        <div>

          <h2
            className="
              text-2xl
              md:text-3xl
              font-bold
              tracking-tight
              text-white
            "
          >
            Active Positions
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            Institutional trade execution monitoring
          </p>

        </div>

        {/* Live Badge */}
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
            Live Trades
          </p>

        </div>

      </div>

      {/* Desktop Table */}
      <div className="relative z-10 hidden overflow-x-auto xl:block">

        <table className="w-full border-separate border-spacing-y-4">

          <thead>

            <tr>

              <th className="px-4 text-left text-xs font-medium uppercase tracking-widest text-slate-400">

                Asset

              </th>

              <th className="px-4 text-left text-xs font-medium uppercase tracking-widest text-slate-400">

                Type

              </th>

              <th className="px-4 text-left text-xs font-medium uppercase tracking-widest text-slate-400">

                Entry

              </th>

              <th className="px-4 text-left text-xs font-medium uppercase tracking-widest text-slate-400">

                Current

              </th>

              <th className="px-4 text-left text-xs font-medium uppercase tracking-widest text-slate-400">

                P&L

              </th>

              <th className="px-4 text-left text-xs font-medium uppercase tracking-widest text-slate-400">

                Status

              </th>

            </tr>

          </thead>

          <tbody>

            {trades.map((trade, index) => (

              <tr
                key={index}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-800/60
                  transition-all
                  duration-500
                  hover:bg-slate-800/80
                  hover:border-purple-400/30
                "
              >

                {/* Asset */}
                <td className="rounded-l-3xl px-4 py-5">

                  <div>

                    <p className="font-bold text-white">

                      {trade.pair}

                    </p>

                    <p className="mt-1 text-sm text-slate-400">

                      AI monitored asset

                    </p>

                  </div>

                </td>

                {/* Type */}
                <td className="px-4 py-5">

                  <span
                    className={`
                      rounded-2xl
                      px-4
                      py-2
                      text-sm
                      font-bold

                      ${
                        trade.type === "BUY"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }
                    `}
                  >

                    {trade.type}

                  </span>

                </td>

                {/* Entry */}
                <td className="px-4 py-5 font-medium text-white">

                  {trade.entry}

                </td>

                {/* Current */}
                <td className="px-4 py-5 font-medium text-white">

                  {trade.current}

                </td>

                {/* PNL */}
                <td
                  className={`
                    px-4 py-5 font-bold

                    ${
                      trade.pnl.includes("+")
                        ? "text-emerald-400"
                        : "text-red-400"
                    }
                  `}
                >

                  {trade.pnl}

                </td>

                {/* Status */}
                <td className="rounded-r-3xl px-4 py-5">

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        h-2
                        w-2
                        rounded-full
                        animate-pulse

                        ${
                          trade.status === "Running"
                            ? "bg-emerald-400"
                            : "bg-red-400"
                        }
                      `}
                    />

                    <p className="font-medium text-white">

                      {trade.status}

                    </p>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div className="relative z-10 space-y-5 xl:hidden">

        {trades.map((trade, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-800/60
              p-5
            "
          >

            {/* Top */}
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-lg font-bold text-white">

                  {trade.pair}

                </h3>

                <p className="mt-1 text-sm text-slate-400">

                  AI monitored asset

                </p>

              </div>

              <span
                className={`
                  rounded-2xl
                  px-4
                  py-2
                  text-sm
                  font-bold

                  ${
                    trade.type === "BUY"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  }
                `}
              >

                {trade.type}

              </span>

            </div>

            {/* Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4">

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Entry

                </p>

                <p className="mt-2 font-bold text-white">

                  {trade.entry}

                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Current

                </p>

                <p className="mt-2 font-bold text-white">

                  {trade.current}

                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  P&L

                </p>

                <p
                  className={`
                    mt-2 font-bold

                    ${
                      trade.pnl.includes("+")
                        ? "text-emerald-400"
                        : "text-red-400"
                    }
                  `}
                >

                  {trade.pnl}

                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Status

                </p>

                <p className="mt-2 font-bold text-white">

                  {trade.status}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TradesTable;