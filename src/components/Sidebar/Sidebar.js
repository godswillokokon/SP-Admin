import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

// import logo from "logo.svg";

const Sidebar = (props) => {
  const sidebar = React.useRef();
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1
      ? "active"
      : "";
  };
  return (
    <div className="sidebar">
      <div className="logo">
        {/* <a href="#" className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a> */}
        <a href="/" className="simple-text logo-normal">
          SPREAD PROPERTIES
        </a>
        <div></div>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((item, key) => {
            return (
              <li
                className={
                  activeRoute(item.path) +
                  (item.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={item.layout + item.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className={item.icon} />
                  <p>{item.name}</p>
                  {item.subMenu &&
                    item.subMenu.map((subItem, subKey) => {
                      return (
                        <li key={subKey}>
                          <NavLink
                            to={subItem.layout + subItem.path}
                            className="nav-link"
                            activeClassName="active"
                          >
                            <i className={subItem.icon} />
                            <p>{subItem.name}</p>
                          </NavLink>
                        </li>
                      );
                    })}
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
