import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

import RiskMetricCard from "../components/RiskMetricCard";
import ExposurePanel from "../components/ExposurePanel";
import RiskAlertsPanel from "../components/RiskAlertsPanel";

function RiskDashboard() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* Risk Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <RiskMetricCard
            title="Current Drawdown"
            value="4.2%"
            color="text-red-400"
            description="Current account equity decline from peak balance."
          />

          <RiskMetricCard
            title="Risk/Reward Ratio"
            value="1 : 3.1"
            color="text-green-400"
            description="Average reward compared to risk exposure."
          />

          <RiskMetricCard
            title="Daily Exposure"
            value="38%"
            color="text-yellow-400"
            description="Percentage of capital currently exposed."
          />

          <RiskMetricCard
            title="Account Safety"
            value="Stable"
            color="text-blue-400"
            description="AI evaluation of overall account stability."
          />

        </div>

        {/* Risk Analysis */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          <div>
            <ExposurePanel />
          </div>

          <div className="xl:col-span-2">
            <RiskAlertsPanel />
          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default RiskDashboard; 