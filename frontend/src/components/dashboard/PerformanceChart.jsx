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
      "
    >

      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-16
          -right-16
          h-56
          w-56
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
          mb-8
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        {/* Left */}
        <div>

          <h2
            className="
              text-2xl
              md:text-3xl
              font-bold
              tracking-tight
              text-white
            "
          >
            Portfolio Performance
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            AI-powered portfolio growth analytics
          </p>

        </div>

        {/* Right */}
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
            Live Tracking
          </p>

        </div>

      </div>

      {/* Chart */}
      <div
        className="
          relative
          z-10
          h-72
          md:h-96
        "
      >

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="balanceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#a855f7"
                  stopOpacity={0.8}
                />

                <stop
                  offset="100%"
                  stopColor="#a855f7"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.08)"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "white",
              }}
            />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#c084fc"
              strokeWidth={4}
              fill="url(#balanceGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default PerformanceChart;