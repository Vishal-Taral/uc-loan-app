import React from "react";
import Image from "next/image";
import styles from "../styles/LoanCards.module.scss";
import loanCardImage1 from "../public/Images/loanCardImage1.png";
import ellipseImage from "../public/Images/EllipseImage.svg";

type Props = {};

const LoanCards = (props: Props) => {
  const cardData = [
    {
      cardDescription: "Amount Disbursement within 48 hrs in your bank account",
      cardBottomImage: loanCardImage1,
    },
    {
      cardDescription: "Minimum Documentation",
      cardBottomImage: loanCardImage1,
    },
    {
      cardDescription: "Choose EMI between 6 months to 36 months",
      cardBottomImage: loanCardImage1,
    },
    {
      cardDescription: "Zero Foreclosure charges after 6 months",
      cardBottomImage: loanCardImage1,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.card_container}>
        {cardData.map((data, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.details}>
                <h1 className={styles.card_number}>{index + 1}</h1>
                <h5 className={styles.card_description}>
                  {data.cardDescription}
                </h5>
              </div>

              <div className={styles.image_container}>
                <Image
                  src={data.cardBottomImage}
                  alt="loanCardImage"
                  width={224}
                  height={32}
                  priority
                />
              </div>
            </div>
          );
        })}

        {/* <div className={styles.card}>hjsgdfv</div>
            <div className={styles.card}>hjsgdfv</div>
            <div className={styles.card}>hjsgdfv</div> */}
      </div>
    </div>
  );
};

export default LoanCards;
