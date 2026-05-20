import MainLayout from "../layouts/MainLayout";

import Navbar from "../components/shared/Navbar";

import ResearchOverviewPanel from "../components/research-lab/ResearchOverviewPanel";
import ModelTrainingPanel from "../components/research-lab/ModelTrainingPanel";
import StrategyExperimentPanel from "../components/research-lab/StrategyExperimentPanel";
import ResearchInsightsPanel from "../components/research-lab/ResearchInsightsPanel";

function ResearchLab() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-slate-950">

        {/* Navbar */}
        <Navbar />

        {/* Research Lab Content */}
        <div
          className="
            space-y-8

            p-4
            md:p-6
            xl:p-8
          "
        >

          {/* Research Overview */}
          <ResearchOverviewPanel />

          {/* Model Training */}
          <ModelTrainingPanel />

          {/* Strategy Experiments */}
          <StrategyExperimentPanel />

          {/* AI Research Insights */}
          <ResearchInsightsPanel />

        </div>

      </div>

    </MainLayout>
  );
}

export default ResearchLab;