import React, { useState } from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Logo from "../assets/logo1.gif";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleWhatsappClick = () => {
    const message = "مرحبا .. انا مهتم بخدماتكم";

    const whatsappURL = `https://wa.me/${+96522281215}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
  };

  const handlePhoneClick = () => {
    // Initiate a phone call
    window.location.href = 'tel:+96522281215';
  };

  return (
    <Container state={isNavOpen ? 1 : 0}>
      <div className="btn-container">
        <button className="btn" onClick={handlePhoneClick}>
          <FaPhoneAlt className="icon" />
          <span>22281215</span>
        </button>
        <FaWhatsapp onClick={handleWhatsappClick} className="whatsapp-icon" />
      </div>

      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#blog">أراء عملائنا</a>
          </li>
          <li>
            <a href="#offer">عن الشركة</a>
          </li>
          <li>
            <a href="#destination"> الوجهات</a>
          </li>
          <li>
            <a href="#services"> خدماتنا</a>
          </li>
        </ul>
      </div>
      <div className="brand">
        <img src={Logo} alt="logo" />
      </div>
    
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  .btn-container {
    display: flex;
    align-items: center;

    .whatsapp-icon {
      margin-left: 10px;
      font-size: 2.5rem;
      color: #a7cf4a;
      cursor: pointer;
    }
  }

  .icon {
    padding-right: 5px;
    font-size: 2rem;
  }

  .btn {
    display: flex;
    align-items: center;
    width: 150px;
    height: 39px;
    padding: 0.2rem 1rem;
    border-radius: 25px;
    background-color: white;
    border: 3px solid #225377;
    font-size: 1rem;
    color: #225377;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  }

  .btn span {
    margin-left: 10px;
  }

  .btn:hover {
    background-color: #225377;
    color: white;
    border-color: white;
  }

  .brand {
    img {
      cursor: pointer;
    }
  }

  .toggle {
    display: none;
    cursor: pointer;

    @media screen and (max-width: 1080px) {
      padding-right: 1rem;
      display: block;
      z-index: 1;
    }
  }

  .links {
    ul {
      display: flex;
      gap: 3rem;
      list-style-type: none;

      li {
        a {
          text-decoration: none;
          color: #225377;
          cursor: pointer;
          transition: var(--default-transition);

          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }

    background-color: white;

    @media screen and (max-width: 1080px) {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: var(--primary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;

      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;

        li {
          a {
            color: white;
          }
        }
      }
    }
  }
`;
