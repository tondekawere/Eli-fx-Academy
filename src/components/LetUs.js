import React from 'react'
import styled  from 'styled-components';

const Wrapper = styled.section`
  padding: 5%;
  background: #242424;
  display: grid;
  gap: 5%;
  .text {
    h2 {
      padding-bottom: 5%;
    }
    .cards {
      padding-bottom: 30%;
      display: grid;
      gap: 5%;
      .blue-card {
        height: 120px;
        background: #00e0ff;
        color: #000;
        padding: 5%;
        border: none;
        border-radius: 16px;
        h5 {
          padding-bottom: 30%;
        }
        a {
          text-decoration: underline;
          color: #000;
        }
      }
      .trans-card {
        height: 120px;
        border: #66e0fb 1px solid;
        border-radius: 16px;
        padding: 5%;
        color: #00e0ff;
        h5 {
          color: #00e0ff;
        }
        a {
          text-decoration: underline;
        }
      }
    }
  }
  @media (min-width: 568px) {
    .cards {
      padding-bottom: 10% !important;
      display: flex !important;
      justify-content: flex-start;
      align-items: center;
      gap: 5%;
      width: 100%;
      .blue-card {
        width: 50%;

        padding: 5%;
        h5 {
          font-size: 16px;
          padding-bottom: 40% !important;
        }
        a {
          text-decoration: underline;
          color: #000;
        }
      }
      .trans-card {
        width: 50%;
        border: #66e0fb 1px solid;
        border-radius: 16px;
        padding: 5%;
        color: #00e0ff;
        h5 {
          font-size: 16px;
          color: #00e0ff;
        }
        a {
          text-decoration: underline;
        }
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      width: 100%;
      img {
        margin-left: -22%;
        width: 160%;
      }
    }
    .text {
      width: 120%;
      .top {
        padding: 0;
      }
    }
    .cards {
      gap: 5%;
      width: 100%;
      .blue-card {
        width: 50%;
        padding: 5%;
        h5 {
          font-size: 16px;
          padding-bottom: 83% !important;
        }
      }
      .card {
        height: 160px !important;
      }
    }
  }
  @media (min-width: 992px) {
    padding-bottom: 0;
    .image {
      img {
        margin-bottom: -32%;
      }
    }
    .cards {
      gap: 5%;
      .blue-card {
        height: 140px !important;
        h5 {
          padding-bottom: 60% !important;
        }
      }
      .trans-card {
        height: 140px !important;
      }
    }
  }
  @media (min-width: 1200px) {
    gap: 0%;
    padding: 1% 5% 0 0;
    .image {
      margin-bottom: -3%;
      width: 722px;
      img {
        width: 100%;
        margin: 0%;
      }
    }
    .text {
      padding: 1% 0 5% 0;
      width: 50%;
      h2 {
        font-size: 32px;
        letter-spacing: -1, 1%;
        padding-bottom: 0;
      }
    }
    .cards {
      padding-bottom: 0 !important;
      gap: 5%;
      .blue-card {
        width: 257px;
        padding: 1% 1% 0 1% !important;
        height: 148px !important;
        h5 {
          padding-bottom: 30% !important;
        }
      }
      .trans-card {
        width: 257px;
        padding: 1% 1% 0 1% !important;
        height: 148px !important;
        p {
          margin: 0;
          padding: 5% 0;
        }
      }
    }
  }
`;

function LetUs() {
  return (
    <Wrapper>
         <div className="image">
            <img src="./images/let.png" alt="image"/>
        </div>
        <div className="text">
            <h2 className="top">Let Us Help You Become A successful</h2>
            <h2 className="blue-text">Trader</h2>
            <p>
                Eli FX Academy provides comprehensive guidance on navigating the various stages involved in making a
                profitable trade.
                Given the unique characteristics of each trade, it is crucial to develop a deep understanding of market
                dynamics in
                order to identify trades that have the potential for success. Eli FX Academy is dedicated to equipping
                you with the
                knowledge and skills necessary to comprehend market operations and effectively select trades that yield
                favourable
                outcomes.
            </p>
            <div className="cards">
                <div className="blue-card card">
                    <h5>Forex Trading Signal</h5>
                    <a href="#">Subscribe Now</a>
                </div>
                <div className="trans-card card">
                    <h5>Mentorship Class </h5>
                    <p>Great mentors to equip you in
                    you trading Career</p>
                    <a href="#">Book Now</a>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default LetUs