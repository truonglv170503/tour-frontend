// src/components/layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuthContext();

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link className="nav__el" to="/">
          All tours
        </Link>
      </nav>
      <div className="header__logo">
        <Link to="/">
          <img src="/assets/img/logo-white.png" alt="Natours logo" />
        </Link>
      </div>
      <nav className="nav nav--user">
        {isAuthenticated ? (
          <>
            <Link className="nav__el nav__el--logout" onClick={logout} to="#">
              Log out
            </Link>
            <Link className="nav__el" to="/me">
              {user.photo && (
                <img
                  className="nav__user-img"
                  src={user.photo}
                  alt={`Photo of ${user.name}`}
                />
              )}
              <span>{user.name.split(' ')[0]}</span>
            </Link>
          </>
        ) : (
          <>
            <Link className="nav__el" to="/login">
              Log in
            </Link>
            <Link className="nav__el nav__el--cta" to="/signup">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
