import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #333333;
  padding: 5% 5% 50% 5%;
  h2 {
    padding-bottom: 5%;
  }
  .cards {
    display: grid;
    gap: 3%;
    .card {
      h6{
        color: #fff;
        font-size: 16px;
      }
      text-align: center;
      background: #000;
      position: relative;
      padding: 5% 5% 20% 5%;
      border-radius: 20px;
      p {
        color: #fff;
        margin-bottom: 2%;
      }
      a {
        text-decoration: underline;
      }
      img {
        width: 40%;
      }
    }
  }
  @media (min-width: 568px) {
    padding: 5% 5% 30% 5%;
    .cards {
      .card {
        padding: 5% 4% 5% 4%;
        img {
          width: 20%;
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding: 5% 5% 15% 5%;
    .cards {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 2%;
      .card {
        width: 24%;
        padding: 5% 4% 5% 4%;
        img {
          width: 50%;
        }
      }
      .card1 {
        p {
          padding-bottom: 60%;
        }
      }
      .card3 {
        p {
          padding-bottom: 44%;
        }
      }
      .card4 {
        margin-top: 5%;
        p {
          padding-bottom: 44%;
        }
      }
    }
  }
  @media (min-width: 992px) {
    .cards {
      .card {
        position: relative;
        height: 320px;
        p {
          padding: 0;
        }
        a {
          position: absolute;
          bottom: 5%;
          left: 38%;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    flex-wrap: unset;
    padding:1% 7% 15% 7%;
    h2{
      padding: 1% 0;
    }
    .blue-text{
      padding: 0 0 5% 0;
    }
    .cards {
      .card {
        position: relative;
        width: 21%;
        height: 230px;
        padding: 1%;
        margin: 0;
        img {
          width: 35%;
        }
        p {
          font-size: 12px;
          padding: 0;
        }
        a {
          font-size: 12px;
          position: absolute;
          bottom: 5%;
          left: 38%;
        }
      }
    }
  }
`;

function Services() {
  return (
    <Wrapper>
      <h2 className="top">Services We</h2>
      <h2 className="blue-text">Offer</h2>
      <div className="cards">
        <div className="card card1">
          <img src="./images/s1.png" alt="icon" />
          <h6>Strategy Consulting</h6>
          <p>
            A social assistant that's flexible can accommodate your schedule and
            needs, making life easier.
          </p>
          <a href="#">View More</a>
        </div>
        <div className="card card2">
          <img src="./images/s2.png" alt="icon" />
          <h6>Copy Trading</h6>
          <p>
            Our copy trading service allows you to automatically replicate the
            trades of skilled traders in real-time,giving you the opportunity to
            benefit from their expertise and market insights.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="card card3">
          <img src="./images/s3.png" alt="icon" />
          <h6>Account Managment</h6>
          <p>
            With our personalized approach, we tailor our services to your
            specific investment objectives and risk tolerance.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="card card4">
          <img src="./images/s2.png" alt="icon" />
          <h6>Mentorship classNamees</h6>
          <p>
            Our mentorship classNamees offer a unique opportunity to learn from
            seasoned professionals who have a proven track record in trading.
          </p>
          <a href="#">Join Now</a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
