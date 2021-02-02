import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import { Container } from "./styles";

export default function Header() {
  const location = useLocation();
  const history = useHistory();

  return (
    <Container>
      <header className="header-container">
        <p onClick={e => history.push("/")}>DominOnline</p>
        <div className="buttons-container">
          <div style={{display: "flex"}}>
          <Link
              to="/salas"
              className={
                location.pathname.endsWith("/salas") ? "current-route" : ""
              }
            >
              Salas
            </Link>
          </div>
          <div className="loginbtn-container">
            <Link
              to="/login"
              className={
                location.pathname.endsWith("/login") ? "current-route" : ""
              }
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </Container>
  );
}
