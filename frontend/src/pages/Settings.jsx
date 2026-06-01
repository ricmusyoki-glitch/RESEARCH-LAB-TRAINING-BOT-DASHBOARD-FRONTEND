import MainLayout from "../layouts/MainLayout";

import Navbar from "../components/shared/Navbar";

import SystemPreferencesPanel from "../components/settings/SystemPreferencesPanel";
import AIConfigurationPanel from "../components/settings/AIConfigurationPanel";
import RiskManagementSettingsPanel from "../components/settings/RiskManagementSettingsPanel";
import AutomationControlPanel from "../components/settings/AutomationControlPanel";
import SettingsInsightsPanel from "../components/settings/SettingsInsightsPanel";

function Settings() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-slate-950">

        {/* Navbar */}
        <Navbar />

        {/* Settings Content */}
        <div
          className="
            space-y-8

            p-4
            md:p-6
            xl:p-8
          "
        >

          {/* System Preferences */}
          <SystemPreferencesPanel />

          {/* AI Configuration */}
          <AIConfigurationPanel />

          {/* Risk Management */}
          <RiskManagementSettingsPanel />

          {/* Automation Control */}
          <AutomationControlPanel />

          {/* AI Settings Insights */}
          <SettingsInsightsPanel />

        </div>

      </div>

    </MainLayout>
  );
}

export default Settings;