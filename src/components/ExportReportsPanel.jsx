function ExportReportsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Export Reports
      </h2>

      <div className="space-y-4">

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl text-white font-semibold">

          Download Monthly Report

        </button>

        <button className="w-full bg-[#1F2937] hover:bg-[#374151] transition p-3 rounded-xl text-gray-300 border border-gray-700">

          Export Trading Journal

        </button>

        <button className="w-full bg-[#1F2937] hover:bg-[#374151] transition p-3 rounded-xl text-gray-300 border border-gray-700">

          Export Performance Analytics

        </button>

      </div>

    </div>
  );
}

export default ExportReportsPanel;