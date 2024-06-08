import React from "react";
import PropTypes from "prop-types";
import SeafetyLogo from "../../Assets/Seafety.svg";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();
  return (
    <footer>
      <img
        onClick={() => navigate("/")}
        src={SeafetyLogo}
        alt=""
        srcset=""
        className="footer-img-seafety"
      />
      <section className="footer-info">
        <p>@2024 Seafety Ocean</p>
        <p>by Ana, Clara, Lúcia, Thiago e Miguel </p>
        <p>FIAP</p>
      </section>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
