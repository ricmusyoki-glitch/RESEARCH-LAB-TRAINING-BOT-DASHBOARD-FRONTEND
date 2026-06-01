function AIMonitoringFeed() {
  const logs = [
    "Model retrained successfully.",
    "Bullish regime detected on XAUUSD.",
    "Confidence upgraded from 81% to 87%.",
    "Liquidity sweep pattern confirmed.",
    "Risk score adjusted to Medium.",
    "New institutional trend identified.",
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
      <div
        className="
          absolute
          -left-24
          -bottom-24

          h-96
          w-96

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
          AI Monitoring Feed
        </p>

        <h2
          className="
            mt-4

            text-3xl

            font-black

            text-white
          "
        >
          Live AI Activity
        </h2>

        <div className="mt-8 space-y-4">
          {logs.map((log, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-4

                rounded-3xl

                border
                border-white/10

                bg-slate-800/60

                p-4
              "
            >
              <div
                className="
                  h-3
                  w-3

                  rounded-full

                  bg-cyan-400

                  animate-pulse
                "
              />

              <p className="text-slate-300">
                {log}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIMonitoringFeed;