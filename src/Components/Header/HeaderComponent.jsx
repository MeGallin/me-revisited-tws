import { useState } from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  return (
    <header>
      <nav>
        <div
          className="hamburger"
          onClick={() => setToggleHamburger((prev) => (prev = !prev))}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className={!toggleHamburger ? 'nav_links' : 'nav_links open'}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Private</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
