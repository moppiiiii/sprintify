import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import NavbarComponent from "../../parts/navbar/Navbar.parts";
import { UsuallyLayoutProps } from "./type";
import { Group } from "@mantine/core";

const UsuallyLayout: React.FC<UsuallyLayoutProps> = ({ children }) => {
  return (
    <main>
      <HeaderComponent />
      <Group gap={0}>
        <NavbarComponent />
        {children}
      </Group>
    </main>
  );
};

UsuallyLayout.whyDidYouRender = true;
export default UsuallyLayout;
