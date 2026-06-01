import MainLayout from "../layouts/MainLayout";

import HistoryOverviewPanel from "../components/history/HistoryOverviewPanel";
import TradeAnalyticsPanel from "../components/history/TradeAnalyticsPanel";
import SessionPerformancePanel from "../components/history/SessionPerformancePanel";
import StrategyHistoryPanel from "../components/history/StrategyHistoryPanel";
import HistoricalTradesTable from "../components/history/HistoricalTradesTable";

function History() {
  return (
    <MainLayout>
      <div
        className="
          space-y-8
        "
      >
        <HistoryOverviewPanel />

        <TradeAnalyticsPanel />

        <SessionPerformancePanel />

        <StrategyHistoryPanel />

        <HistoricalTradesTable />
      </div>
    </MainLayout>
  );
}

export default History;