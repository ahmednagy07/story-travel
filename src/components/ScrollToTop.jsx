import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Div>
      <a className={`${visible ? "block" : "none"}`}>
        <Circle>
          <FaWhatsapp onClick={handleWhatsappClick} />
        </Circle>
        <Circle>
          <FaPhoneAlt onClick={handlePhoneClick} />
        </Circle>
        <Circle onClick={scrollToTop}>
          <FaChevronUp />
        </Circle>
      </a>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    display: flex;
    flex-direction: column; /* Display circles in a column */
    position: fixed;
    bottom: 40px;
    right: 40px;
    transition: 0.4s ease-in-out;
    z-index: 1;
    cursor: pointer;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 75vw;
      right: initial;
    }
  }
`;

const Circle = styled.div`
  background-color: var(--primary-color);
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 0.5rem; /* Adjust spacing between circles */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: white;
    font-size: 1.5rem;
  }
`;

export default ScrollToTop;
