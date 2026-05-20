import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/shared/SideBar";
import Navbar from "../components/shared/Navbar";

import StrategyManagementCard from "../components/strategies/StrategyManagementCard";
import StrategyInsightsPanel from "../components/strategies/StrategyInsightsPanel";

function Strategies() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* Strategy Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">

          <div className="xl:col-span-2 space-y-5">

            <StrategyManagementCard
              name="Momentum Breakout"
              category="Forex Scalping"
              roi="+24.5%"
              winRate="72%"
              risk="Low"
              status="Active"
              description="AI-driven breakout strategy focused on momentum continuation after volatility expansion."
            />

            <StrategyManagementCard
              name="Trend Continuation"
              category="Swing Trading"
              roi="+18.2%"
              winRate="68%"
              risk="Medium"
              status="Active"
              description="Multi-timeframe trend-following strategy designed for sustained directional movement."
            />

            <StrategyManagementCard
              name="Mean Reversion"
              category="Counter Trend"
              roi="-3.7%"
              winRate="54%"
              risk="High"
              status="Inactive"
              description="Reversal-focused system attempting to capture overextended market corrections."
            />

          </div>

          {/* Insights */}
          <div>

            <StrategyInsightsPanel />

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Strategies;