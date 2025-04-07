import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
