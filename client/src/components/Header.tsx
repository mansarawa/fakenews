import React from 'react'
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/feature/counterSlice.tsx";
function Header() {
    const dispatch = useDispatch();
  return (
    <div id='wrapper'>
        <header className="tech-header header">
      <div className="container-fluid">
        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
          <a className="navbar-brand" href="#">
            <img src="images/version/tech-logo.png" alt="" />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" onClick={() => dispatch(setCategory("HOME"))}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => dispatch(setCategory("business"))}>
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => dispatch(setCategory("top"))}>
                  Top
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => dispatch(setCategory("WORLD"))}>
                  World
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => dispatch(setCategory("entertainment"))}>
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header