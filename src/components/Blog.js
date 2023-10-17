import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #2c2c2c;
  padding: 2% 5% 100% 5%;
  h2 {
    padding-bottom: 5%;
  }
  .cards {
    display: grid;
    gap: 8%;
    .card {
      background: #000;
      position: relative;
      padding: 5% 5% 20% 5%;
      border-radius: 20px;
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../images/bg-1.png);
        background-position: center center;
        background-size: center;
        bottom: -15%;
        right: 0%;
      }
      p {
        color: #fff;
      }
      img {
        width: 20%;
      }
      .profile {
        position: absolute;
        left: 27%;
        bottom: -18%;
        img {
          width: 100%;
        }
      }
    }
    .card-3 {
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../images/bg-2.png);
        background-position: center center;
        background-size: center;
        bottom: -15%;
        right: 0%;
      }
      .profile {
        left: 31%;
        bottom: -10%;
      }
    }
  }
  @media (min-width: 568px) {
    padding: 2% 5% 45% 5%;
    h2 {
      padding-bottom: 5%;
    }
    .cards {
      display: grid;
      gap: 8%;
      .card {
        padding: 5% 5% 13% 5%;
        border-radius: 20px;
        &:before {
          bottom: -10%;
          right: 0%;
        }
        p {
          color: #fff;
        }
        img {
          width: 10%;
        }
        .profile {
          position: absolute;
          left: 37%;
          bottom: -18%;
          img {
            width: 100%;
          }
        }
      }
      .card-3 {
        &:before {
          bottom: -13%;
          right: 0%;
        }
        .profile {
          left: 41%;
          bottom: -15%;
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding: 2% 5% 15% 5%;
    h2 {
      padding-bottom: 5%;
    }
    .cards {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 8%;
      .card {
        width: 36%;
        padding: 5% 5% 10% 5%;
        &:before {
          bottom: -10%;
        }
        .profile {
          left: 30%;
          bottom: -15%;
        }
      }
      .card-3 {
        margin-top: 19%;
        &:before {
          bottom: -13%;
          right: 0%;
        }
        .profile {
          left: 33%;
          bottom: -10%;
        }
      }
    }
  }
  @media (min-width: 992px) {
    h2 {
      padding-bottom: 0%;
    }
    .blue-text {
      padding-bottom: 5%;
    }
    .cards {
      gap: 8%;
      .card {
        width: 36%;
        padding: 5% 5% 8% 5%;
        &:before {
          bottom: -10%;
          right: -10%;
        }
        .profile {
          left: 35%;
        }
      }
      .card-3 {
        margin-top: 12%;
        &:before {
          right: -4%;
        }
        .profile {
          left: 38%;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    h2{
      margin-left: 2%;
    }
    padding: 2% 8% 0 8%;
    .cards {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: unset;
      gap: 7%;
      .card {
        margin-bottom: 7%;
        padding: 1%;
        width: 25%;
        height: 350px;
        
        &:before {
          bottom: -9%;
        }
        p{
          font-size: 14px;
        }
        img{
          width: 15%;
        }
        .profile {
          left: 30%;
          bottom: -15%;
        }
      }
      .card-3 {
        margin-top: unset;
        &:before {
          bottom: -13%;
          right: 0%;
        }
        .profile {
          left: 33%;
          bottom: -12%;
        }
      }
    }
  }
`;

function Blog() {
  return (
    <Wrapper>
      <h2 className="top">What They</h2>
      <h2 className="blue-text">Say</h2>
      <div className="cards">
        <div className="card">
          <img src="./images/quotes.png" alt="icon" />
          <p>
            Eli Fx Academy's trading services that I truly experienced success.
            Their expertise and guidance have been invaluable in helping me
            navigate the unpredictable forex market. With their well-researched
            analysis and timely trade recommendations, I have seen consistent
            profits and remarkable growth in my trading portfolio. I highly
            recommend Eli Fx Academy to anyone serious about forex trading." -
            John, Forex Trader
          </p>
          <div class="profile">
            <img src="./images/p1.png" alt="profile" />
          </div>
        </div>
        <div className="card">
          <img src="./images/quotes.png" alt="icon" />
          <p>
            Eli Fx Academy's trading services that I truly experienced success.
            Their expertise and guidance have been invaluable in helping me
            navigate the unpredictable forex market. With their well-researched
            analysis and timely trade recommendations, I have seen consistent
            profits and remarkable growth in my trading portfolio. I highly
            recommend Eli Fx Academy to anyone serious about forex trading." -
            John, Forex Trader
          </p>
          <div class="profile">
            <img src="./images/p1.png" alt="profile" />
          </div>
        </div>
        <div className="card card-3">
          <img src="./images/quotes.png" alt="icon" />
          <p>
            Eli Fx Academy's trading services that I truly experienced success.
            Their expertise and guidance have been invaluable in helping me
            navigate the unpredictable forex market. With their well-researched
            analysis and timely trade recommendations, I have seen consistent
            profits and remarkable growth in my trading portfolio. I highly
            recommend Eli Fx Academy to anyone serious about forex trading." -
            John, Forex Trader
          </p>
          <div class="profile">
            <img src="./images/p2.png" alt="profile" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Blog;
