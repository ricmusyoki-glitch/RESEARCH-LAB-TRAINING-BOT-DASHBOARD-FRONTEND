function StrategyManagementCard() {
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
          md:items-start
          md:justify-between
        "
      >

        {/* Left */}
        <div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]

              text-purple-400
            "
          >
            Strategy Control Center
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
            AI Strategy Management
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
            Manage AI-driven forex execution,
            automation permissions, and institutional
            risk behavior across active strategies.
          </p>

        </div>

        {/* Live Status */}
        <div
          className="
            flex
            items-center
            gap-3

            self-start

            rounded-full

            border
            border-cyan-400/20

            bg-cyan-500/10

            px-4
            py-2
          "
        >

          <div
            className="
              h-2
              w-2
              rounded-full
              bg-cyan-400
              animate-pulse
            "
          />

          <p
            className="
              text-sm
              font-medium

              text-cyan-400
            "
          >
            AI Automation Active
          </p>

        </div>

      </div>

      {/* Management Grid */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-5

          md:grid-cols-2
        "
      >

        {/* AI Automation */}
        <div
          className="
            rounded-3xl

            border
            border-white/10

            bg-slate-800/60

            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p
                className="
                  text-sm
                  font-semibold

                  text-white
                "
              >
                AI Automation
              </p>

              <p
                className="
                  mt-2

                  text-sm
                  leading-6

                  text-slate-400
                "
              >
                Allow autonomous forex analysis,
                signal generation, and adaptive
                execution management.
              </p>

            </div>

            {/* Toggle */}
            <div
              className="
                relative

                h-7
                w-14

                rounded-full

                bg-emerald-500
              "
            >

              <div
                className="
                  absolute
                  right-1
                  top-1

                  h-5
                  w-5

                  rounded-full

                  bg-white
                "
              />

            </div>

          </div>

        </div>

        {/* Risk Mode */}
        <div
          className="
            rounded-3xl

            border
            border-white/10

            bg-slate-800/60

            p-6
          "
        >

          <p
            className="
              text-sm
              font-semibold

              text-white
            "
          >
            Risk Mode
          </p>

          <p
            className="
              mt-2

              text-sm
              leading-6

              text-slate-400
            "
          >
            Configure AI aggression and exposure
            behavior during dynamic market conditions.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-5

              flex
              flex-wrap
              gap-3
            "
          >

            <button
              className="
                rounded-2xl

                bg-purple-500/20

                px-4
                py-2

                text-sm
                font-medium

                text-purple-400
              "
            >
              Conservative
            </button>

            <button
              className="
                rounded-2xl

                border
                border-white/10

                bg-slate-700/50

                px-4
                py-2

                text-sm
                font-medium

                text-slate-300
              "
            >
              Balanced
            </button>

            <button
              className="
                rounded-2xl

                border
                border-white/10

                bg-slate-700/50

                px-4
                py-2

                text-sm
                font-medium

                text-slate-300
              "
            >
              Aggressive
            </button>

          </div>

        </div>

        {/* AI Market Monitoring */}
        <div
          className="
            rounded-3xl

            border
            border-white/10

            bg-slate-800/60

            p-6
          "
        >

          <p
            className="
              text-sm
              font-semibold

              text-white
            "
          >
            24/7 AI Market Monitoring
          </p>

          <p
            className="
              mt-2

              text-sm
              leading-6

              text-slate-400
            "
          >
            The AI engine continuously monitors and
            analyzes all forex market sessions for
            machine learning, behavioral adaptation,
            volatility tracking, and autonomous
            strategy optimization.
          </p>

          {/* Active Status */}
          <div
            className="
              mt-5

              inline-flex
              items-center
              gap-3

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
              Continuous Market Intelligence Active
            </p>

          </div>

        </div>

        {/* Execution Mode */}
        <div
          className="
            rounded-3xl

            border
            border-white/10

            bg-slate-800/60

            p-6
          "
        >

          <p
            className="
              text-sm
              font-semibold

              text-white
            "
          >
            Execution Mode
          </p>

          <p
            className="
              mt-2

              text-sm
              leading-6

              text-slate-400
            "
          >
            Define whether signals require manual
            confirmation or automatic execution.
          </p>

          {/* Mode */}
          <div
            className="
              mt-5

              rounded-2xl

              border
              border-emerald-400/10

              bg-emerald-500/5

              p-4
            "
          >

            <p
              className="
                text-sm
                font-semibold

                text-emerald-400
              "
            >
              Semi-Automated Execution Enabled
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StrategyManagementCard;