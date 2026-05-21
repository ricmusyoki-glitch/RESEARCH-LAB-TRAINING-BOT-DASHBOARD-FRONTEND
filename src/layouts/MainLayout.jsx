import { useState } from "react";

import Sidebar from "../components/shared/SideBar";

import { Menu } from "lucide-react";

function MainLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div
        className="
          xl:ml-72
          min-h-screen
        "
      >

        {/* Mobile Topbar */}
        <div
          className="
            sticky
            top-0
            z-30

            flex
            items-center
            justify-between

            border-b
            border-white/10

            bg-slate-950/80
            backdrop-blur-xl

            px-4
            py-4

            xl:hidden
          "
        >

          {/* Left */}
          <div>

            <h1
              className="
                text-lg
                font-bold
                tracking-tight
                text-white
              "
            >
              Ric's Research Lab
            </h1>

            <p
              className="
                text-xs
                text-slate-400
              "
            >
              Ric's Trading and Learning Platform
            </p>

          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-800/80
              p-3
              text-slate-300
            "
          >

            <Menu size={20} />

          </button>

        </div>

        {/* Page Content */}
        <main
          className="
            p-4
            md:p-6
            xl:p-8
          "
        >

          {children}

        </main>

      </div>

    </div>
  );
}

export default MainLayout;