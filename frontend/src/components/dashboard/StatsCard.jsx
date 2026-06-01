function StatsCard({
  title,
  value,
  change,
  changeColor,
}) {
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
        p-5
        md:p-6
        xl:p-7
        shadow-2xl
        transition-all
        duration-500
        hover:scale-[1.02]
        hover:border-purple-400/40
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
          bg-purple-500/20
          blur-3xl
        "
      />

      {/* Cyan Glow */}
      <div
        className="
          absolute
          -bottom-10
          -left-10
          h-40
          w-40
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Content */}
      <div className="relative z-10">

        {/* Title */}
        <p
          className="
            text-xs
            uppercase
            tracking-widest
            text-slate-400
          "
        >
          {title}
        </p>

        {/* Main Value */}
        <h2
          className="
            mt-4
            text-3xl
            md:text-4xl
            xl:text-5xl
            font-black
            tracking-tight
            text-white
          "
        >
          {value}
        </h2>

        {/* Bottom */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
          "
        >

          {/* Change */}
          <div className="flex items-center gap-2">

            <div
              className={`
                h-2
                w-2
                rounded-full
                ${changeColor}
                animate-pulse
              `}
            />

            <p
              className={`
                text-sm
                font-semibold
                ${changeColor}
              `}
            >
              {change}
            </p>

          </div>

          {/* AI Badge */}
          <div
            className="
              rounded-full
              border
              border-white/10
              bg-slate-800/80
              px-3
              py-1
              text-xs
              text-slate-300
            "
          >
            AI Verified
          </div>

        </div>

      </div>

    </div>
  );
}

export default StatsCard;