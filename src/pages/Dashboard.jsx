import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/shared/SideBar";
import StatsCard from "../components/dashboard/StatsCard";
import Navbar from "../components/shared/Navbar";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import ActivityPanel from "../components/dashboard/ActivityPanel";
import TradesTable from "../components/dashboard/TradesTable";
import AIInsightsPanel from "../components/dashboard/AIInsightsPanel";

function Dashboard () {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6">

       <Navbar />

        {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-5">

                        <StatsCard
                           title="Total Balance"
                           value="$125,430"
                           change="+2.45%"
                           changeColor="text-green-400"
                         />

                        <StatsCard
                            title="Today's P/L"
                            value="$2,540"
                            change="+1.95%"
                            changeColor="text-green-400"
                        />

                         <StatsCard
                            title="Win Rate"
                            value="68.7%"
                            change="+4.2%"
                            changeColor="text-green-400"
                        />

                         <StatsCard
                            title="Max Drawdown"
                            value="7.32%"
                            change="-1.21%"
                            changeColor="text-red-400"
                        />

                </div> 

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8">

                     {/* Chart Section */}
                       <div className="xl:col-span-2">
                          <PerformanceChart />
                       </div>

                     {/* Activity Panel */}
                       <div>
                          <ActivityPanel />
                       </div>

                </div>

                 <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-2">

                      {/* Trades Table */}
                       <div className="xl:col-span-2">
                        <TradesTable />
                        </div>

                      {/* AI Insights */}
                       <div>
                         <AIInsightsPanel />
                       </div>

                  </div>

      </div> 

    </MainLayout>
  );
}

export default Dashboard;