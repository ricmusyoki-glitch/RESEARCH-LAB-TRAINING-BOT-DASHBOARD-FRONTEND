function DrawdownProtectionPanel() {
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

      {/* Glow */}
      <div
        className="
          absolute
          -top-20
          -left-20

          h-72
          w-72

          rounded-full

          bg-red-500/10

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
          md:items-start
          md:justify-between
        "
      >

        <div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]

              text-red-400
            "
          >
            Capital Preservation Systems
          </p>

          <h2
            className="
              mt-4

              text-4xl
              md:text-5xl

              font-black
              tracking-tight

              text-white
            "
          >
            Drawdown Protection
          </h2>

          <p
            className="
              mt-5

              max-w-3xl

              text-sm
              md:text-base

              leading-7

              text-slate-400
            "
          >
            AI-powered drawdown defense systems
            designed to preserve capital, reduce
            catastrophic exposure, and stabilize
            execution during volatile market conditions.
          </p>

        </div>

        {/* Status */}
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
            Protection Systems Active
          </p>

        </div>

      </div>

      {/* Protection Grid */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-6

          xl:grid-cols-3
        "
      >

        {/* Current Drawdown */}
        <div
          className="
            rounded-3xl

            border
            border-red-400/10

            bg-red-500/5

            p-6
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            Current Drawdown
          </p>

          <h3
            className="
              mt-4

              text-4xl

              font-black

              text-red-400
            "
          >
            3.2%
          </h3>

          <p
            className="
              mt-4

              text-sm
              leading-6

              text-slate-400
            "
          >
            Current portfolio decline remains within
            acceptable institutional protection thresholds.
          </p>

        </div>

        {/* Emergency Protection */}
        <div
          className="
            rounded-3xl

            border
            border-orange-400/10

            bg-orange-500/5

            p-6
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            Emergency Risk Protocol
          </p>

          <h3
            className="
              mt-4

              text-2xl

              font-black

              text-orange-400
            "
          >
            Auto Risk Reduction
          </h3>

          <p
            className="
              mt-4

              text-sm
              leading-6

              text-slate-400
            "
          >
            AI automatically reduces lot sizing
            and exposure during high-volatility
            drawdown periods.
          </p>

        </div>

        {/* Shutdown Logic */}
        <div
          className="
            rounded-3xl

            border
            border-purple-400/10

            bg-purple-500/5

            p-6
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest

              text-slate-400
            "
          >
            Volatility Shutdown Logic
          </p>

          <h3
            className="
              mt-4

              text-2xl

              font-black

              text-purple-400
            "
          >
            AI Safety Monitoring
          </h3>

          <p
            className="
              mt-4

              text-sm
              leading-6

              text-slate-400
            "
          >
            Trading activity may pause automatically
            if market volatility exceeds safe execution
            thresholds.
          </p>

        </div>

      </div>

      {/* Bottom Intelligence */}
      <div
        className="
          relative
          z-10

          mt-10

          rounded-3xl

          border
          border-white/10

          bg-slate-800/50

          p-6
        "
      >

        <h3
          className="
            text-2xl
            font-black

            text-white
          "
        >
          AI Capital Preservation Summary
        </h3>

        <p
          className="
            mt-5

            text-sm
            md:text-base

            leading-8

            text-slate-300
          "
        >
          Current risk systems remain stable with
          controlled exposure across active forex
          positions. AI monitoring models continue
          adapting position sizing and execution
          behavior dynamically to minimize drawdown
          acceleration during unstable volatility
          conditions.
        </p>

      </div>

    </div>
  );
}

export default DrawdownProtectionPanel;