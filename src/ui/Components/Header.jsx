import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Botao from "./Botao";
import LoginModal from './LoginModal';

import SeafetyLogo from "../../Assets/Seafety.svg";

const Header = ({ onLoginClick }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <header>
      <img
        onClick={() => 
          {navigate("/"); 
          setActiveLink(""); 
          scrollToTop(); }}
        src={SeafetyLogo}
        alt=""
        srcset=""
        className="img-seafety"
      />

      <nav>
        <ul className="nav-ul">
          <li
            className={activeLink === "/Demo/Dashboard" ? "active" : ""}
            onClick={() => 
              {
              navigate("/Demo/Dashboard");
              setActiveLink("/Demo/Dashboard");
              scrollToTop(); 
            }}
          >
            Demo
          </li>
          <li
            className={activeLink === "/Meio-Ambiente" ? "active" : ""}
            onClick={() => {
              navigate("/Meio-Ambiente");
              setActiveLink("/Meio-Ambiente");
              scrollToTop(); 
            }}
          >
            Meio Ambiente
          </li>
          <li
            className={activeLink === "/TubAI" ? "active" : ""}
            onClick={() => {
              navigate("/TubAI");
              setActiveLink("/TubAI");
              scrollToTop(); 
            }}
          >
            TubAI
          </li>
          <li
            className={activeLink === "/Documentacao" ? "active" : ""}
            onClick={() => {
              navigate("/Documentacao");
              setActiveLink("/Documentacao");
              scrollToTop(); 
            }}
          >
            Documentação
          </li>
          <li>
            <button className='blue-button' onClick={onLoginClick}>Entrar</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
