import React from 'react'
import styled from "styled-components";

const Wrapper = styled.section`
  background: url(../images/r-bg.png);
  background-position: center center;
  background-size: center;
  padding: 5%;
  .right {
    .rows {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #fff;
      .row-image {
        /* img {
          width: 20%;
        } */
      }
      .text {
        width: 50%;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    .image{
      width: 90%;
      img{
        width: 100%;
      }
    }
  }
`;

function Resources() {
  return (
    <Wrapper>
        <div className="image">
            <img src="./images/resources.png" alt="image"/>
        </div>
        <div className="right">
            <div className="rows row-1">
                <div className="row-image">
                    <img src="./images/r1.png" alt="images"/>
                </div>
                <div className="text">
                    <h5 className="blue-text">Forex Educations</h5>
                    <p>
                        articles, tutorials, videos, and
                        e-books.
                    </p>
                </div>
                <a href="#">+</a>
            </div>
            <div className="rows row-2">
                <div className="row-image">
                    <img src="./images/r2.png" alt="images"/>
                </div>
                <div className="text">
                    <h5 className="blue-text">Trading Tools</h5>
                    <p>
                        Pip calculator ,currency converter
                        position size calculators ,Axe 1 robot
                    </p>
                </div>
                <a href="#">+</a>
            </div>
            <div className="rows row-1">
                <div className="row-image">
                    <img src="./images/r3.png" alt="images"/>
                </div>
                <div className="text">
                    <h5 className="blue-text">Trading Platforms</h5>
                    <p>
                        Broker Reviews ,Brokers
                    </p>
                </div>
                <a href="#">+</a>
            </div>
        </div>
    </Wrapper>
  )
}

export default Resources