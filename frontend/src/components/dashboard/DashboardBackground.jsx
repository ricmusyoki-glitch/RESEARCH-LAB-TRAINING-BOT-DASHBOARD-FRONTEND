function DashboardBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Top Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

      {/* Right Purple Glow */}
      <div className="absolute top-[100px] right-[-150px] w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[140px]" />

      {/* Bottom Cyan Glow */}
      <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

      {/* Floating Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:60px_60px]" />

    </div>
  );
}

export default DashboardBackground; 