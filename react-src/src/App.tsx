import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
      {isHome ? <HeaderHome /> : <HeaderDefault />}
      <div
        style={{
          paddingTop: "45px",
        }}
        className="responsive-padding"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
