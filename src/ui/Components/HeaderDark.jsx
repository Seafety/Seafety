import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Botao from "./Botao";

import SeafetyWhite from "../../Assets/SeafetyWhite.svg";

const HeaderDark = (props) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/Meio-Ambiente");
  return (
    <header data-theme="dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.836)' }} >
      <img
        onClick={() => {navigate("/"); setActiveLink("")}}
        src={SeafetyWhite}
        alt=""
        srcset=""
        className="img-seafety"
      />

      <nav>
        <ul  className="nav-ul">
          <li
            className={activeLink === "/Demo/Dashboard" ? "active" : ""}
            onClick={() => {
              navigate("/Demo/Dashboard");
              setActiveLink("/Demo/Dashboard");
            }}
          >
            Demo
          </li>
          <li
            className={activeLink === "/Meio-Ambiente" ? "active" : ""}
            onClick={() => {
              navigate("/Meio-Ambiente");
              setActiveLink("/Meio-Ambiente");
            }}
          >
            Meio Ambiente
          </li>
          <li
            className={activeLink === "/TubAI" ? "active" : ""}
            onClick={() => {
              navigate("/TubAI");
              setActiveLink("/TubAI");
            }}
          >
            TubAI
          </li>
          <li
            className={activeLink === "/Documentacao" ? "active" : ""}
            onClick={() => {
              navigate("/Documentacao");
              setActiveLink("/Documentacao");
            }}
          >
            Documentação
          </li>

          <li
          >
            <Botao>Entrar</Botao>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDark;
