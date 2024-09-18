import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import NavbarComponent from "../../parts/navbar/Navbar.parts";
import { UsuallyLayoutProps } from "./type";

import classes from "./Usually.layout.module.scss";

const UsuallyLayout: React.FC<UsuallyLayoutProps> = ({ children }) => {
  return (
    <main className={classes["usually-layout-container"]}>
      <HeaderComponent />
      <div className={classes["layout-grid"]}>
        <div className={classes["navbar-col"]}>
          <NavbarComponent />
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
};

UsuallyLayout.whyDidYouRender = true;
export default UsuallyLayout;
