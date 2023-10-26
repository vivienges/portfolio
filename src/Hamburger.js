import { NavLink } from 'react-router-dom'
import { useState } from 'react'


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
              <NavLink to="/" end>Work</NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to="about">About</NavLink>
            </li>
          </ul>
        </div>
      </>
    )
  };

  export default Hamburger

