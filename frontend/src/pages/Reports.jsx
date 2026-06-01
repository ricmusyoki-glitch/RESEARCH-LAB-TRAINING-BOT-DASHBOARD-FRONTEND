import MainLayout from "../layouts/MainLayout";

import Navbar from "../components/shared/Navbar";

import ReportsOverviewPanel from "../components/reports/ReportsOverviewPanel";
import PerformanceReportPanel from "../components/reports/PerformanceReportPanel";
import RiskReportPanel from "../components/reports/RiskReportPanel";
import AIReportInsightsPanel from "../components/reports/AIReportInsightsPanel";

function Reports() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-slate-950">

        {/* Navbar */}
        <Navbar />

        {/* Reports Content */}
        <div
          className="
            space-y-8

            p-4
            md:p-6
            xl:p-8
          "
        >

          {/* Reports Overview */}
          <ReportsOverviewPanel />

          {/* Performance Reports */}
          <PerformanceReportPanel />

          {/* Risk Reports */}
          <RiskReportPanel />

          {/* AI Report Insights */}
          <AIReportInsightsPanel />

        </div>

      </div>

    </MainLayout>
  );
}

export default Reports;