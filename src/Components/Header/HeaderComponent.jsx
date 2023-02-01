import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './HeaderComponent.css';

import ButtonComponent from '../Button/ButtonComponent';
import LogoComponent from '../Logo/LogoComponent';
import TellMeComponent from '../TellMe/TellMeComponent';

import { logoutAction } from '../../Store/Actions/userActions';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const googleUserLogin = useSelector((state) => state.googleUserLogin);
  const { userInfo: googleUserInfo } = googleUserLogin;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
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
                <TellMeComponent text={['H', 'ome']} />
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                onClick={() => setToggleHamburger((prev) => (prev = !prev))}
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/about"
              >
                <TellMeComponent text={['ab', 'out']} />
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                onClick={() => setToggleHamburger((prev) => (prev = !prev))}
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/my-work"
              >
                <TellMeComponent text={['m', 'y', 'w', 'o', 'rk']} />
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                onClick={() => setToggleHamburger((prev) => (prev = !prev))}
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/contact"
              >
                <TellMeComponent text={['con', 't', 'act']} />
              </NavLink>
            </li>

            {userInfo || googleUserInfo ? (
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
            ) : (
              <>
                <li className="link">
                  <NavLink
                    onClick={() => setToggleHamburger((prev) => (prev = !prev))}
                    className={(navData) => (navData.isActive ? 'active' : '')}
                    to="/cv"
                  >
                    <TellMeComponent text={['c', 'V']} />
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
