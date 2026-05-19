function PaperTradesTable() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold text-white">
          Active Paper Trades
        </h2>


      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-gray-700 text-gray-400">

              <th className="pb-3">Asset</th>

              <th className="pb-3">Type</th>

              <th className="pb-3">Entry</th>

              <th className="pb-3">Current</th>

              <th className="pb-3">TP</th>

              <th className="pb-3">SL</th>

              <th className="pb-3">P/L</th>

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
                1.0871
              </td>

              <td className="py-4 text-green-400">
                1.0895
              </td>

              <td className="py-4 text-red-400">
                1.0810
              </td>

              <td className="py-4 text-green-400">
                +$320
              </td>

            </tr>

            <tr>

              <td className="py-4 text-white">
                NAS100
              </td>

              <td className="py-4 text-green-400">
                BUY
              </td>

              <td className="py-4 text-gray-300">
                18350
              </td>

              <td className="py-4 text-gray-300">
                18480
              </td>

              <td className="py-4 text-green-400">
                18520
              </td>

              <td className="py-4 text-red-400">
                18210
              </td>

              <td className="py-4 text-green-400">
                +$610
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PaperTradesTable;