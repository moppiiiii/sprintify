import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import NavbarComponent from "../../parts/navbar/Navbar.parts";
import { UsuallyLayoutProps } from "./type";

import classes from "./Usually.layout.module.scss";
import { Box } from "@mantine/core";

const UsuallyLayout: React.FC<UsuallyLayoutProps> = ({ children }) => {
  return (
    <main className={classes["usually-layout-container"]}>
      <HeaderComponent />
      <Box className={classes["layout-grid"]}>
        <Box className={classes["navbar-col"]}>
          <NavbarComponent />
        </Box>
        <Box>{children}</Box>
      </Box>
    </main>
  );
};

UsuallyLayout.whyDidYouRender = true;
export default UsuallyLayout;
