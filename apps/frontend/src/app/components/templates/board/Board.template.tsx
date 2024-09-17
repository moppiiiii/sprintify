import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import NavbarComponent from "../../parts/navbar/Navbar.parts";

const BoardTemplate: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
    </div>
  );
};

BoardTemplate.whyDidYouRender = true;
export default BoardTemplate;
