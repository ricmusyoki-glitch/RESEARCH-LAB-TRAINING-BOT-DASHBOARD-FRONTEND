const filters = [
  "All Signals",
  "BUY",
  "SELL",
  "High Confidence",
  "Intraday",
  "Swing",
];

function SignalFilterBar() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/80
        backdrop-blur-xl
        p-4
        shadow-2xl
      "
    >

      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-10
          -right-10
          h-40
          w-40
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      {/* Filters */}
      <div
        className="
          relative
          z-10
          flex
          flex-wrap
          gap-3
        "
      >

        {filters.map((filter) => (

          <button
            key={filter}
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-800/60
              px-5
              py-3
              text-sm
              font-medium
              text-slate-300
              transition-all
              duration-300

              hover:border-purple-400/30
              hover:bg-purple-500/10
              hover:text-white
            "
          >

            {filter}

          </button>

        ))}

      </div>

    </div>
  );
}

export default SignalFilterBar;