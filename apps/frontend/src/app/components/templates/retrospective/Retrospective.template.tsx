import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import NavbarComponent from "../../parts/navbar/Navbar.parts";

const RetrospectiveTemplate: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
    </div>
  );
};

RetrospectiveTemplate.whyDidYouRender = true;
export default RetrospectiveTemplate;
