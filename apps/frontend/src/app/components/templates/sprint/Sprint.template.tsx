import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import NavbarComponent from "../../parts/navbar/Navbar.parts";

const SprintTemplate: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
    </div>
  );
};

SprintTemplate.whyDidYouRender = true;
export default SprintTemplate;
