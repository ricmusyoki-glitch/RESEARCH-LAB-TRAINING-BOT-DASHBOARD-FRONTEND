import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/SideBar";

function Dashboard () {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6">

        <h1 className="text-3xl font-bold text-white mb-6">
          Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-5">

          <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">
            <h2 className="text-gray-400 text-sm">
              Total Balance
            </h2>

            <p className="text-3xl font-bold mt-2">
              $125,430
            </p>

            <span className="text-green-400 text-sm">
              +2.45%
            </span>
          </div>

          <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">
            <h2 className="text-gray-400 text-sm">
              Today's P/L
            </h2>

            <p className="text-3xl font-bold mt-2">
              $2,540
            </p>

            <span className="text-green-400 text-sm">
              +1.95%
            </span>
          </div>

          <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">
            <h2 className="text-gray-400 text-sm">
              Win Rate
            </h2>

            <p className="text-3xl font-bold mt-2">
              68.7%
            </p>

            <span className="text-green-400 text-sm">
              +4.2%
            </span>
          </div>

          <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800">
            <h2 className="text-gray-400 text-sm">
              Max Drawdown
            </h2>

            <p className="text-3xl font-bold mt-2">
              7.32%
            </p>

            <span className="text-red-400 text-sm">
              -1.21%
            </span>
          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;