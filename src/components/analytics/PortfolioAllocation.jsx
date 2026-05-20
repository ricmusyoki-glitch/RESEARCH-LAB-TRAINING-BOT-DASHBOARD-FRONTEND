const allocations = [
  { label: "Forex", value: "45%", width: "45%", color: "blue" },
  { label: "Indices", value: "35%", width: "35%", color: "green" },
  { label: "Crypto", value: "20%", width: "20%", color: "yellow" },
];

const labelColors = { blue: "text-blue-400", green: "text-green-400", yellow: "text-yellow-400" };
const barColors = { blue: "bg-blue-500", green: "bg-green-500", yellow: "bg-yellow-500" };

function PortfolioAllocation() {
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
      "
    >

      <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>
          <h2 className="text-white text-2xl font-bold tracking-tight">Portfolio Allocation</h2>
          <p className="text-gray-400 text-sm mt-1">Capital distribution by market</p>
        </div>

      </div>

      <div className="space-y-6 relative z-10">

        {allocations.map((a, index) => (
          <div key={index}>

            <div className="flex justify-between mb-3">
              <p className="text-gray-300 font-medium">{a.label}</p>
              <p className={`font-bold text-sm ${labelColors[a.color]}`}>{a.value}</p>
            </div>

            <div className="w-full bg-white/[0.06] rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-700 ${barColors[a.color]}`}
                style={{ width: a.width }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default PortfolioAllocation;
