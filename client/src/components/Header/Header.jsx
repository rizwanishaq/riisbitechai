import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <HeaderLogo />
      <HeaderSearch />
      <HeaderNav />
    </header>
  );
};

export default Header;
