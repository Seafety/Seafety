import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Botao from "./Botao";

import SeafetyLogo from "../../Assets/Seafety.svg";

const HeaderDark = (props) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  return (
    <header style={{ backgroundColor: 'rgba(0, 0, 0, 0.836)' }} >
      <img
        onClick={() => navigate("/")}
        src={SeafetyLogo}
        alt=""
        srcset=""
        className="img-seafety"
      />

      <nav>
        <ul  className="nav-ul">
          <li style={{ color: 'white' }}
            className={activeLink === "/Demo" ? "active" : ""}
            onClick={() => {
              navigate("/Demo");
              setActiveLink("/Demo");
            }}
          >
            Demo
          </li>
          <li style={{ color: 'white' }}
            className={activeLink === "/Meio-Ambiente" ? "active" : ""}
            onClick={() => {
              navigate("/Meio-Ambiente");
              setActiveLink("/Meio-Ambiente");
            }}
          >
            Meio Ambiente
          </li>
          <li style={{ color: 'white' }}
            className={activeLink === "/TubAI" ? "active" : ""}
            onClick={() => {
              navigate("/TubAI");
              setActiveLink("/TubAI");
            }}
          >
            TubAI
          </li>
          <li style={{ color: 'white' }}
            className={activeLink === "/Documentacao" ? "active" : ""}
            onClick={() => {
              navigate("/Documentacao");
              setActiveLink("/Documentacao");
            }}
          >
            Documentação
          </li>
          <li style={{ color: 'white' }}
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

export default HeaderDark;
