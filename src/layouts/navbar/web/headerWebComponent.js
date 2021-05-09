import React from "react";
 import "./style.scss";
import { configObject } from "../../../helper/objectHelper";

import logo from "../../../assets/images/logo.svg";

const HeaderWebComponent = () => {
  const { subMenu } = configObject;
  

  return (
    <>
      <header className={`header`}>
        <div className="container pt-10 pb-10">
          <div className="logo">
            <img src={logo} alt="JIO tesseract logo"/> 
          </div>
          <ul className="nav-links">
            {subMenu.map((item, index) => {
              return (
                  <li className="nav-pill" key={index}>
                    <a>
                      {item.name}
                    </a>                
                  </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default HeaderWebComponent;
