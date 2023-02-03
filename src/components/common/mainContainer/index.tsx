import { FC, ReactNode } from "react";
import Header from "../header/header";

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainContainer;
