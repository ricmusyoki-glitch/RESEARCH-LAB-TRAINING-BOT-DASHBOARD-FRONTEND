import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/shared/SideBar";
import Navbar from "../components/shared/Navbar";

import ProfileSettingsPanel from "../components/settings/ProfileSettingsPanel";
import AISettingsPanel from "../components/settings/AISettingsPanel";
import RiskSettingsPanel from "../components/settings/RiskSettingsPanel";
import SecuritySettingsPanel from "../components/settings/SecuritySettingsPanel";

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