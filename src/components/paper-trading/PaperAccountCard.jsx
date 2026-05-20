function PaperAccountCard({ title, value, change, color }) {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        {value}
      </h2>

      <p className={`text-sm mt-2 ${color}`}>
        {change}
      </p>

    </div>
  );
}

export default PaperAccountCard;