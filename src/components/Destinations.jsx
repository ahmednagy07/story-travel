import React, { useState, useEffect } from "react";
import styled from "styled-components";
import travel1 from "../assets/travel1.png";
import travel2 from "../assets/travel2.png";
import travel3 from "../assets/travel3.png";
import travel4 from "../assets/travel4.png";
import travel5 from "../assets/travel5.png";
import travel6 from "../assets/travel6.png";
import travel7 from "../assets/travel7.png";
import travel8 from "../assets/travel8.png";
import travel9 from "../assets/travel9.png";
import travel10 from "../assets/travel10.png";

export default function Destinations() {
  const data = [
    {
      image: travel1,
    },
    {
      image: travel2,
    },
    {
      image: travel3,
    },
    {
      image: travel4,
    },
    {
      image: travel5,
    },
    {
      image: travel6,
    },
    {
      image: travel7,
    },
    {
      image: travel8,
    },
    {
      image: travel9,
    },
    {
      image: travel10,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <Section id="destination">
      <SliderContainer>
        {data.map((destination, index) => (
          <Slide
            key={index}
            className={index === currentImage ? "visible" : ""}
          >
            <img src={destination.image} alt={`Destination ${index + 1}`} />
          </Slide>
        ))}
        <div className="info">
          <h2>
            وجهاتنا <span>المميزة</span>
          </h2>
        </div>
      </SliderContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  overflow: hidden;

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 3rem;
      line-height: 3rem;
      color: #225377;
      span {
        color: var(--primary-color);
      }
    }

    p {
      color: var(--secondary-text);
    }
  }
`;

const SliderContainer = styled.div`
  flex: 2;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  height: 90vh;

  @media screen and (max-width: 1080px) {
    height: 75vh;

  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  padding-top: 100px;

  &.visible {
    opacity: 1;
  }

  img {
    width: auto;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1080px) {
    .img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .img {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
