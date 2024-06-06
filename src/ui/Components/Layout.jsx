import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import HeaderDark from "./HeaderDark";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const isDarkModePage = location.pathname === "/Meio-Ambiente";
  return (
    <section className={`layout ${isDarkModePage ? "dark-theme" : ""}`}>
      <section className="header-layout">
        {isDarkModePage ? <HeaderDark /> : <Header />}
      </section>

      <section className="children-layout">{children}</section>

      <section className="footer-layout">
        <Footer />
      </section>
    </section>
  );
};

export default Layout;
