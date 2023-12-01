import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";

export default function Services() {
  const data = [
    {
      image: service6,
    },
    {
      image: service2,
    },
    {
      image: service1,
    },
    {
      image: service5,
    },
    {
      image: service4,
    },
    {
      image: service3,
    },
  ];

  return (
    <Section id="services">
      <h2>خدماتنا</h2>
      <div className="services">
        {data.map(({ image }, index) => (
          <div className="service" key={index}>
            <img src={image} alt="service" />
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 6rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #225377;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-content: center;

    .service {
      border-radius: 10px;
      padding: 1rem 1rem;
      text-align: center;
      background-color: var(--card-grey);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      h3 {
        color: var(--primary-text);
      }

      p {
        color: var(--secondary-text);
      }

      img {
        height: 300px;
        width: 100%;
      }

      transition: var(--default-transition);

      &:hover {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .services {
      grid-template-columns: repeat(2, 1fr); /* Set to 2 columns for medium screens */

      
      img {
        height: auto;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .services {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 3rem;
  }
`;
