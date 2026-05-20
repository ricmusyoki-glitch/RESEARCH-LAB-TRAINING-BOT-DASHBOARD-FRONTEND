import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/shared/SideBar";
import Navbar from "../components/shared/Navbar";

import BacktestConfigPanel from "../components/backtesting/BacktestConfigPanel";
import BacktestResultCard from "../components/backtesting/BacktestResultCard";
import BacktestEquityChart from "../components/backtesting/BacktestEquityChart";
import BacktestInsightsPanel from "../components/backtesting/BacktestInsightsPanel";

function Backtesting() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* Top Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">

          <div>
            <BacktestConfigPanel />
          </div>

          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">

            <BacktestResultCard
              title="Total ROI"
              value="+48.2%"
              color="text-green-400"
            />

            <BacktestResultCard
              title="Win Rate"
              value="71%"
              color="text-blue-400"
            />

            <BacktestResultCard
              title="Profit Factor"
              value="2.6"
              color="text-yellow-400"
            />

            <BacktestResultCard
              title="Max Drawdown"
              value="5.1%"
              color="text-red-400"
            />

          </div>

        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          <div className="xl:col-span-2">
            <BacktestEquityChart />
          </div>

          <div>
            <BacktestInsightsPanel />
          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Backtesting;