import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", balance: 4000 },
  { month: "Feb", balance: 3000 },
  { month: "Mar", balance: 5000 },
  { month: "Apr", balance: 4780 },
  { month: "May", balance: 5890 },
  { month: "Jun", balance: 6390 },
];

function PerformanceChart() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 h-[400px]">

      <h2 className="text-white text-xl font-bold mb-6">
        Portfolio Performance
      </h2>

      <ResponsiveContainer width="100%" height="85%">

        <LineChart data={data}>

          <XAxis dataKey="month" stroke="#9CA3AF" />

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