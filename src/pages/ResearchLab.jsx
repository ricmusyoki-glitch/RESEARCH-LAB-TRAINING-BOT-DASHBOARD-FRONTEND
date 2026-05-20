import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/shared/SideBar";
import Navbar from "../components/shared/Navbar";

import StrategyCard from "../components/research-lab/StrategyCard";
import ResearchInsightsPanel from "../components/research-lab/ResearchInsightsPanel";
import VolatilityPanel from "../components/research-lab/VolatilityPanel";

function ResearchLab() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* Strategy Rankings */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

          <StrategyCard
            name="Momentum Breakout"
            winRate="72%"
            profitFactor="2.4"
            drawdown="4.2%"
            status="Optimized"
          />

          <StrategyCard
            name="Trend Continuation"
            winRate="68%"
            profitFactor="1.9"
            drawdown="5.7%"
            status="Optimized"
          />

          <StrategyCard
            name="Mean Reversion"
            winRate="54%"
            profitFactor="1.2"
            drawdown="9.8%"
            status="Needs Review"
          />

        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          <ResearchInsightsPanel />

          <VolatilityPanel />

        </div>

      </div>

    </MainLayout>
  );
}

export default ResearchLab;