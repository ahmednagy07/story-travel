import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stars from "../assets/stars.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";

export default function Testimonial() {
  const testimonials = [
    {
      Image: avatar1,
      name: "M",
      content: "مجهودكم رائع ومعاملتكم راقية شكرا من القلب وبالتوفيق",
    },
    {
      Image: avatar2,
      name: "S",
      content: "بأذن الله والله كذا واحد نصحني بسفرياتكم يمدحونكم وعلي شغلكم",
    },
    {
      Image: avatar3,
      name: "A",
      content:
        "السلام عليكم حبيت اشكركم علي حسن تواصلكم ومعاملتكم الراقي معاي وما قصرتو والله يعطيكم الف عافية",
    },
    {
      Image: avatar4,
      name: "F",
      content:
        "شكرا اللهم لك الحمد والشكر كل الامور تمام والترتيب والتنظيم شئ طيب للأمانه شكرا لمكتبكم المحترم وللطاقم جميعا علي تنظيم الرحله الجميله ةعلي تسهيل الأمور حميعا",
    },
    {
      Image: avatar5,
      name: "T",
      content:
        "السلام عليكم ورحمة الله وبركاته الرحلة كانت منظمه جدا الحقيقه وكل شئ كان علي اعلي مستوي ان شاء الله احجز معاكم العمره القادمه",
    },
    {
      Image: avatar6,
      name: "A",
      content:
        "السلام عليكم ورحمة الله وبركاته انا بشكركم علي الخدمة الممتازة اللي بتقدموها بيض الله وجهيكم جميعا وشكرا من القلب",
    },
    {
      Image: avatar7,
      name: "F",
      content:
        "كتير مشكورين علي تعبكم معنا ما قصرتوا ابدا وشكرا علي تعاونكم وطولة بالكم علينا وشكرا لا كل شئ عملتوه النا",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <Section id="blog">
      <div className="title">
        <h1>اراء عملائنا</h1>
      </div>
      <div className="testimonials">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="title">
                <div className="image">
                  <img src={testimonial.Image} alt={`avatar${index + 1}`} />
                </div>
                <div className="info">
                  <h3>{testimonial.name}</h3>
                </div>
              </div>
              <div>
                <img className="stars" src={stars} alt="stars" />
              </div>
              <p className="description">{testimonial.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;

  .title {
    h1 {
      margin-bottom: 50px;
      text-align: center;
      font-size: 2rem;
      color: #225377;
    }
  }

  .stars {
    width: 120px;
    height: 70px;
    margin: 0 auto;
  }

  .testimonials {
    width: 50%;
    height: 100%;
    margin: 0 auto;
  }

  .testimonial {
    height: 355px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-top: 0.5rem solid var(--primary-color);
    text-align: center;

    .title {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;

      .image {
        img {
          height: 3rem;
        }
      }

      .info {
        span {
          color: var(--primary-color);
        }
      }
    }

    .description {
      font-size: 1.1rem;
      line-height: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .testimonials {
      width: 90%;
    }
  }
`;

