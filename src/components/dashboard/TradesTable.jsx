function TradesTable() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Open Positions
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-gray-700 text-gray-400">

              <th className="pb-3">Pair</th>

              <th className="pb-3">Type</th>

              <th className="pb-3">Entry</th>

              <th className="pb-3">Current</th>

              <th className="pb-3">P/L</th>

              <th className="pb-3">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-gray-800">

              <td className="py-4 text-white">
                EUR/USD
              </td>

              <td className="py-4 text-green-400">
                BUY
              </td>

              <td className="py-4 text-gray-300">
                1.0842
              </td>

              <td className="py-4 text-gray-300">
                1.0875
              </td>

              <td className="py-4 text-green-400">
                +$320
              </td>

              <td className="py-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  Running
                </span>
              </td>

            </tr>

            <tr>

              <td className="py-4 text-white">
                GBP/USD
              </td>

              <td className="py-4 text-red-400">
                SELL
              </td>

              <td className="py-4 text-gray-300">
                1.2675
              </td>

              <td className="py-4 text-gray-300">
                1.2640
              </td>

              <td className="py-4 text-green-400">
                +$280
              </td>

              <td className="py-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  Running
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TradesTable;