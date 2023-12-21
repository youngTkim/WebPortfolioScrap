import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import DragHandleIcon from "@mui/icons-material/DragHandle";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Header({ scene1 }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const head = {
    fontSize: "12px",
    fontWeight: 400,
    marginBottom: "24px",
  };
  const large = {
    fontSize: "24px",
    fontWeight: "700",
  };
  const small = {
    fontSize: "12px",
    fontWeight: "700",
    marginBottom: "3px",
  };

  return (
    <>
      <HeaderWrapper className={`${scene1 ? "nav-up" : "nav-down"}`}>
        <HeaderNavContainer>
          <HeaderNavUlContainer>
            <HeaderNavLi style={{ pointerEvents: "none", marginRight: "12px" }}>
              <label className="submenu_title">
                <img src="https://www.dingoglobal.com/theme/responsive_makeus/include/img/logo.svg" />
              </label>
            </HeaderNavLi>
            <HeaderNavLi>
              <label className="submenu_title">
                <span>Company</span>
              </label>
              <div className="nav_li_submenu">
                <div className="submenu">
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>About</span>
                      </li>
                    </ul>
                  </span>
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>IR & NEWS</span>
                      </li>
                    </ul>
                  </span>
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Contact us</span>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </HeaderNavLi>
            <HeaderNavLi>
              <label className="submenu_title">
                <span>Media</span>
              </label>
              <div className="nav_li_submenu">
                <div className="submenu">
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Dingo</span>
                      </li>
                    </ul>
                  </span>
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Dingo Channel</span>
                      </li>
                    </ul>
                  </span>
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Dingo Original</span>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </HeaderNavLi>
            <HeaderNavLi>
              <label className="submenu_title">
                <span>Business</span>
              </label>
              <div className="nav_li_submenu">
                <div className="submenu">
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Video IP</span>
                      </li>
                    </ul>
                  </span>
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Music IP</span>
                      </li>
                    </ul>
                  </span>
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Live Entertainment IP</span>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </HeaderNavLi>
            <HeaderNavLi>
              <label className="submenu_title">
                <span>Recruit</span>
              </label>
              <div className="nav_li_submenu">
                <div className="submenu">
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Dingo Crew</span>
                      </li>
                    </ul>
                  </span>
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Dingo Life</span>
                      </li>
                    </ul>
                  </span>
                  <span className="submenu_sec">
                    <ul className="submenu_sec_ul">
                      <li className="submenu_sec_li" style={large}>
                        <span>Dingo Apply</span>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </HeaderNavLi>
            <HeaderNavLi />
            <HeaderNavLi>
              <label className="submenu_title">
                <DragHandleIcon />
              </label>
            </HeaderNavLi>
          </HeaderNavUlContainer>
        </HeaderNavContainer>
      </HeaderWrapper>
      <LogoArrowDown className={`${scene1 ? "arrow-up" : "arrow-down"}`}>
        <KeyboardDoubleArrowDownIcon />
      </LogoArrowDown>
    </>
  );
}

const logoArrowDown = keyframes`
0% {
  transform: translateY(-75%);
  opacity: 0;
}

100% {
  transform: translateY(0%);
  opacity: 1;
}
`;
const LogoArrowDown = styled.span`
  position: fixed;
  color: white;
  z-index: 99999;
  top: 93vh;
  left: 50%;
  transition: 0.5s ease;
  svg {
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    animation: ${logoArrowDown} 1s ease-in-out infinite;
  }

  &.arrow-up {
    transform: translateY(0px);
    opacity: 1;
  }
  &.arrow-down {
    transform: translateY(80px);
    opacity: 0;
    touch-action: none;
    pointer-events: none;
  }
`;

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  z-index: 99999;
  width: 100%;
  height: 85px;
  background-color: #f5f5f7;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1.58824;
  background-color: white;
  font-size: 20px;
  transition: 0.5s ease;
  &.nav-up {
    transform: translateY(0%);
    background-color: transparent;
    color: white;
    opacity: 1;
  }

  &.nav-down {
    background-color: white;
    color: black;
    transform: translateY(-100%);
    touch-action: none;
    pointer-events: none;
  }
`;

const HeaderNavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  padding: 0 22px;
`;

const HeaderNavUlContainer = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
`;

const HeaderNavLi = styled.li`
  flex: 1;
  display: block;
  z-index: 90;

  .submenu_title {
    display: flex;
    height: 100%;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out;
    svg {
      transform: scale(1.5);
    }
  }
  .nav_li_submenu {
    overflow: hidden;
    display: flex;
    position: absolute;
    flex-direction: column;
    color: #212121;
    width: 100%;
    height: 0px;
    top: 85px;
    left: 0;
    opacity: 0; /* 초기에는 안 보이도록 설정 */
    transition: 0.5s ease-in-out;
  }
  .submenu {
    display: flex;
    padding: 16px 100px;
    height: 100%;
    width: 100%;
  }
  .submenu_sec {
    display: flex;
    padding: 8px;
    margin-right: 8px;
    width: 33.3%;
    /* border: 1px solid black; */
  }
  .submenu_sec_small {
    display: flex;
    padding: 8px;
    margin-right: 4px;
    width: 10%;
  }
  .submenu_sec_ul {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .submenu_sec_li {
    padding-left: 3px;
    text-align: left;
  }
  &:hover > label {
    background-color: white;
    color: black;
  }
  &:hover > .nav_li_submenu {
    width: 100%;
    opacity: 1;
    background-color: white;
    height: auto;
  }
`;
