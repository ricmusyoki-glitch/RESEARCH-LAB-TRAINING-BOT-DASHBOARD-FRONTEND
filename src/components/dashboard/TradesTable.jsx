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
        relative overflow-hidden
        rounded-[32px]
        border border-white/[0.08]
        bg-white/[0.03]
        backdrop-blur-2xl
        p-7
        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
      "
    >

      {/* Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[240px] h-[240px] bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>

          <h2 className="text-white text-2xl font-bold tracking-tight">

            Active Positions

          </h2>

          <p className="text-gray-400 text-sm mt-1">

            Institutional trade execution monitoring

          </p>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

          <p className="text-green-400 text-sm font-medium">

            Live Trades

          </p>

        </div>

      </div>

      {/* Table */}
      <div className="relative z-10 overflow-x-auto">

        <table className="w-full border-separate border-spacing-y-4">

          <thead>

            <tr>

              <th className="text-left text-gray-400 text-xs uppercase tracking-widest font-medium px-4">

                Asset

              </th>

              <th className="text-left text-gray-400 text-xs uppercase tracking-widest font-medium px-4">

                Type

              </th>

              <th className="text-left text-gray-400 text-xs uppercase tracking-widest font-medium px-4">

                Entry

              </th>

              <th className="text-left text-gray-400 text-xs uppercase tracking-widest font-medium px-4">

                Current

              </th>

              <th className="text-left text-gray-400 text-xs uppercase tracking-widest font-medium px-4">

                Profit/Loss

              </th>

              <th className="text-left text-gray-400 text-xs uppercase tracking-widest font-medium px-4">

                Status

              </th>

            </tr>

          </thead>

          <tbody>

            {trades.map((trade, index) => (

              <tr
                key={index}
                className="
                  bg-white/[0.03]
                  border border-white/[0.05]
                  transition-all duration-500
                  hover:bg-white/[0.05]
                  hover:scale-[1.01]
                "
              >

                {/* Asset */}
                <td className="px-4 py-5 rounded-l-3xl">

                  <div>

                    <p className="text-white font-bold">

                      {trade.pair}

                    </p>

                    <p className="text-gray-400 text-sm mt-1">

                      AI monitored asset

                    </p>

                  </div>

                </td>

                {/* Type */}
                <td className="px-4 py-5">

                  <span
                    className={`
                      px-4 py-2 rounded-2xl text-sm font-bold
                      ${
                        trade.type === "BUY"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    `}
                  >

                    {trade.type}

                  </span>

                </td>

                {/* Entry */}
                <td className="px-4 py-5 text-white font-medium">

                  {trade.entry}

                </td>

                {/* Current */}
                <td className="px-4 py-5 text-white font-medium">

                  {trade.current}

                </td>

                {/* PNL */}
                <td
                  className={`
                    px-4 py-5 font-bold
                    ${
                      trade.pnl.includes("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  `}
                >

                  {trade.pnl}

                </td>

                {/* Status */}
                <td className="px-4 py-5 rounded-r-3xl">

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        w-2 h-2 rounded-full animate-pulse
                        ${
                          trade.status === "Running"
                            ? "bg-green-400"
                            : "bg-red-400"
                        }
                      `}
                    ></div>

                    <p className="text-white font-medium">

                      {trade.status}

                    </p>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TradesTable;