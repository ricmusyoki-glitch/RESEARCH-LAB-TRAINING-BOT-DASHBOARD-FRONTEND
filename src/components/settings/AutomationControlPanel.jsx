function AutomationControlPanel() {
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
          -bottom-20
          -right-20

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

        <div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]

              text-purple-400
            "
          >
            Autonomous Trading Infrastructure
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
            Automation Control
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
            Institutional automation systems focused
            on AI execution intelligence, autonomous
            forex operations, and real-time trading
            infrastructure management.
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
            Automation Systems Online
          </p>

        </div>

      </div>

      {/* Automation Grid */}
      <div
        className="
          relative
          z-10

          mt-10

          grid
          grid-cols-1
          gap-6

          xl:grid-cols-2
        "
      >

        {/* Autonomous Execution */}
        <div
          className="
            rounded-3xl

            border
            border-cyan-400/10

            bg-cyan-500/5

            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <h3
                className="
                  text-2xl
                  font-black

                  text-white
                "
              >
                Autonomous Execution
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400
                "
              >
                AI-controlled forex execution infrastructure.
              </p>

            </div>

            <button
              className="
                rounded-full

                bg-cyan-500/20

                px-5
                py-2

                text-sm
                font-semibold

                text-cyan-400

                transition-all
                duration-300

                hover:bg-cyan-500/30
              "
            >
              Enabled
            </button>

          </div>

        </div>

        {/* Trade Frequency */}
        <div
          className="
            rounded-3xl

            border
            border-purple-400/10

            bg-purple-500/5

            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <h3
                className="
                  text-2xl
                  font-black

                  text-white
                "
              >
                Trade Frequency
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400
                "
              >
                AI execution frequency and signal intensity.
              </p>

            </div>

            <button
              className="
                rounded-full

                bg-purple-500/20

                px-5
                py-2

                text-sm
                font-semibold

                text-purple-400

                transition-all
                duration-300

                hover:bg-purple-500/30
              "
            >
              Adaptive
            </button>

          </div>

        </div>

        {/* Market Monitoring */}
        <div
          className="
            rounded-3xl

            border
            border-emerald-400/10

            bg-emerald-500/5

            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <h3
                className="
                  text-2xl
                  font-black

                  text-white
                "
              >
                24/7 Market Monitoring
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400
                "
              >
                Continuous AI forex analysis across all sessions.
              </p>

            </div>

            <button
              className="
                rounded-full

                bg-emerald-500/20

                px-5
                py-2

                text-sm
                font-semibold

                text-emerald-400

                transition-all
                duration-300

                hover:bg-emerald-500/30
              "
            >
              Active
            </button>

          </div>

        </div>

        {/* Execution Authorization */}
        <div
          className="
            rounded-3xl

            border
            border-orange-400/10

            bg-orange-500/5

            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <h3
                className="
                  text-2xl
                  font-black

                  text-white
                "
              >
                Execution Authorization
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400
                "
              >
                Institutional AI trade execution permissions.
              </p>

            </div>

            <button
              className="
                rounded-full

                bg-orange-500/20

                px-5
                py-2

                text-sm
                font-semibold

                text-orange-400

                transition-all
                duration-300

                hover:bg-orange-500/30
              "
            >
              Authorized
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AutomationControlPanel;