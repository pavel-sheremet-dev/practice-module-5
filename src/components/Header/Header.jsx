import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";

import { buildLinkClass } from "../../utils/buildLinkClass";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <header>
      <div>
        <Link to="/">HOME LOGO</Link>
        <nav>
          <ul>
            <li>
              <NavLink className={buildLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={buildLinkClass}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={buildLinkClass}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        {isMobile && (
          <div>
            <button onClick={() => setIsMobileMenu((prev) => !prev)}>
              {isMobileMenuOpen ? "CLOSE" : "OPEN"}
            </button>
            {isMobileMenuOpen && <MobileMenu />}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

const MobileMenu = () => {
  return <div>Mobile Menu</div>;
};
