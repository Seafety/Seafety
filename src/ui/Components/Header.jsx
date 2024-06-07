import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Botao from "./Botao";

import SeafetyLogo from "../../Assets/Seafety.svg";

const Header = (props) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  return (
    <header>
      <img
        onClick={() => {navigate("/"); setActiveLink("")}}
        src={SeafetyLogo}
        alt=""
        srcset=""
        className="img-seafety"
      />

      <nav>
        <ul className="nav-ul">
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
            // className={activeLink === "/Meio-Ambiente" ? "active" : ""}
            // onClick={() => {
            //   navigate("/");
            //   setActiveLink("/Demo");
            // }}
          >
            Contato
          </li>
          <li
            // className={activeLink === "/Meio-Ambiente" ? "active" : ""}
            // onClick={() => {
            //   navigate("/Demo");
            //   setActiveLink("/Demo");
            // }}
          >
            <Botao>Entrar</Botao>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
