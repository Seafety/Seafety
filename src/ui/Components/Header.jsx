import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Botao from "./Botao";

import SeafetyLogo from "../../Assets/Seafety.svg";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <header>
      <img src={SeafetyLogo} alt="" srcset="" className="img-seafety" />

      <nav>
        <ul className="nav-ul">
          <li onClick={() => navigate("/")}>Demo</li>
          <li onClick={() => navigate("/Meio-Ambiente")}>Meio Ambiente</li>
          <li onClick={() => navigate("/TubAI")}>TubAI</li>
          <li onClick={() => navigate("/Documentacao")}>Documentação</li>
          <li onClick={() => navigate("/")}>Contato</li>
          <li onClick={() => navigate("/Demo")}>
            <Botao>Entrar</Botao>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
