import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import HeaderDark from "./HeaderDark";
import Footer from "./Footer";
import LoginModal from "./LoginModal"; // Importando o modal de login
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isDarkModePage = location.pathname === "/Meio-Ambiente";
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para controlar a abertura do modal

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  return (
    <section className={`layout ${isDarkModePage ? "dark-theme" : ""}`}>
      <section className="header-layout">
        {isDarkModePage ? <HeaderDark onLoginClick={handleLoginOpen} /> : <Header onLoginClick={handleLoginOpen} />}
      </section>

      <section className="children-layout">{children}</section>

      <section className="footer-layout">
        <Footer />
      </section>

      <LoginModal isOpen={isLoginOpen} onClose={handleLoginClose} />
    </section>
  );
};

export default Layout;
