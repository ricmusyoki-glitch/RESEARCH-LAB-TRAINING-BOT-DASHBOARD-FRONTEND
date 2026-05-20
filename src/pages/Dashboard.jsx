import MainLayout from "../layouts/MainLayout";

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

      <div
        className="
          min-h-screen
          bg-slate-950
        "
      >

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div
          className="
            p-4
            md:p-6
            xl:p-8
          "
        >

          {/* Stats Grid */}
          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              xl:grid-cols-4
            "
          >

            <StatsCard
              title="Total Balance"
              value="$125,430"
              change="+2.45%"
              changeColor=" text-green-400"
            />

            <StatsCard
              title="Today's P/L"
              value="$2,540"
              change="+1.95%"
              changeColor=" text-green-400"
            />

            <StatsCard
              title="Win Rate"
              value="68.7%"
              change="+4.2%"
              changeColor=" text-green-400"
            />

            <StatsCard
              title="Max Drawdown"
              value="7.32%"
              change="-1.21%"
              changeColor=" text-red-400"
            />

          </div>

          {/* Performance + Donut */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-8
              xl:grid-cols-3
            "
          >

            {/* Performance Chart */}
            <div className="xl:col-span-2">

              <PerformanceChart />

            </div>

            {/* Donut Chart */}
            <div>

              <PortfolioDonutChart />

            </div>

          </div>

          {/* Activity Feed */}
          <div className="mt-8">

            <ActivityPanel />

          </div>

          {/* Trades Table */}
          <div className="mt-8">

            <TradesTable />

          </div>

          {/* AI Insights */}
          <div className="mt-8">

            <AIInsightsPanel />

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;