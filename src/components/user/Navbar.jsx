import { NavLink } from "react-router-dom";
// NavLink comes with an isactive prop which we can use to detect which page we on
// so we can have a special style for that link
import React, {useState, useEffect} from "react";
import Logo from "./images/logo.png";
import { links } from "./data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { checkTrainers } from "./data";
import "./navbar.css";
import styles from "../../layouts/index.module.css";
import jwt from "jsonwebtoken";
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hasPackage, setHasPackage] = useState(false)
  const accessToken = localStorage.getItem("accessToken");
  const decode = jwt.decode(accessToken).accountId;

  const handleNavToggle = () => {
    return setIsNavShowing((prevVAlue) => {
      return !prevVAlue;
    });
  };
  const handleLogOut = () => {
    window.location.href = "/logout";
  }
  function getNavLinkClassName(path) {
    return window.location.pathname === path ? "active-nav_1" : "";
  }
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setNavbarVisible(visible);
      setPrevScrollPos(currentScrollPos);
    }

    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  useEffect(() => {
    const getData = async () => {
      const pack = await checkTrainers(decode);
      if (pack.length > 0) {
        setHasPackage(true)
      }
    };
    getData();
   
  }, []);
  return (
    <nav className= {navbarVisible ? 'nav_1' : 'navbar navbar-hide'}>
      <div className="container nav__container">
        <img className="logo_1" src={Logo} alt="Nav-logo" />

        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            if (path === "/user/plans" && hasPackage) {
              return null; 
            }
            return (
              <li className={styles.li__1} key={index}>
                <NavLink
                  to={path}
                  className={getNavLinkClassName(path)}
                  onClick={handleNavToggle}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          <li className={styles.li__1}>
            <NavLink
              to="/logout"
              onClick={handleLogOut}
            >
              Log out
            </NavLink>
          </li>
        </ul>
        <button onClick={handleNavToggle} className="nav__toggle-btn">
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// export PATH=$PATH:/home/daveworld/bin
