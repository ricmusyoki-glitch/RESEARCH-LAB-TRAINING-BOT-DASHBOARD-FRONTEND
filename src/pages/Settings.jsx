import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

import ProfileSettingsPanel from "../components/ProfileSettingsPanel";
import AISettingsPanel from "../components/AISettingsPanel";
import RiskSettingsPanel from "../components/RiskSettingsPanel";
import SecuritySettingsPanel from "../components/SecuritySettingsPanel";

function Settings() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          <ProfileSettingsPanel />

          <AISettingsPanel />

          <RiskSettingsPanel />

          <SecuritySettingsPanel />

        </div>

      </div>

    </MainLayout>
  );
}

export default Settings;