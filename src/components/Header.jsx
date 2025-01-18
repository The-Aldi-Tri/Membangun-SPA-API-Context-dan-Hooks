import React from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import UserContext from "../contexts/UserContext";
import LocaleSwitch from "./LocaleSwitch";
import LogoutButton from "./LogoutButton";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  const { locale } = React.useContext(LocaleContext);
  const { authUser } = React.useContext(UserContext);

  return (
    <header>
      <h1>
        <Link to={"/"}>
          {locale === "en" ? "Notes App" : "Aplikasi Catatan"}
        </Link>
      </h1>
      {authUser && (
        <nav className="navigation">
          <ul>
            <li>
              <Link to={"/archives"}>
                {locale === "en" ? "Archives" : "Arsip"}
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <LocaleSwitch />
      <ThemeSwitch />
      {authUser && <LogoutButton />}
    </header>
  );
}

export default Header;
