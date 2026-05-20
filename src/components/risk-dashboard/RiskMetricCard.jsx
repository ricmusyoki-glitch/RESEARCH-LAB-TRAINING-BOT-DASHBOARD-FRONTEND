function RiskMetricCard({
  title,
  value,
  color,
  description,
}) {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h2>

      <p className="text-gray-500 text-sm mt-3">
        {description}
      </p>

    </div>
  );
}

export default RiskMetricCard;