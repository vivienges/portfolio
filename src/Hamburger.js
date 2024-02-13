import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import CV from './documents/CV_VivienGeschwind_en.pdf'


const Hamburger = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
      <>
        <div id="hamburger" className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
            <div id="line-1"></div>
            <div id="line-2"></div>
            <div id="line-3"></div>
        </div>
        <div>
        <ul className={
          isNavExpanded ? "menu overlay expanded" : "menu"
        }>
            <li class='nav-item'>
              <NavLink to="/" end onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>Work</NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to="about" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>About</NavLink>
            </li>
            <li class='nav-item'>
            <a href = {CV} target = "_blank" end onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
              CV
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  };

  export default Hamburger

