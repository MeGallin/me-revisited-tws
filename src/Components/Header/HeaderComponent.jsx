import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './HeaderComponent.css';

import ButtonComponent from '../Button/ButtonComponent';
import LogoComponent from '../Logo/LogoComponent';
import TellMeComponent from '../TellMe/TellMeComponent';

import { logoutAction } from '../../Store/Actions/userActions';
import { saveAnalyticsAction } from '../../Store/Actions/analyticsActions';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const googleUserLogin = useSelector((state) => state.googleUserLogin);
  const { userInfo: googleUserInfo } = googleUserLogin;

  const handleNavigation = () => {
    setToggleHamburger((prev) => (prev = !prev));

    const analytics = {
      referrer: document.referrer,
      location: document.location.href,
      languages: window.navigator.languages,
      platform: window.navigator.platform,
      userAgent: window.navigator.userAgent,
      screen: window.screen,
    };
    if (!analytics.location.includes('http://localhost'))
      return dispatch(saveAnalyticsAction(analytics));
  };

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <header>
        <nav>
          <NavLink
            onClick={handleNavigation}
            className={(navData) => (navData.isActive ? 'active' : '')}
            to="/"
          >
            <LogoComponent />
          </NavLink>

          <div className="hamburger" onClick={handleNavigation}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <ul className={!toggleHamburger ? 'nav_links' : 'nav_links open'}>
            <li className="link">
              <NavLink
                onClick={handleNavigation}
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/"
                data-cy="header-home-link"
              >
                <TellMeComponent text={['H', 'ome']} />
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                onClick={handleNavigation}
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/about"
                data-cy="header-about-link"
              >
                <TellMeComponent text={['ab', 'out']} />
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                onClick={handleNavigation}
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/my-work"
                data-cy="header-my-work-link"
              >
                <TellMeComponent text={['m', 'y', ' w', 'o', 'rk']} />
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                onClick={handleNavigation}
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/contact"
                data-cy="header-contact-link"
              >
                <TellMeComponent text={['con', 't', 'act']} />
              </NavLink>
            </li>

            {userInfo || googleUserInfo ? (
              <>
                <li className="link">
                  <NavLink
                    onClick={handleNavigation}
                    className={(navData) => (navData.isActive ? 'active' : '')}
                    to="/dashboard"
                    data-cy="header-dashboard-link"
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
                    onClick={handleNavigation}
                    className={(navData) => (navData.isActive ? 'active' : '')}
                    to="/cv"
                    data-cy="header-cv-link"
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
