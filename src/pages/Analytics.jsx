import MainLayout from "../layouts/MainLayout";

import Navbar from "../components/shared/Navbar";

import EquityCurveChart from "../components/analytics/EquityCurveChart";
import StrategyComparison from "../components/analytics/StrategyComparison";
import SessionPerformancePanel from "../components/analytics/SessionPerformancePanel";
import AnalyticsInsightsPanel from "../components/analytics/AnalyticsInsightsPanel";

function Analytics() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-slate-950">

        {/* Navbar */}
        <Navbar />

        {/* Analytics Content */}
        <div
          className="
            space-y-8

            p-4
            md:p-6
            xl:p-8
          "
        >

          {/* Equity Curve Intelligence */}
          <EquityCurveChart />

          {/* Strategy Comparison */}
          <StrategyComparison />

          {/* Session Intelligence */}
          <SessionPerformancePanel />

          {/* AI Analytics Insights */}
          <AnalyticsInsightsPanel />

        </div>

      </div>

    </MainLayout>
  );
}

export default Analytics;