
import { Outlet, NavLink } from 'react-router-dom'
import Hamburger from './Hamburger'


const Navbar = () => {

    var menuExpanded = document.getElementsByClassName("expanded")[0];

    menuExpanded.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        menuExpanded.classList.remove("expanded")
      }
    }

    return (
      <>
        <nav class="nav">
          <div id="header">
          <span class="dot"></span>
          <div>
        <h1 id='thats-me'><NavLink to="/" end>Vivien Geschwind</NavLink></h1>
        <div id="job-title" class="uppercase">UI and UX Designer</div>
        </div>
        </div>
        <div id="hamburger-visibility">
          <Hamburger/>
        </div>
        <div>
          <ul class="nav desktop">
            <li class='nav-item'>
              <NavLink to="/" end>Work</NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to="about">About</NavLink>
            </li>
          </ul>
          </div>
        </nav>
        <Outlet />
      </>
    )
  };

  export default Navbar

