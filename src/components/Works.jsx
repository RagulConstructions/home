/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import './card.scss';
import { forwardRef } from "react";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  gap: 35px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
margin: auto;
font-size: 1.5em;
font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  font-style: normal;
`;
const Card = styled.div`
background: rgba( 255, 255, 255, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3.5px );
-webkit-backdrop-filter: blur( 3.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const Works = ({txt},ref) => {
  return (
    <Section ref={ref}>
      
      <Card>
        <section>
        <Title>THESE ARE OUR PREVIOUS WORKS</Title>
          <div className="container">
            <div className="carousel">
              <input
                type="radio"
                name="slides"
                checked="checked"
                id="slide-1"
              />
              <input type="radio" name="slides" id="slide-2" />
              <input type="radio" name="slides" id="slide-3" />
              <input type="radio" name="slides" id="slide-4" />
              <input type="radio" name="slides" id="slide-5" />
              <input type="radio" name="slides" id="slide-6" />
              <ul className="carousel__slides">
                <li className="carousel__slide">
                  <figure>
                    <div>
                      <img src="./works/2.JPG" alt="" />
                    </div>
                    <figcaption>
                      Poppys Olive de' villa,
                      <span className="credit"> Pondicherry</span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure>
                    <div>
                      <img src="./works/3.JPG" alt="" />
                    </div>
                    <figcaption>
                      Poppys Olive de' villa, 
                      <span className="credit"> Pondicherry</span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure>
                    <div>
                      <img src="./works/1.JPG" alt="" />
                    </div>
                    <figcaption>
                      Poppys Olive de' villa,
                      <span className="credit"> Pondicherry</span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure>
                    <div>
                      <img src="./works/7.jpeg" alt="" />
                    </div>
                    <figcaption>
                      Poppys Olive de' villa,
                      <span className="credit">
                      Pondicherry
                      </span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure>
                    <div>
                      <img src="./works/5.JPG" alt="" />
                    </div>
                    <figcaption>
                      Poppys Olive de' villa,
                      <span className="credit"> Pondicherry</span>
                    </figcaption>
                  </figure>
                </li>
                <li className="carousel__slide">
                  <figure>
                    <div>
                      <img src="./works/6.JPG" alt="" />
                    </div>
                    <figcaption>
                      Poppys Olive de' villa,
                      <span className="credit"> Pondicherry</span>
                    </figcaption>
                  </figure>
                </li>
              </ul>
              <ul className="carousel__thumbnails">
                <li>
                  <label htmlFor="slide-1">
                    <img src="./works/2.JPG" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-2">
                    <img src="./works/3.JPG" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-3">
                    <img src="./works/1.JPG" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-4">
                    <img src="./works/7.jpeg" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-5">
                    <img src="./works/5.JPG" alt="" />
                  </label>
                </li>
                <li>
                  <label htmlFor="slide-6">
                    <img src="./works/6.JPG" alt="" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Card>
    </Section>
  );
};

export default forwardRef(Works);
