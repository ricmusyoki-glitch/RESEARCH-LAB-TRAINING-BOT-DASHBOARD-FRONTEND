import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", equity: 10000 },
  { month: "Feb", equity: 11200 },
  { month: "Mar", equity: 12400 },
  { month: "Apr", equity: 11900 },
  { month: "May", equity: 13800 },
  { month: "Jun", equity: 14900 },
];

function BacktestEquityChart() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 h-[400px]">

      <h2 className="text-white text-xl font-bold mb-5">
        Backtest Equity Curve
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <AreaChart data={data}>

          <XAxis dataKey="month" stroke="#9CA3AF" />

          <YAxis stroke="#9CA3AF" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="equity"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.2}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default BacktestEquityChart;