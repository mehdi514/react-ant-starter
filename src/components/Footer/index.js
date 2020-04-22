import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";

// stylesheet
import "./footer.css";

const { Footer } = Layout;

export default () => (
  <Footer theme="dark" className="text-center">
    <div className="footer-text">Mobylogix ©2020</div>
    <ul className="links">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/help">Careers</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </Footer>
);
