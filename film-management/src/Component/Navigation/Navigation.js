import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";
import { Link } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import './Navigation.css'


export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);


  return (
    <Navbar
      alignLinks="left"
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <ul>
        <li>
          <Link to="/" style={{ color: theme.color }}>
            <Icon left style={{color: theme.color, margin: 0}}>home</Icon>Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: theme.color }}>
            <Icon left style={{color: theme.color, margin: 0}}>info_outline</Icon>About
          </Link>
        </li>
        <li>
          <Link to="/news" style={{ color: theme.color }}>
            <Icon left style={{color: theme.color, margin: 0}}>dvr</Icon>News
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: theme.color }}>
            <Icon left style={{color: theme.color, margin: 0}}>contacts</Icon>Contact
          </Link>
        </li>
        <li>
          <div style={{ position: "relative" }}>
            <a
              className="switch-mode"
              href="#"
              onClick={toggle}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
              data-testid="toggle-theme-btn"
            >
              Switch to {!dark ? "Dark" : "Light"} mode
            </a>
          </div>
        </li>
       
        <li>
          <Link to="/login" style={{ color: theme.color }}>
            <Icon left style={{color: theme.color, margin: 0}}>login</Icon>Login
          </Link>
        </li>
      
       
      </ul>
    </Navbar>
  );
        
}
