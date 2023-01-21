import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ButtonComponent from '../Button/ButtonComponent';
import LogoComponent from '../Logo/LogoComponent';
import TellMeComponent from '../TellMe/TellMeComponent';
import './HeaderComponent.css';
import { logoutAction } from '../../Store/Actions/userActions';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

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
              <TellMeComponent text={['Home']} />
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              onClick={() => setToggleHamburger((prev) => (prev = !prev))}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/about"
            >
              <TellMeComponent text={['about']} />
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              onClick={() => setToggleHamburger((prev) => (prev = !prev))}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/contact"
            >
              <TellMeComponent text={['contact']} />
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              onClick={() => setToggleHamburger((prev) => (prev = !prev))}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/cv"
            >
              <TellMeComponent text={['c', ' V']} />
            </NavLink>
          </li>
          {userInfo ? (
            <>
              <li className="link">
                <NavLink
                  onClick={() => setToggleHamburger((prev) => (prev = !prev))}
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to="/dashboard"
                >
                  <TellMeComponent text={['dashBoard']} />
                </NavLink>
              </li>
              <ButtonComponent
                type="submit"
                text="logout"
                variant="dark"
                onClick={handleLogout}
                disabled={false}
              />
            </>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
