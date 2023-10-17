import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: url(../images/hero.png);
  background-position: center center;
  background-size: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    height: 50vh;
  }
  @media (min-width: 1200px) {
    height: 100vh;
  }
  .hero-inner {
    padding: 5%;
    .text {
      h1 {
        color: #fff;
        line-height: 28px;
        padding-bottom: 5%;
      }
      .buttons {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5%;
        .blue {
          background: #66e0fb;
          border: none;
          border-radius: 7px;
          padding: 4%;
        }
        .trans {
          background: transparent;
          color: #66e0fb;
          border: #66e0fb 1px solid;
          border-radius: 7px;
          padding: 4%;
        }
      }
    }
    .images {
      display: none;
      width: 30%;
    }

    @media (min-width: 568px) {
      padding: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        width: 80%;
        h1 {
          color: #fff;
          line-height: 28px;
          padding-bottom: 5%;
        }
        .buttons {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 5%;
          .blue {
            border-radius: 7px;
            padding: 4%;
          }
          .trans {
            border-radius: 7px;
            padding: 4%;
          }
        }
      }
      .images {
        display: block;
      }
    }
    @media (min-width: 768px) {
      .text {
        width: 70%;
        h1 {
          font-size: 27px;
        }
        .buttons {
          gap: 5%;
          .blue {
            font-size: 19px;
            border-radius: 7px;
            padding: 4%;
          }
          .trans {
            font-size: 19px;
            border-radius: 7px;
            padding: 4%;
          }
        }
      }
      .images {
        width: 50%;
        display: block;
        img {
          width: 100%;
        }
      }
    }
    @media (min-width: 1200px) {
      .text {
        width: 687px;
        h1 {
          font-size: 32px;
          line-height: 150%;
          letter-spacing: -1.1%;
        }
        .buttons {
          gap: 5%;
          .blue {
            border-radius: 16px;
            width: 204px;
            height: 66px;
            padding: 4%;
            font-size: 16px;
            letter-spacing: -1.1%;
          }
          .trans {
            border-radius: 16px;
            width: 204px;
            height: 66px;
            padding: 4%;
            font-size: 16px;
            letter-spacing: -1.1%;
          }
          
        }
      }
      .images {
        width: 55%;
        padding-top: 15%;
        img {
          width: 551px;

        }
      }
    }
  }
`;

function Hero() {
  return (
    <Wrapper>
      <div className="hero-inner">
        <div className="text">
          <h1>
            "Don't just dream of financial independence, make it a reality. Our
            forex trading academy provides the guidance and tools you need to
            succeed."
          </h1>
          <div className="buttons">
            <button className="blue">Start Trading</button>
            <button className="trans">Open Account</button>
          </div>
        </div>
        <div className="images">
          <img src="./images/hero-top.png" alt="image" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
