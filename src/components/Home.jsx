import styled from "styled-components";
import HeroImage from "../assets/plane.jpg";

export default function Home() {
  return (
    <Section>
      <div className="background">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>
            تمتع بتجربة سفر متكاملة وعروض خاصة <br /> مع شركة ستوري ترافل{" "}
          </h1>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 2rem;
  position: relative;

  .background {
    img {
      height: 90vh;
      width: 100%;
    }
  }

  .content {
    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: white;
      }
    }

    .planner {
      position: absolute;
      bottom: -2rem;
      right: 0;
      background-color: white;
      padding: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      form {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        .row {
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: start;

          label {
            font-size: 0.7rem;
            color: var(--secondary-text);
          }

          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }

          input:focus {
            outline: none;
          }

          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 1rem;

        h1 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          padding-right: 30px;

        }
      }

      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
