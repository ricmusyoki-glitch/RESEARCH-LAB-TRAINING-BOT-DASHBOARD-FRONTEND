import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", balance: 10200 },
  { day: "Tue", balance: 10450 },
  { day: "Wed", balance: 10120 },
  { day: "Thu", balance: 10800 },
  { day: "Fri", balance: 11250 },
  { day: "Sat", balance: 11050 },
  { day: "Sun", balance: 11500 },
];

function PerformanceChart() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 h-100">

      <h2 className="text-white text-xl font-bold mb-6">
        Portfolio Performance
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <LineChart data={data}>

          <XAxis dataKey="day" stroke="#9CA3AF" />

          <YAxis stroke="#9CA3AF" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3B82F6"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PerformanceChart;