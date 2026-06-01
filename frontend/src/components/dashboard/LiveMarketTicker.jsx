function LiveMarketTicker() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl py-4">

      <div className="flex gap-12 whitespace-nowrap animate-[ticker_20s_linear_infinite]">

        <div className="flex items-center gap-3">

          <p className="text-white font-semibold">
            EUR/USD
          </p>

          <p className="text-green-400">
            +1.28%
          </p>

        </div>

        <div className="flex items-center gap-3">

          <p className="text-white font-semibold">
            NAS100
          </p>

          <p className="text-green-400">
            +2.14%
          </p>

        </div>

        <div className="flex items-center gap-3">

          <p className="text-white font-semibold">
            BTC/USD
          </p>

          <p className="text-red-400">
            -0.82%
          </p>

        </div>

        <div className="flex items-center gap-3">

          <p className="text-white font-semibold">
            GOLD
          </p>

          <p className="text-green-400">
            +0.64%
          </p>

        </div>

      </div>

    </div>
  );
}

export default LiveMarketTicker;