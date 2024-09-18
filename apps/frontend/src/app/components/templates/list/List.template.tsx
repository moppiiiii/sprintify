import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import NavbarComponent from "../../parts/navbar/Navbar.parts";

const ListTemplate: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
    </div>
  );
};

ListTemplate.whyDidYouRender = true;
export default ListTemplate;
