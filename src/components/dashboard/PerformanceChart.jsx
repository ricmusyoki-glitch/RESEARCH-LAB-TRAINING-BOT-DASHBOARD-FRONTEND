import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", balance: 10000 },
  { month: "Feb", balance: 12400 },
  { month: "Mar", balance: 11800 },
  { month: "Apr", balance: 14200 },
  { month: "May", balance: 16800 },
  { month: "Jun", balance: 19400 },
  { month: "Jul", balance: 22100 },
];

function PerformanceChart() {
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

      {/* Glow Effect */}
      <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">

        <div>

          <h2 className="text-white text-2xl font-bold tracking-tight">

            Portfolio Performance

          </h2>

          <p className="text-gray-400 text-sm mt-1">

            AI-assisted account growth analytics

          </p>

        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-3">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

          <p className="text-green-400 text-sm font-medium">

            Live Tracking

          </p>

        </div>

      </div>

      {/* Chart */}
      <div className="h-[420px] relative z-10">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">

                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                  stopOpacity={0.8}
                />

                <stop
                  offset="100%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
            />

            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#9CA3AF"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "white",
              }}
            />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#3B82F6"
              strokeWidth={4}
              fill="url(#colorBalance)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default PerformanceChart;