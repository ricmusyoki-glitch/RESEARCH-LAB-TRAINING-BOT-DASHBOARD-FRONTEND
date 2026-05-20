function SecuritySettingsPanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Security Settings
      </h2>

      <div className="space-y-4">

        <button className="w-full bg-[#1F2937] hover:bg-[#374151] transition p-3 rounded-xl text-gray-300 border border-gray-700">

          Change Password

        </button>

        <button className="w-full bg-[#1F2937] hover:bg-[#374151] transition p-3 rounded-xl text-gray-300 border border-gray-700">

          Enable Two-Factor Authentication

        </button>

        <button className="w-full bg-red-500 hover:bg-red-600 transition p-3 rounded-xl text-white">

          Logout Account

        </button>

      </div>

    </div>
  );
}

export default SecuritySettingsPanel;