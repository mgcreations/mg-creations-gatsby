import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <Link onClick={props.onToggleMenu} to="/">
          Home
        </Link>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;