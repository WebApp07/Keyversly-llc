import React from "react";
import Container from "./Container";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-white py-5">
      <Container className="">
        {/* Logo */}
        <Logo />
        {/* NavButton */}
        {/* NavAdmin */}
      </Container>
    </header>
  );
}

export default Header;
