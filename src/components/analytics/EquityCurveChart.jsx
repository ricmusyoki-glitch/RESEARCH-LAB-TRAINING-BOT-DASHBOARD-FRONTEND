import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", equity: 10000 },
  { day: "Tue", equity: 10400 },
  { day: "Wed", equity: 10250 },
  { day: "Thu", equity: 10820 },
  { day: "Fri", equity: 11200 },
  { day: "Sat", equity: 11050 },
  { day: "Sun", equity: 11500 },
];

function EquityCurveChart() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 h-[400px]">

      <h2 className="text-white text-xl font-bold mb-5">
        Equity Curve
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <AreaChart data={data}>

          <XAxis dataKey="day" stroke="#9CA3AF" />

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

export default EquityCurveChart;