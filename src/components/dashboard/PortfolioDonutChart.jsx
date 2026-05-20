import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Forex", value: 42 },
  { name: "Crypto", value: 28 },
  { name: "Indices", value: 18 },
  { name: "Commodities", value: 12 },
];

const COLORS = ["#3B82F6", "#8B5CF6", "#06B6D4", "#F59E0B"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0B1120] border border-white/10 rounded-2xl px-4 py-3">
        <p className="text-white font-bold">{payload[0].name}</p>
        <p className="text-gray-300 text-sm">{payload[0].value}% allocation</p>
      </div>
    );
  }
  return null;
};

function PortfolioDonutChart() {
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

      {/* Glow */}
      <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-violet-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>
          <h2 className="text-white text-2xl font-bold tracking-tight">
            Asset Allocation
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Portfolio distribution by market
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
          <p className="text-violet-400 text-sm font-medium">Live</p>
        </div>

      </div>

      {/* Chart + Legend */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center gap-8">

        {/* Donut */}
        <div className="w-[220px] h-[220px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                    stroke="transparent"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4 w-full">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <p className="text-gray-300 text-sm font-medium">{entry.name}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-24 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${entry.value}%`,
                      backgroundColor: COLORS[index],
                    }}
                  ></div>
                </div>
                <p className="text-white font-bold text-sm w-8 text-right">
                  {entry.value}%
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default PortfolioDonutChart;
