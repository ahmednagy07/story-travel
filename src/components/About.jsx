import React from "react";
import styled from "styled-components";
import lighthouse from "../assets/about-us.png";
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from "react-icons/bs";

export default function Offer() {
  const data = [
    {
      text: "أفضل دليل سفر دائمًا لخدماتك",
      icon: <BsPerson />,
      color: "blue",
    },
    {
      text: "تقديم خدمات عالمية لك",
      icon: <BiWorld />,
      color: "green",
    },
    {
      text: "دعم العملاء على مدار الساعة",
      icon: <BsHeadphones />,
      color: "yellow",
    },
  ];
  return (
    <Section id="offer">
      <div className="image">
        <img src={lighthouse} alt="lighthouse" />
      </div>
      <div className="content">
        <div className="title">
          <h3>
            تعمل شركة ستوري ترافل جاهدة من يومها الأول على خلق مفهوم جديد
            للسياحة المتكاملة من خلال توفير الخدمات التي يحتاجها المسافر من
            حجوزات الطيران والإقامة والتنقلات بجميع أنواعها بالإضافة إلى الرحلات
            السياحية اليومية مما يجعل تجربة السفر معنا مريحة وآمنة بأسعار وعروض
            خاصة
          </h3>
        </div>
        <ul className="list">
          {data.map(({ text, icon, color,}) => {
            return (
              <li key={text}>
                <div>
                  <h3 className="text">{text}</h3>
                </div>
                <div className={`icon ${color}`}>{icon}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 4rem 0;
  display: flex;
  gap: 5rem;
  .image {
    img {
      height: 32rem;
      border-radius: 10px;
    }
  }

  .content {
    text-align: center;
    .title {
      margin: 2rem 0;
      h3 {
        font-size: 1.3rem;
        color: #225377;
      }
    }
    .list {
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
        justify-content: right; 
        margin: 2rem 0;
        .icon {
          padding: 0.5rem;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          margin-left: 30px;
        }
        .blue {
          background-color: #225377;
          color: #fff;
        }
        .green {
          background-color: #65ce5455;
          color: #a7cf4a;
        }
        .yellow {
          background-color: #54a4d9;
          color: #fff;
        }
        .text {
            font-size: 1.4rem;
            color: #a7cf4a; 
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
    .image {
      img {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 2rem;
          text-align: center;
        }
      }
      .list {
        li {
          gap: 1rem;
          margin: 2rem 0;
          .text {
            h3 {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
