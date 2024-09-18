import React from "react";
import { useLocation } from "react-router-dom";

import { LOGOUT_NAV_DATA, PRINCIPAL_NAV_DATA } from "./constants/data.constant";
import classes from "./Navbar.parts.module.scss";

const NavbarComponent: React.FC = () => {
  const location = useLocation();

  const links = PRINCIPAL_NAV_DATA.map((item) => (
    <a
      className={classes["navbar-link"]}
      data-active={location.pathname === item.link || undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes["link-icon"]} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes["navbar-container"]}>
      <div className={classes["navbar-header-wrapper"]}>{links}</div>
      <div className={classes["navbar-footer-wrapper"]}>
        <a
          href={LOGOUT_NAV_DATA.link}
          className={classes["navbar-link"]}
          onClick={(event) => event.preventDefault()}
        >
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <LOGOUT_NAV_DATA.icon className={classes["link-icon"]} stroke={1.5} />
          <span>{LOGOUT_NAV_DATA.label}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavbarComponent;
