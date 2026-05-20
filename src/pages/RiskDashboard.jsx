import MainLayout from "../layouts/MainLayout";

import Navbar from "../components/shared/Navbar";

import RiskOverviewPanel from "../components/risk-dashboard/RiskOverviewPanel";
import ExposureAnalysisPanel from "../components/risk-dashboard/ExposureAnalysisPanel";
import DrawdownProtectionPanel from "../components/risk-dashboard/DrawdownProtectionPanel";
import RiskInsightsPanel from "../components/risk-dashboard/RiskInsightsPanel";

function RiskDashboard() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-slate-950">

        {/* Navbar */}
        <Navbar />

        {/* Risk Dashboard Content */}
        <div
          className="
            space-y-8

            p-4
            md:p-6
            xl:p-8
          "
        >

          {/* Risk Overview */}
          <RiskOverviewPanel />

          {/* Exposure Intelligence */}
          <ExposureAnalysisPanel />

          {/* Drawdown Protection */}
          <DrawdownProtectionPanel />

          {/* AI Risk Insights */}
          <RiskInsightsPanel />

        </div>

      </div>

    </MainLayout>
  );
}

export default RiskDashboard;