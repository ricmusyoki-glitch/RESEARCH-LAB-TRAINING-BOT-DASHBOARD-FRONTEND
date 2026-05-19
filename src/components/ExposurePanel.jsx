function ExposurePanel() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">

      <h2 className="text-white text-xl font-bold mb-5">
        Market Exposure
      </h2>

      <div className="space-y-5">

        <div>

          <div className="flex justify-between mb-2">

            <p className="text-gray-300">
              Forex Exposure
            </p>

            <p className="text-blue-400">
              45%
            </p>

          </div>

          <div className="w-full bg-[#1F2937] rounded-full h-3">

            <div className="bg-blue-500 h-3 rounded-full w-[45%]"></div>

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <p className="text-gray-300">
              Indices Exposure
            </p>

            <p className="text-green-400">
              35%
            </p>

          </div>

          <div className="w-full bg-[#1F2937] rounded-full h-3">

            <div className="bg-green-500 h-3 rounded-full w-[35%]"></div>

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <p className="text-gray-300">
              Crypto Exposure
            </p>

            <p className="text-yellow-400">
              20%
            </p>

          </div>

          <div className="w-full bg-[#1F2937] rounded-full h-3">

            <div className="bg-yellow-500 h-3 rounded-full w-[20%]"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ExposurePanel;