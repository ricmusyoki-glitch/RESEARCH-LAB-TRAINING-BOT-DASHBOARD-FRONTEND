import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

import PaperAccountCard from "../components/PaperAccountCard";
import PaperTradesTable from "../components/PaperTradesTable";
import TradeHistoryPanel from "../components/TradeHistoryPanel";

function PaperTrading() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          <PaperAccountCard
            title="Paper Balance"
            value="$50,000"
            change="+4.2%"
            color="text-green-400"
          />

          <PaperAccountCard
            title="Open Trades"
            value="12"
            change="+3 active"
            color="text-blue-400"
          />

          <PaperAccountCard
            title="Win Rate"
            value="71%"
            change="+6.5%"
            color="text-green-400"
          />

          <PaperAccountCard
            title="Max Drawdown"
            value="5.3%"
            change="-1.1%"
            color="text-red-400"
          />

        </div>

        {/* Trades + History */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          <div className="xl:col-span-2">
            <PaperTradesTable />
          </div>

          <div>
            <TradeHistoryPanel />
          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default PaperTrading;