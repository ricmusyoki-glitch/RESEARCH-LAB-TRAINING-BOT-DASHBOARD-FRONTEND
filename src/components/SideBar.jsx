import {
  FaChartPie,
  FaSignal,
  FaFlask,
  FaChartLine,
  FaRobot,
  FaCog,
  FaShieldAlt,
  FaFileAlt,
  FaBrain,
  FaVial,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#050816] border-r border-gray-800 p-5">

      {/* Logo Section */}
      <div className="mb-10">

        <h1 className="text-2xl font-bold text-white">
          Rick Research Lab
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Trading Intelligence
        </p>

      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2">

        {/* Dashboard */}
        <Link
          to="/"
          className="flex items-center gap-3 bg-blue-600 p-3 rounded-xl text-white"
        >
          <FaChartPie />
          <span>Dashboard</span>
        </Link>

        {/* Live Signals */}
        <Link
          to="/signals"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaSignal />
          <span>Live Signals</span>
        </Link>

        {/* Paper Trading */}
        <Link
          to="/paper-trading"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaChartLine />
          <span>Paper Trading</span>
        </Link>

        {/* Strategies */}
        <Link
          to="/strategies"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaBrain />
          <span>Strategies</span>
        </Link>

        {/* Backtesting */}
        <Link
          to="/backtesting"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaVial />
          <span>Backtesting</span>
        </Link>

        {/* Research Lab */}
        <Link
          to="/research"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaFlask />
          <span>Research Lab</span>
        </Link>

        {/* Analytics */}
        <Link
          to="/analytics"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaChartPie />
          <span>Analytics</span>
        </Link>

        {/* Risk Dashboard */}
        <Link
          to="/risk-dashboard"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaShieldAlt />
          <span>Risk Dashboard</span>
        </Link>

        {/* Reports */}
        <Link
          to="/reports"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaFileAlt />
          <span>Reports</span>
        </Link>

        {/* AI Insights */}
        <Link
          to="/ai-insights"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaRobot />
          <span>AI Insights</span>
        </Link>

        {/* Settings */}
        <Link
          to="/settings"
          className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#111827] p-3 rounded-xl transition"
        >
          <FaCog />
          <span>Settings</span>
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;