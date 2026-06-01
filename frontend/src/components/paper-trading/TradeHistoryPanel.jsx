const history = [
  {
    pair: "EUR/USD",
    type: "BUY",
    result: "+$420",
    entry: "1.0842",
    close: "1.0891",
    duration: "2h 14m",
    status: "Take Profit Hit",
  },

  {
    pair: "GBP/USD",
    type: "SELL",
    result: "+$860",
    entry: "1.2714",
    close: "1.2630",
    duration: "5h 22m",
    status: "Closed Manually",
  },

  {
    pair: "XAU/USD",
    type: "BUY",
    result: "-$180",
    entry: "2385",
    close: "2378",
    duration: "48m",
    status: "Stop Loss Hit",
  },

  {
    pair: "GBP/JPY",
    type: "BUY",
    result: "+$1,120",
    entry: "201.10",
    close: "203.00",
    duration: "7h 40m",
    status: "TP2 Hit",
  },
];

function TradeHistoryPanel() {
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

      {/* Purple Glow */}
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
          md:items-center
          md:justify-between
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-white
            "
          >
            Trade History
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            Historical forex execution archive
          </p>

        </div>

        {/* Badge */}
        <div
          className="
            flex
            items-center
            gap-3

            self-start

            rounded-full

            border
            border-purple-400/20

            bg-purple-500/10

            px-4
            py-2
          "
        >

          <div
            className="
              h-2
              w-2
              rounded-full
              bg-purple-400
              animate-pulse
            "
          />

          <p
            className="
              text-sm
              font-medium
              text-purple-400
            "
          >
            AI Journal
          </p>

        </div>

      </div>

      {/* Desktop Table */}
      <div
        className="
          relative
          z-10

          mt-8

          hidden
          overflow-x-auto

          xl:block
        "
      >

        <table
          className="
            w-full
            border-separate
            border-spacing-y-4
          "
        >

          <thead>

            <tr>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">

                Pair

              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">

                Type

              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">

                Entry

              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">

                Close

              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">

                Duration

              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">

                Result

              </th>

              <th className="px-4 text-left text-xs uppercase tracking-widest text-slate-400">

                Status

              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((trade, index) => (

              <tr
                key={index}
                className="
                  rounded-3xl

                  border
                  border-white/10

                  bg-slate-800/60

                  transition-all
                  duration-500

                  hover:border-purple-400/30
                  hover:bg-slate-800/80
                "
              >

                {/* Pair */}
                <td className="rounded-l-3xl px-4 py-5">

                  <div>

                    <p className="font-bold text-white">

                      {trade.pair}

                    </p>

                    <p className="mt-1 text-sm text-slate-400">

                      Closed Position

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

                {/* Close */}
                <td className="px-4 py-5 font-medium text-white">

                  {trade.close}

                </td>

                {/* Duration */}
                <td className="px-4 py-5 text-slate-300">

                  {trade.duration}

                </td>

                {/* Result */}
                <td
                  className={`
                    px-4 py-5 font-bold

                    ${
                      trade.result.includes("+")
                        ? "text-emerald-400"
                        : "text-red-400"
                    }
                  `}
                >

                  {trade.result}

                </td>

                {/* Status */}
                <td className="rounded-r-3xl px-4 py-5">

                  <p className="font-medium text-white">

                    {trade.status}

                  </p>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div
        className="
          relative
          z-10

          mt-8

          space-y-5

          xl:hidden
        "
      >

        {history.map((trade, index) => (

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

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {trade.pair}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-400
                  "
                >
                  {trade.duration}
                </p>

              </div>

              <div
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

              </div>

            </div>

            {/* Grid */}
            <div
              className="
                mt-8

                grid
                grid-cols-2
                gap-4
              "
            >

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

                  Close

                </p>

                <p className="mt-2 font-bold text-white">

                  {trade.close}

                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-slate-400">

                  Result

                </p>

                <p
                  className={`
                    mt-2 font-bold

                    ${
                      trade.result.includes("+")
                        ? "text-emerald-400"
                        : "text-red-400"
                    }
                  `}
                >

                  {trade.result}

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

export default TradeHistoryPanel;