import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #000;
  margin-bottom: 0;
  padding: 5%;
  ul {
    padding: 0;
    li {
      a {
        color: #4c4c4c;
      }
    }
  }
  .blue-text {
    margin: 0;
  }
  .top {
    display: grid;
    gap: 5%;

    .footer-inner {
      display: grid;
    }
  }
  .bottom {
    margin-top: 35%;
  }
  @media (min-width: 568px) {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      gap: 5%;
      background: #fff;
      border: #4c4c4c 1px solid;
      padding: 1% 0;
      li {
        a {
          &:hover {
            color: #fff;
            background: #000;
            border-radius: 10px;
            padding: 0 2%;
            font-size: 18px;
          }
        }
      }
    }
    .bottom {
      margin-top: 20%;
    }
  }
  @media (min-width: 768px) {
    .top {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    .bottom {
      margin-top: 5%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2%;
      p {
        width: 30%;
      }
      ul {
        padding: 1% 8%;
        li {
          a {
            font-size: 14px;
            &:hover {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .bottom {
      ul {
        padding: 0.5% 4%;
        li {
          a {
            font-size: 12px;
            &:hover {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="top">
        <div className="footer-inner footer-1">
          <h5 className="grey">Get In Touch</h5>
          <a href="#">eliacademyfx@info.com</a>
          <a href="#">eliacademyfx@info.com</a>
        </div>
        <div className="footer-inner footer-2">
          <h5 className="grey">Connect</h5>
          <a href="#">Linked in</a>
          <a href="#">Instagram</a>
        </div>
        <div className="footer-inner footer-3">
          <h5 className="grey">Elifxservices</h5>
          <p className="blue-text">CBD Bulawayo Office 102</p>
          <p className="blue-text">Suite 1 Building</p>
        </div>
        <div className="footer-inner footer-4">
          <h5 className="grey">Location</h5>
          <p className="blue-text">CBD Bulawayo Office 102</p>
          <p className="blue-text">Suite 1 Building</p>
        </div>
        <div className="footer-inner footer-5">
          <h5 className="grey">Quick Links</h5>
          <a href="#">Home</a>
          <a href="#">Book a session</a>
          <a href="#">Resources</a>
          <a href="#">Mentorship</a>
        </div>
      </div>
      <div className="bottom">
        <p className="grey">@2021 Data Privacy</p>
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Footer;
