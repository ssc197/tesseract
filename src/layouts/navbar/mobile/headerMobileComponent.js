import React, { useEffect, useState } from "react";
import { Motion, spring, presets } from "react-motion";
import "./style.scss";
 
import  HamburgerComponent from "./hamburgerMenu"; 
import logo from "../../../assets/images/logo.svg";

const HeaderMobileComponent = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", updateScrolled);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);
  const updateScrolled = () => {
    if (window.pageYOffset > 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const hamStyle = {
    cursor: "pointer",
    color: "#fff",
    height: 25,
    width: 100,
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    position: 'relative',
    left: 25,
    zIndex: 999,
    transition: 'all 0.3s linear'
  };
  const HamburgerIcon = (
    <svg
      viewBox="0 0 96 96"
      height="1em"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      style={hamStyle}
      className="abc"
    >
      <Motion
        style={{
          x: spring(isMenuOpen ? 1 : 0, presets.wobbly),
          y: spring(isMenuOpen ? 0 : 1, presets.wobbly),
        }}
      >
        {({ x, y }) => (
          <g
            id="navicon"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              transform={`translate(${x * 10}, ${x * -5}) rotate(${
                x * 45
              }, 7, 26)`}
              x1="7"
              y1="10"
              x2="109"
              y2="10"
            />
            <line
              transform={`translate(${x * 20}, ${x * 8}) rotate(${
                x * -48
              }, 7, 70)`}
              x1="7"
              y1="74"
              x2="109"
              y2="74"
            />
            <line
              opacity={y}
              transform={`translate(${x * -96})`}
              x1="7"
              y1="42"
              x2="109"
              y2="42"
            />
          </g>
        )}
      </Motion>
    </svg>
  );
  return (
    <>
      <header className={`header ${scrolled ? "codGray" : ""}`}>
        <div className="container pt-30 pb-30">
          <div className="logo">
            <img src={logo} />
          </div>
          {HamburgerIcon}
        </div>
       <HamburgerComponent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

      </header>

    </>
  );
};

export default HeaderMobileComponent;
