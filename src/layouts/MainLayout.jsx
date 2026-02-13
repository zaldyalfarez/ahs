const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10">
      {children}
    </div>
  );
};

export default MainLayout;
