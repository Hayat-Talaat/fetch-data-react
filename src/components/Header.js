import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className="header-right">
          <Link to="/">AxiosDataFetch</Link>
          <Link to="/http-data-fetch">HttpDataFetch</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
