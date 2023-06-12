import React from "react";
import Image from "next/image";
import styles from "../styles/LoanCards.module.scss";
import loanCardImage from "../public/Images/loanCardImage.svg";
import loanCardImage1 from "../public/Images/loanCardImage1.svg";
import loanCardImage2 from "../public/Images/loanCardImage2.svg";
import loanCardImage3 from "../public/Images/loanCardImage3.svg";

const LoanCards = () => {
  const cardData = [
    {
      cardDescription: "Amount Disbursement within 48 hrs in your bank account",
      cardBottomImage: loanCardImage1,
    },
    {
      cardDescription: "Minimum Documentation",
      cardBottomImage: loanCardImage2,
    },
    {
      cardDescription: "Choose EMI between 6 months to 36 months",
      cardBottomImage: loanCardImage3,
    },
    {
      cardDescription: "Zero Foreclosure charges after 6 months",
      cardBottomImage: loanCardImage,
    },
  ];

  return (
    <>
      <div className={styles.loan_cards}>
        <div className={styles.card_container}>
          {cardData.map((data, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.details}>
                  <h1 className={styles.card_number}>{index + 1}</h1>
                  <h1 className={styles.card_description}>
                    {data.cardDescription}
                  </h1>
                </div>

                <div className={styles.card_bottom_img}>
                  <Image
                    src={data.cardBottomImage}
                    alt="loanCardImage"
                    priority
                    className={styles.bottom_image}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LoanCards;
