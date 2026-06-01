function MarketSentimentPanel() {
  const assets = [
    {
      asset: "Gold (XAUUSD)",
      sentiment: "Bullish",
      color: "text-emerald-400",
    },
    {
      asset: "EURUSD",
      sentiment: "Neutral",
      color: "text-amber-400",
    },
    {
      asset: "GBPUSD",
      sentiment: "Bullish",
      color: "text-emerald-400",
    },
    {
      asset: "USDJPY",
      sentiment: "Bearish",
      color: "text-red-400",
    },
  ];

  return (
    <div
      className="
        rounded-3xl

        border
        border-white/10

        bg-slate-900/80

        p-6
        xl:p-8

        backdrop-blur-xl
      "
    >
      <p
        className="
          text-sm
          uppercase
          tracking-[0.3em]

          text-purple-400
        "
      >
        AI Sentiment Analysis
      </p>

      <h2
        className="
          mt-4

          text-3xl

          font-black

          text-white
        "
      >
        Market Sentiment
      </h2>

      <div className="mt-8 space-y-4">
        {assets.map((asset) => (
          <div
            key={asset.asset}
            className="
              flex
              items-center
              justify-between

              rounded-3xl

              border
              border-white/10

              bg-slate-800/60

              p-5
            "
          >
            <p className="font-medium text-white">
              {asset.asset}
            </p>

            <p
              className={`
                font-semibold

                ${asset.color}
              `}
            >
              {asset.sentiment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketSentimentPanel;