function StatsCard({
  title,
  value,
  change,
  changeColor,
}) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[32px]
        border border-white/[0.08]
        bg-white/[0.03]
        backdrop-blur-2xl
        p-7
        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        transition-all duration-500
        hover:scale-[1.02]
        hover:border-white/20
      "
    >

      {/* Glow Orb */}
      <div className="absolute top-[-40px] right-[-40px] w-[140px] h-[140px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Title */}
        <p className="text-gray-400 text-sm uppercase tracking-[0.2em]">

          {title}

        </p>

        {/* Main Value */}
        <h2 className="text-5xl font-black text-white mt-4 tracking-tight">

          {value}

        </h2>

        {/* Change Indicator */}
        <div className="flex items-center gap-3 mt-6">

          <div className={`w-2 h-2 rounded-full ${changeColor} animate-pulse`} />

          <p className={`text-sm font-semibold ${changeColor}`}>

            {change}

          </p>

        </div>

      </div>

    </div>
  );
}

export default StatsCard;