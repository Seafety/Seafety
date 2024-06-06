import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <section className="header-layout">
        <Header />
      </section>

      <section className="children-layout">{children}</section>

      <section className="footer-layout">
        <Footer />
      </section>
    </section>
  );
};

export default Layout;
