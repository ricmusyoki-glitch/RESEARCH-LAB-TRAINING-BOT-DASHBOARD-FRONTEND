import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/shared/SideBar";
import Navbar from "../components/shared/Navbar";


import SignalCard from "../components/live-signals/SignalCard";
import SignalFilterBar from "../components/live-signals/SignalsFilterBar";

const signals = [
  {
    pair: "EUR/USD",
    type: "BUY",
    entry: "1.0842",
    tp: "1.0915",
    sl: "1.0790",
    confidence: "92%",
    status: "Running",
    timeframe: "H4",
    reason:
      "Bullish momentum confirmed by AI liquidity analysis.",
  },

  {
    pair: "GBP/USD",
    type: "SELL",
    entry: "1.2714",
    tp: "1.2630",
    sl: "1.2768",
    confidence: "87%",
    status: "Running",
    timeframe: "H1",
    reason:
      "AI identified bearish institutional rejection zone.",
  },

  {
    pair: "XAU/USD",
    type: "BUY",
    entry: "2385",
    tp: "2420",
    sl: "2360",
    confidence: "95%",
    status: "High Probability",
    timeframe: "H4",
    reason:
      "Strong bullish continuation detected on higher timeframe.",
  },

  {
    pair: "GBP/JPY",
    type: "BUY",
    entry: "201.30",
    tp: "203.10",
    sl: "200.20",
    confidence: "84%",
    status: "Running",
    timeframe: "M30",
    reason:
      "AI momentum engine detected trend continuation.",
  },

  {
    pair: "XAG/USD",
    type: "SELL",
    entry: "31.80",
    tp: "30.95",
    sl: "32.20",
    confidence: "79%",
    status: "Moderate",
    timeframe: "H1",
    reason:
      "Silver showing bearish divergence under AI volatility model.",
  },
];

function LiveSignals() {
  return (
    <MainLayout>

      <div className="min-h-screen bg-slate-950">

        {/* Header */}
        <div
          className="
            relative
            overflow-hidden

            border-b
            border-white/10

            px-4
            py-8

            md:px-6

            xl:px-8
          "
        >

          {/* Purple Glow */}
          <div
            className="
              absolute
              -top-20
              right-0

              h-72
              w-72

              rounded-full

              bg-purple-500/20

              blur-3xl
            "
          />

          {/* Content */}
          <div className="relative z-10">

            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-purple-400
              "
            >
              Institutional Forex Intelligence
            </p>

            <h1
              className="
                mt-4

                text-4xl
                md:text-5xl

                font-black
                tracking-tight

                text-white
              "
            >
              Live Signals
            </h1>

            <p
              className="
                mt-4

                max-w-2xl

                text-sm
                md:text-base

                leading-7

                text-slate-400
              "
            >
              AI-powered forex signal terminal for
              institutional trade execution and analysis.
            </p>

          </div>

        </div>

        {/* Content */}
        <div
          className="
            space-y-8

            p-4
            md:p-6
            xl:p-8
          "
        >

          {/* Filter Bar */}
          <SignalFilterBar />

          {/* Signals Grid */}
          <div
            className="
              grid
              grid-cols-1
              gap-6

              xl:grid-cols-2
            "
          >

            {signals.map((signal, index) => (

              <SignalCard
                key={index}

                pair={signal.pair}
                type={signal.type}
                entry={signal.entry}
                tp={signal.tp}
                sl={signal.sl}
                confidence={signal.confidence}
                status={signal.status}
                timeframe={signal.timeframe}
                reason={signal.reason}
              />

            ))}

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default LiveSignals;