import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      
      <div className="min-h-[calc(100vh-117px)]">
        <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
