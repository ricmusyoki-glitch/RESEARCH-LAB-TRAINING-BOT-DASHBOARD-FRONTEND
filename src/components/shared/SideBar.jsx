import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Radio,
  CandlestickChart,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  FlaskConical,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },

  {
    name: "Live Signals",
    path: "/signals",
    icon: Radio,
  },

  {
    name: "Paper Trading",
    path: "/paper-trading",
    icon: CandlestickChart,
  },

  {
    name: "Strategies",
    path: "/strategies",
    icon: BrainCircuit,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },

  {
    name: "Risk Dashboard",
    path: "/risk-dashboard",
    icon: ShieldCheck,
  },

  {
    name: "Research Lab",
    path: "/research",
    icon: FlaskConical,
  },

  {
    name: "Reports",
    path: "/reports",
    icon: FileText,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-sm
            xl:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-r
          border-white/10
          bg-slate-950/90
          backdrop-blur-xl
          transition-transform
          duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          xl:translate-x-0
        `}
      >

        {/* Purple Glow */}
        <div
          className="
            absolute
            -top-20
            -left-20
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
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-6
            py-6
          "
        >

          {/* Logo */}
          <div>

            <h1
              className="
                text-2xl
                font-black
                tracking-tight
                text-white
              "
            >
              Ric's Research lab
            </h1>

            <p
              className="
                mt-1
                text-sm
                text-slate-400
              "
            >
              Institutional trading and Learning platform 
            </p>

          </div>

          {/* Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="
              rounded-xl
              border
              border-white/10
              bg-slate-800/80
              p-2
              text-slate-300
              xl:hidden
            "
          >

            <X size={20} />

          </button>

        </div>

        {/* Navigation */}
        <nav
          className="
            relative
            z-10
            flex-1
            space-y-2
            overflow-y-auto
            px-4
            py-6
          "
        >

          {navItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    px-4
                    py-4
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          border
                          border-purple-400/20
                          bg-purple-500/10
                          text-white
                          shadow-lg
                        `
                        : `
                          text-slate-400
                          hover:bg-slate-800/80
                          hover:text-white
                        `
                    }
                  `
                }
              >

                <Icon size={20} />

                <span>{item.name}</span>

              </NavLink>
            );
          })}

        </nav>

      </aside>
    </>
  );
}

export default Sidebar;