import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <SideBar />
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default Main;
