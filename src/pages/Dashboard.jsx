import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/SideBar";

function Dashboard() {
  return (
    <MainLayout>
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
      </div>
    </MainLayout>
  );
}

export default Dashboard;