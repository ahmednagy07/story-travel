import styled, { keyframes } from "styled-components";
import HeroImage from "../assets/plane.jpg";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const handleWhatsappClick = () => {
    const message = "مرحبا .. انا مهتم بخدماتكم";

    const whatsappURL = `https://wa.me/${+96522281215}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+96522281215";
  };

  return (
    <Section>
      <div className="background">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>
            تمتع بتجربة سفر متكاملة وعروض خاصة <br /> مع شركة ستوري ترافل
          </h1>
          <div className="btn-container">
            <button className="btn" onClick={handlePhoneClick}>
              <span>اتصل بنا</span>
              <FaPhoneAlt className="icon" />
            </button>
            <button onClick={handleWhatsappClick} className="whatsapp-btn">
              <span>واتس آب</span>
              <FaWhatsapp className="icon" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  position: relative;

  .background {
    img {
      height: 90vh;
      width: 100%;
    }
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .whatsapp-btn {
    margin-left: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    width: 130px;
    height: 39px;
    padding: 0.2rem 1rem;
    border-radius: 25px;
    background-color: #a7cf4a;
    border: 3px solid #a7cf4a;
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  .icon {
    padding-left: 10px;
    font-size: 2rem;
  }

  .btn {
    display: flex;
    align-items: center;
    width: 130px;
    height: 39px;
    padding: 0.2rem 1rem;
    border-radius: 25px;
    background-color: #225377;
    border: 3px solid #225377;
    font-size: 1.3rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
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
        animation: ${fadeIn} 1s ease-out;
      }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
      .whatsapp-btn {
        font-size: 1rem;
      }

      .btn {
        font-size: 1rem;
      }

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
      }
    }
  }
`;
