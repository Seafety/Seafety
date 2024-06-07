import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SubHeaderDemo = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/Demo/Dashboard");
  useEffect(() => {
    setActiveLink("/Demo/Dashboard");
  }, [])
  return (
      <nav className='nav-subheader'>
        <ul className="nav-subheader-ul">
          <li
            className={activeLink === "/Demo/Dashboard" ? "active" : ""}
            onClick={() => {
              navigate("/Demo/Dashboard");
              setActiveLink("/Demo/Dashboard");
            }}
          >
            Dashboard
          </li>
          <li
            className={activeLink === "/Demo/Navegacao" ? "active" : ""}
            onClick={() => {
              navigate("/Demo/Navegacao");
              setActiveLink("/Demo/Navegacao");
            }}
          >
            Navegação
          </li>
        </ul>
      </nav>
  )
}

export default SubHeaderDemo