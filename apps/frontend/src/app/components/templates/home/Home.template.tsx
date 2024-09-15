import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";

const HomeTemplate: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

HomeTemplate.whyDidYouRender = true;
export default HomeTemplate;
