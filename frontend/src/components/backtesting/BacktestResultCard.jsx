function BacktestResultCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h2>

    </div>
  );
}

export default BacktestResultCard;