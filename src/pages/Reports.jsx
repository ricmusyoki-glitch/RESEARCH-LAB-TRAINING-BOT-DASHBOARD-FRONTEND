import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/shared/SideBar";
import Navbar from "../components/shared/Navbar";

import ReportSummaryCard from "../components/reports/ReportSummaryCard";
import TradingJournalPanel from "../components/reports/TradingJournalpanel";
import AIReportPanel from "../components/reports/AIReportPanel";
import ExportReportsPanel from "../components/reports/ExportReportsPanel";

function Reports() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <ReportSummaryCard
            title="Monthly ROI"
            value="+18.4%"
            color="text-green-400"
          />

          <ReportSummaryCard
            title="Total Trades"
            value="148"
            color="text-blue-400"
          />

          <ReportSummaryCard
            title="Win Rate"
            value="71%"
            color="text-yellow-400"
          />

          <ReportSummaryCard
            title="Net Profit"
            value="$12,840"
            color="text-green-400"
          />

        </div>

        {/* Main Reports Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          <div className="xl:col-span-2 space-y-5">

            <TradingJournalPanel />

            <AIReportPanel />

          </div>

          <div>

            <ExportReportsPanel />

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Reports;