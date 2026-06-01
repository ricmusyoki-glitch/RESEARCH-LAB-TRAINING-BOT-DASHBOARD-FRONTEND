import MainLayout from "../layouts/MainLayout";

import AIPredictionCard from "../components/ai-insights/AIPredictionCard";
import MarketSentimentPanel from "../components/ai-insights/MarketSentimentPanel";
import FeatureImportancePanel from "../components/ai-insights/FeatureImportancePanel";
import ModelPerformancePanel from "../components/ai-insights/ModelPerformancepanel";
import AIExplanationPanel from "../components/ai-insights/AIExplanationPanel";
import AIMonitoringFeed from "../components/ai-insights/AIMonitoringFeed";

function AIInsights() {
  return (
    <MainLayout>
      <div
        className="
          space-y-8
        "
      >
        {/* Hero Prediction */}
        <AIPredictionCard />

        {/* Sentiment + Monitoring */}
        <div
          className="
            grid
            gap-8

            xl:grid-cols-2
          "
        >
          <MarketSentimentPanel />

          <AIMonitoringFeed />
        </div>

        {/* Feature Importance */}
        <FeatureImportancePanel />

        {/* Model Performance */}
        <ModelPerformancePanel />

        {/* AI Reasoning */}
        <AIExplanationPanel />
      </div>
    </MainLayout>
  );
}

export default AIInsights;