import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/shared/SideBar";
import Navbar from "../components/shared/Navbar";
import StatsCard from "../components/dashboard/StatsCard";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import ActivityPanel from "../components/dashboard/ActivityPanel";
import TradesTable from "../components/dashboard/TradesTable";
import AIInsightsPanel from "../components/dashboard/AIInsightsPanel";
import PortfolioDonutChart from "../components/dashboard/PortfolioDonutChart";

function Dashboard() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <StatsCard
            title="Total Balance"
            value="$125,430"
            change="+2.45%"
            changeColor="text-green-400"
          />

          <StatsCard
            title="Today's P/L"
            value="$2,540"
            change="+1.95%"
            changeColor="text-green-400"
          />

          <StatsCard
            title="Win Rate"
            value="68.7%"
            change="+4.2%"
            changeColor="text-green-400"
          />

          <StatsCard
            title="Max Drawdown"
            value="7.32%"
            change="-1.21%"
            changeColor="text-red-400"
          />

        </div>

        {/* Performance Chart + Donut */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">

          <div className="xl:col-span-2">
            <PerformanceChart />
          </div>

          <div>
            <PortfolioDonutChart />
          </div>

        </div>

        {/* AI Signal Feed + Trades + AI Insights */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">

          <div className="xl:col-span-2">
            <TradesTable />
          </div>

          <div>
            <ActivityPanel />
          </div>

        </div>

        {/* AI Insights */}
        <div className="mt-5">
          <AIInsightsPanel />
        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;
