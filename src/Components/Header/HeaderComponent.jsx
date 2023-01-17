import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogoComponent } from '../Logo/LogoComponent';
import './HeaderComponent.css';

const HeaderComponent = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  return (
    <header>
      <nav>
        <LogoComponent />

        <div
          className="hamburger"
          onClick={() => setToggleHamburger((prev) => (prev = !prev))}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className={!toggleHamburger ? 'nav_links' : 'nav_links open'}>
          <li className="link">
            <NavLink
              onClick={() => setToggleHamburger((prev) => (prev = !prev))}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              onClick={() => setToggleHamburger((prev) => (prev = !prev))}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              onClick={() => setToggleHamburger((prev) => (prev = !prev))}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
