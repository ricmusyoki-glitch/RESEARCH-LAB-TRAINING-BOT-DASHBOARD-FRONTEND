function SignalsFilterBar() {
  return (
    <div className="flex flex-wrap gap-3 mb-6">

      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">
        All
      </button>

      <button className="bg-[#111827] text-gray-300 px-4 py-2 rounded-xl border border-gray-800 hover:bg-[#1F2937]">
        Forex
      </button>

      <button className="bg-[#111827] text-gray-300 px-4 py-2 rounded-xl border border-gray-800 hover:bg-[#1F2937]">
        Crypto
      </button>

      <button className="bg-[#111827] text-gray-300 px-4 py-2 rounded-xl border border-gray-800 hover:bg-[#1F2937]">
        Indices
      </button>

      <button className="bg-[#111827] text-gray-300 px-4 py-2 rounded-xl border border-gray-800 hover:bg-[#1F2937]">
        Commodities
      </button>

    </div>
  );
}

export default SignalsFilterBar;