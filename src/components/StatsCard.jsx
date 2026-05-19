function StatsCard({ title, value, change, changeColor }) {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-gray-400 text-sm">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

      <span className={`text-sm ${changeColor}`}>
        {change}
      </span>

    </div>
  );
}

export default StatsCard;