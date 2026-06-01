import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import LiveSignals from "./pages/LiveSignals";
import ResearchLab from "./pages/ResearchLab";
import PaperTrading from "./pages/PaperTrading";
import Reports from "./pages/Reports";
import RiskDashboard from "./pages/RiskDashboard";
import Settings from "./pages/Settings";
import AIInsights from "./pages/AIInsights";
import Backtesting from "./pages/BackTesting";
import Strategies from "./pages/Strategies";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/signals" element={<LiveSignals />} />

        <Route path="/research" element={<ResearchLab />} />

        <Route path="/paper-trading" element={<PaperTrading />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/risk-dashboard" element={<RiskDashboard />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/ai-insights" element={<AIInsights />} />

        <Route path="/backtesting" element={<Backtesting />} />

        <Route path="/strategies" element={<Strategies />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;