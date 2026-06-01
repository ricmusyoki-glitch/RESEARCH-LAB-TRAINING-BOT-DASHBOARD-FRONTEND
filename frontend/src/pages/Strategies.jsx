import MainLayout from "../layouts/MainLayout";

import Navbar from "../components/shared/Navbar";

import StrategyManagementCard from "../components/strategies/StrategyManagementCard";
import StrategyInsightsPanel from "../components/strategies/StrategyInsightsPanel";
import StrategyPerformanceOverview from "../components/strategies/StrategyPerformanceOverview";

function Strategies() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-slate-950">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div
          className="
            space-y-8

            p-4
            md:p-6
            xl:p-8
          "
        >

          {/* Strategy Insights */}
          <StrategyInsightsPanel />

          {/* Strategy Management */}
          <div
            className="
              grid
              grid-cols-1
              gap-6
            "
          >

            <StrategyManagementCard />

          </div>

          {/* Performance Overview */}
          <StrategyPerformanceOverview />

        </div>

      </div>

    </MainLayout>
  );
}

export default Strategies;