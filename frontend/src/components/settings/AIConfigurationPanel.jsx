function AIConfigurationPanel() {
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

        <div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]

              text-purple-400
            "
          >
            AI Behavioral Systems
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
            AI Configuration
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
            Institutional AI configuration systems
            focused on execution intelligence,
            reinforcement learning adaptation,
            and autonomous trading optimization.
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
            AI Systems Active
          </p>

        </div>

      </div>

      {/* Configuration Grid */}
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

        {/* AI Aggressiveness */}
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
                AI Aggressiveness
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400
                "
              >
                Controls execution intensity and signal frequency.
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
              Balanced
            </button>

          </div>

        </div>

        {/* Confidence Threshold */}
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
                Confidence Threshold
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400
                "
              >
                Minimum AI confidence required for execution.
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
              92%
            </button>

          </div>

        </div>

        {/* Reinforcement Learning */}
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
                Reinforcement Learning
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400
                "
              >
                Continuous AI adaptation and autonomous learning.
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
              Enabled
            </button>

          </div>

        </div>

        {/* Execution Mode */}
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
                Execution Intelligence
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400
                "
              >
                AI-controlled forex execution optimization mode.
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
              Adaptive
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIConfigurationPanel;