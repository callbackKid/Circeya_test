import React from "react";
import circeya from "../images/circeya.svg";
import { HeaderWrapper } from "./HeaderWrapper";
import vector from "../images/vector.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <span>
        <img src={vector} alt="logo" />
        <img src={circeya} alt="circeya" />
      </span>
      <span>+7 (495) 495-49-54</span>
    </HeaderWrapper>
  );
};

export default Header;
