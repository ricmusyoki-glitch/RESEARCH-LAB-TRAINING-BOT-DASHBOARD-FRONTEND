import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

import AIPredictionCard from "../components/AIPredictionCard";
import MarketSentimentPanel from "../components/MarketSentimentPanel";
import AIMonitoringFeed from "../components/AIMonitoringFeed";

function AIInsights() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* AI Prediction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

          <AIPredictionCard
            asset="EUR/USD"
            direction="Bullish"
            confidence={87}
            prediction="AI predicts bullish continuation with strong breakout momentum."
          />

          <AIPredictionCard
            asset="GBP/USD"
            direction="Bearish"
            confidence={72}
            prediction="AI detected bearish rejection from institutional resistance zone."
          />

          <AIPredictionCard
            asset="NAS100"
            direction="Bullish"
            confidence={91}
            prediction="AI trend model projects further upside momentum expansion."
          />

        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          <div>
            <MarketSentimentPanel />
          </div>

          <div className="xl:col-span-2">
            <AIMonitoringFeed />
          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default AIInsights;