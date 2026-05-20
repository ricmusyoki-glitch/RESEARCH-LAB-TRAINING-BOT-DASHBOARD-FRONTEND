import { useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const strategyData = {
  Scalping: [
    {
      name: "Profitable",
      value: 16,
      percentage: "67%",
    },

    {
      name: "Break-even",
      value: 4,
      percentage: "17%",
    },

    {
      name: "Losing",
      value: 4,
      percentage: "16%",
    },
  ],

  Swing: [
    {
      name: "Profitable",
      value: 12,
      percentage: "50%",
    },

    {
      name: "Break-even",
      value: 7,
      percentage: "29%",
    },

    {
      name: "Losing",
      value: 5,
      percentage: "21%",
    },
  ],

  Momentum: [
    {
      name: "Profitable",
      value: 20,
      percentage: "74%",
    },

    {
      name: "Break-even",
      value: 3,
      percentage: "11%",
    },

    {
      name: "Losing",
      value: 4,
      percentage: "15%",
    },
  ],
};

const COLORS = [
  "#10b981",
  "#3b82f6",
  "#ef4444",
];

function PortfolioDonutChart() {

  const [selectedStrategy, setSelectedStrategy] =
    useState("Scalping");

  const data =
    strategyData[selectedStrategy];

  const totalTrades =
    data.reduce(
      (acc, item) => acc + item.value,
      0
    );

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/80
        backdrop-blur-xl
        p-5
        md:p-6
        xl:p-7
        shadow-2xl
      "
    >

      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-20
          -right-20
          h-72
          w-72
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
      />

      {/* Header */}
      <div
        className="
          relative
          z-10
          mb-8
          flex
          flex-col
          gap-5
        "
      >

        {/* Titles */}
        <div>

          <h2
            className="
              text-2xl
              md:text-3xl
              font-bold
              tracking-tight
              text-white
            "
          >
            Strategy Performance
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            AI strategy trade analytics
          </p>

        </div>

        {/* Strategy Selector */}
        <select
          value={selectedStrategy}
          onChange={(e) =>
            setSelectedStrategy(
              e.target.value
            )
          }
          className="
            rounded-2xl
            border
            border-white/10
            bg-slate-800/80
            px-4
            py-3
            text-sm
            text-white
            outline-none
          "
        >

          {Object.keys(strategyData).map(
            (strategy) => (

              <option
                key={strategy}
                value={strategy}
              >

                {strategy}

              </option>

            )
          )}

        </select>

      </div>

      {/* Chart */}
      <div
        className="
          relative
          z-10
          h-80
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              innerRadius={85}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
            >

              {data.map(
                (entry, index) => (

                  <Cell
                    key={`cell-${index}`}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />

                )
              )}

            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor:
                  "#0f172a",

                border:
                  "1px solid rgba(255,255,255,0.1)",

                borderRadius: "16px",

                color: "white",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

        {/* Center */}
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            pointer-events-none
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest
              text-slate-400
            "
          >
            Total Trades
          </p>

          <h3
            className="
              mt-2
              text-5xl
              font-black
              text-white
            "
          >
            {totalTrades}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-purple-400
            "
          >
            {selectedStrategy} Strategy
          </p>

        </div>

      </div>

      {/* Legend */}
      <div
        className="
          relative
          z-10
          mt-8
          space-y-4
        "
      >

        {data.map((item, index) => (

          <div
            key={item.name}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/10
              bg-slate-800/50
              p-4
            "
          >

            {/* Left */}
            <div className="flex items-center gap-4">

              <div
                className="
                  h-3
                  w-3
                  rounded-full
                "
                style={{
                  backgroundColor:
                    COLORS[
                      index %
                        COLORS.length
                    ],
                }}
              />

              <div>

                <p
                  className="
                    font-medium
                    text-white
                  "
                >

                  {item.name}

                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-400
                  "
                >

                  {item.value} trades

                </p>

              </div>

            </div>

            {/* Right */}
            <p
              className="
                text-lg
                font-bold
                text-white
              "
            >

              {item.percentage}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PortfolioDonutChart;