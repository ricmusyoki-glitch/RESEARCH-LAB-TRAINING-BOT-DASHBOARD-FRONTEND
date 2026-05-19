import {
  FaChartPie,
  FaSignal,
  FaFlask,
  FaChartLine,
  FaRobot,
  FaCog,
  FaShieldAlt,
  FaFileAlt,
} 
from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#050816] border-r border-gray-800 p-5">

      {/* Logo Section */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white">
          Rick Research Lab
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Trading Intelligently
        </p>
      </div>

      {/* Navigation */}
      <ul className="space-y-3">

        <li className="flex items-center gap-3 bg-blue-600 p-3 rounded-xl cursor-pointer">
          <FaChartPie />
          <span>Dashboard</span>
        </li>

        <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer p-3">
          <FaSignal />
          <span>Live Signals</span>
        </li>

        <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer p-3">
          <FaChartLine />
          <span>Paper Trading</span>
        </li>

        <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer p-3">
          <FaFlask />
          <span>Research Lab</span>
        </li>

        <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer p-3">
          <FaRobot />
          <span>AI Insights</span>
        </li>

        <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer p-3">
          <FaShieldAlt />
          <span>Risk Dashboard</span>
        </li>

        <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer p-3">
          <FaFileAlt />
          <span>Reports</span>
        </li>

        <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer p-3">
          <FaCog />
          <span>Settings</span>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;