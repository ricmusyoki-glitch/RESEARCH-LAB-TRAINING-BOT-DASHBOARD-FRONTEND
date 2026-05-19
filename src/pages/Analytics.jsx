import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

import EquityCurveChart from "../components/EquityCurveChart";
import StrategyComparison from "../components/StrategyComparison";
import PortfolioAllocation from "../components/PortfolioAllocation";

function Analytics() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* Top Analytics Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">

          <div className="xl:col-span-2">
            <EquityCurveChart />
          </div>

          <div>
            <PortfolioAllocation />
          </div>

        </div>

        {/* Strategy Comparison */}
        <div>

          <StrategyComparison />

        </div>

      </div>

    </MainLayout>
  );
}

export default Analytics;