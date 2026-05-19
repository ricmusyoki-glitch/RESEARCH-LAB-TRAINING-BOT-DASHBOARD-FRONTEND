import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import SignalsFilterBar from "../components/SignalsFilterBar";
import SignalCard from "../components/SignalCard";

function LiveSignals() {
  return (
    <MainLayout>

      <Sidebar />

      <div className="flex-1 bg-[#0B1120] p-6 overflow-y-auto">

        <Navbar />

        <SignalsFilterBar />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          <SignalCard
            pair="EUR/USD"
            type="BUY"
            entry="1.0842"
            tp="1.0895"
            sl="1.0810"
            confidence={87}
            timeframe="4H"
            strategy="Momentum Breakout"
            status="Active"
            reason="Strong bullish breakout confirmed above key resistance with increasing buying pressure."
          />

          <SignalCard
            pair="GBP/USD"
            type="SELL"
            entry="1.2675"
            tp="1.2610"
            sl="1.2712"
            confidence={72}
            timeframe="1H"
            strategy="Reversal Detection"
            status="Active"
            reason="Bearish rejection detected after liquidity sweep at resistance zone."
          />

          <SignalCard
            pair="NAS100"
            type="BUY"
            entry="18350"
            tp="18520"
            sl="18210"
            confidence={91}
            timeframe="Daily"
            strategy="AI Trend Continuation"
            status="Active"
            reason="AI detected strong continuation pattern supported by bullish momentum expansion."
          />

        </div>

      </div>

    </MainLayout>
  );
}

export default LiveSignals;