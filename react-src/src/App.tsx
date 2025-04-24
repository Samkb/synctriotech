import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import HeaderHome from "./components/HeaderHome";
import HeaderDefault from "./components/HeaderDefault";

const Layout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Conditionally render Header */}
      {isHome ? <HeaderHome /> : <HeaderDefault />}

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Render Footer only if not on Home page */}
      {!isHome && <Footer />}
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Layout />
  </Router>
);

export default App;
