import React from "react";
import HeaderComponent from "../../parts/header/Header.parts";
import { SimpleLayoutProps } from "./type";

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
  return (
    <main>
      <HeaderComponent />
      {children}
    </main>
  );
};

SimpleLayout.whyDidYouRender = true;
export default SimpleLayout;
