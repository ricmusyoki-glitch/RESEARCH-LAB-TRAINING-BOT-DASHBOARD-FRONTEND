import { FaBell, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Welcome back, Ric
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search Bar */}
        <div className="flex items-center bg-[#111827] px-4 py-2 rounded-xl border border-gray-800">

          <FaSearch className="text-gray-400 mr-2" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white"
          />

        </div>

        {/* Notification Button */}
        <button className="bg-[#111827] p-3 rounded-xl border border-gray-800 hover:bg-[#1F2937]">

          <FaBell className="text-white" />

        </button>

      </div>

    </div>
  );
}

export default Navbar;