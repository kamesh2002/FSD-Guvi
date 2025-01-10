import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.link} activeStyle={styles.active}>
        All
      </NavLink>
      <NavLink to="/fullstack-development" style={styles.link} activeStyle={styles.active}>
        Full Stack Development
      </NavLink>
      <NavLink to="/data-science" style={styles.link} activeStyle={styles.active}>
        Data Science
      </NavLink>
      <NavLink to="/cyber-security" style={styles.link} activeStyle={styles.active}>
        Cyber Security
      </NavLink>
      <NavLink to="/career" style={styles.link} activeStyle={styles.active}>
        Career
      </NavLink>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "#f8f9fa",
    padding: "10px 20px",
    borderBottom: "2px solid #ddd",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  active: {
    color: "#0056b3",
    textDecoration: "underline",
  },
};

export default Navbar;
