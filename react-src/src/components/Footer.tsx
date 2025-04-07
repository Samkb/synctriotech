import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} My WordPress React Theme. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
