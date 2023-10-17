/* eslint-disable no-unused-vars */
import React, { useState }from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Wrapper = styled.header`
  position: absolute;
  display: flex;
  transition: all 300ms ease;
  width: 100%;
  z-index: 999;
  transition: all 300ms ease;
  justify-content: space-between;
  align-items: center;
  transform: translate3d(0, 0, 0);
  background: #252525;
  @media (min-width: 992px) {
    padding-top: 30px;
  }
  a {
    margin-left: 5%;
    z-index: 3;
    transition: all 0.7s ease;
    color: #fff;
    @media (min-width: 992px) {
      margin-left: 5%;
    }
  }
  .menu {
    @media (min-width: 992px) {
      margin-right: 5%;
    }
  }
  .hamburger {
    padding: 20px 37px 20px 6px;
    position: relative;
    margin-right: 30px;
    transition: all 0.7s ease;
    z-index: 3;
    @media (min-width: 992px) {
      display: none;
    }
    span {
      width: 30px;
      height: 2px;
      background: #fff;
      position: absolute;
      transition: all 0.7s ease;
      &:before {
        position: absolute;
        content: "";
        background: #fff;
        top: -7px;
        height: 100%;
        width: 100%;
        transition: all 0.7s ease;
      }
      &:after {
        position: absolute;
        content: "";
        background: #fff;
        top: 7px;
        height: 100%;
        width: 100%;
        transition: all 0.7s ease;
      }
    }
  }
  .open {
    outline-color: #000;
    span {
      background: transparent;
      &:after {
        top: 0;
        transform: rotate(-585deg);
        background: #000;
      }
      &:before {
        top: 0;
        transform: rotate(-495deg);
        background: #000;
      }
    }
  }
  ul {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #252525;
    top: 60%;
    right: 0;
    display: flex;
    transition: all 0.7s ease;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    max-height: 0;
    overflow: hidden;
    @media (min-width: 768px) {
      height: 720px;
    }
    @media (min-width: 992px) {
      max-width: none;
      background: transparent;
      flex-direction: row;
      height: unset;
      position: relative;
      margin-right: 5%;
    }

    li {
      &:hover {
        a {
          color: green;
        }
      }
      @media (min-width: 992px) {
        margin: 0 10px;
        &:hover {
          a {
            color: blue;
          }
        }
      }
      a {
        font-family: blue;
        display: block;
        padding: 20px;
        cursor: pointer;
        transition: all 0.7s ease;
        color: #00e0ff;

        @media (min-width: 992px) {
          color: #ffffff;
        }
      }
    }
  }
  .change {
    max-height: 1000%;
  }
`;

function Header() {
  const [click, setClick] = useState(false);

  window.onscroll = () => {
    setClick(false);
  };

  return (
    <Wrapper>
      <a href="#">Eli fx Academy</a>
      <div className="menu">
        <div
          className={click ? "hamburger open" : "hamburger"}
          onClick={() => setClick(!click)}
        >
          <span></span>
        </div>
        <ul className={click ? "change" : ""}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Book A session
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              Book A session
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Axe 1 Root
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Header;
