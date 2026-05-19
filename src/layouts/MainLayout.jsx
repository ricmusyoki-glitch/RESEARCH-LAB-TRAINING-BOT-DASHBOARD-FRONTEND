function MainLayout({ children }) {
  return (
    <div className="flex bg-black text-white min-h-screen">
      {children}
    </div>
  );
}

export default MainLayout;