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

import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const navLinkClass = (path) =>
    `flex items-center gap-3 p-3 rounded-xl transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-[#111827]"
    }`;

  return (
    <div className="w-64 min-h-screen bg-[#050816] border-r border-gray-800 p-5">

      {/* Logo */}
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
          className={navLinkClass("/")}
        >
          <FaChartPie />
          <span>Dashboard</span>
        </Link>

        {/* Live Signals */}
        <Link
          to="/signals"
          className={navLinkClass("/signals")}
        >
          <FaSignal />
          <span>Live Signals</span>
        </Link>

        {/* Paper Trading */}
        <Link
          to="/paper-trading"
          className={navLinkClass("/paper-trading")}
        >
          <FaChartLine />
          <span>Paper Trading</span>
        </Link>

        {/* Strategies */}
        <Link
          to="/strategies"
          className={navLinkClass("/strategies")}
        >
          <FaBrain />
          <span>Strategies</span>
        </Link>

        {/* Backtesting */}
        <Link
          to="/backtesting"
          className={navLinkClass("/backtesting")}
        >
          <FaVial />
          <span>Backtesting</span>
        </Link>

        {/* Research Lab */}
        <Link
          to="/research"
          className={navLinkClass("/research")}
        >
          <FaFlask />
          <span>Research Lab</span>
        </Link>

        {/* Analytics */}
        <Link
          to="/analytics"
          className={navLinkClass("/analytics")}
        >
          <FaChartPie />
          <span>Analytics</span>
        </Link>

        {/* Risk Dashboard */}
        <Link
          to="/risk-dashboard"
          className={navLinkClass("/risk-dashboard")}
        >
          <FaShieldAlt />
          <span>Risk Dashboard</span>
        </Link>

        {/* Reports */}
        <Link
          to="/reports"
          className={navLinkClass("/reports")}
        >
          <FaFileAlt />
          <span>Reports</span>
        </Link>

        {/* AI Insights */}
        <Link
          to="/ai-insights"
          className={navLinkClass("/ai-insights")}
        >
          <FaRobot />
          <span>AI Insights</span>
        </Link>

        {/* Settings */}
        <Link
          to="/settings"
          className={navLinkClass("/settings")}
        >
          <FaCog />
          <span>Settings</span>
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;