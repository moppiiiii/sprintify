import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import NavbarComponent from "../../parts/navbar/Navbar.parts";

const HomeTemplate: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
    </div>
  );
};

HomeTemplate.whyDidYouRender = true;
export default HomeTemplate;
