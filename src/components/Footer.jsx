import React from "react";
import styled from "styled-components";
import { SiGooglemaps } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    {
      title: "خرائط جوجل",
      link: "https://g.co/kgs/5SDiFK",
    },
  ];

  return (
    <Container>
      <div className="upper-footer">
        <div className="col">
          <h2>
            عنوان
            <br />
            <span>الشركة</span>
          </h2>
          <ul>
            <li>
              <h3>
                محل 39/6 الدور الميزانين مجمع الليوان العقيلة في نفس مجمع
                المحاكم اكس سايت غانم
              </h3>
            </li>
            {quickLinks.map((link) => (
              <li key={link.title}>
                <SiGooglemaps />
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="styled-link"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <div className="info">
            <h2>
              ستوري
              <br />
              <span>ترافل</span>
            </h2>
          </div>
          <ul className="contact-info">
            <li className="phone">
              <FaPhoneAlt className="icon" />
              <span> +965 22281215 </span>
            </li>
            <li className="email">
              <MdEmail className="icon" />
              <span>sales@storytravelkw.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lower-footer">
        <span>Copyright &copy; Story Travel.</span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  .upper-footer {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 2rem;

    h2 {
      font-size: 3rem;
      line-height: 3rem;
      color: #225377;

      span {
        color: var(--primary-color);
      }
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--secondary-text);
      align-items: center;
      justify-content: center;

      h2 {
        color: #225377;
        text-align: center;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          cursor: pointer;
          transition: var(--default-transition);
          text-align: center;

          &:hover {
            color: var(--primary-color);
          }

          .styled-link {
            color: #a79997;
            text-decoration: none;
            transition: var(--default-transition);

            &:hover {
              color: var(--primary-color);
            }
          }
        }
      }

      .contact-info {
        list-style: none;
        padding-top: 0px;
        margin-bottom: 30px;

        li {
          text-align: center;
          display: flex;
          align-items: center;

          .icon {
            margin-right: 5px; /* Adjust the spacing between the icon and text */
            height: 20px;
            width: auto;
          }
        }

        .phone {
          span {
            margin-left: 5px;
          }
        }

        .email {
          span {
            margin-left: 5px;
          }
        }
      }
    }
  }

  .lower-footer {
    width: 100%;
    max-width: 1200px;
    padding: 2rem 0;
    text-align: center;

    span {
      display: block;
      color: #225377;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .upper-footer {
      grid-template-columns: 1fr;
      .col {
        padding-top: 15px;
      }
    }
  }
`;
