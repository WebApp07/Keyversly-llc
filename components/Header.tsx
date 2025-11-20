import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./Sign";

function Header() {
  return (
    <header className="bg-white py-5 border-b border-b-black/50">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* NavButton */}
        <HeaderMenu />
        {/* NavAdmin */}

        <div className="w-auto md:1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <SignIn />
        </div>
      </Container>
    </header>
  );
}

export default Header;
