import React from "react";
import Image from "next/image";
import LoanCards from "./LoanCards";
import styles from "../styles/LoanAdvantage.module.scss";
import MagninfyingIcon from "../public/Images/magninfyingIcon.svg";
import CheckIcon from "../public/Images/CheckIcon.svg";
import poweredByImage from "../public/Images/poweredByImage.svg";

const LoanAdvantage = () => {
  const required_documents_data = [
    {
      documentName: "Pan Card",
    },
    {
      documentName: "Aadhar card",
    },
    {
      documentName: "Current Address details",
    },
    {
      documentName: "Permanent address proof",
    },
    {
      documentName: "Latest last 3 months Bank statement",
    },
    {
      documentName: "Latest last 3 months Salary Slip",
    },
  ];

  const half = Math.ceil(required_documents_data.length / 2); //array devided by 2
  const firstHalfOfArray = required_documents_data.slice(0, half);
  const secondHalfOfArray = required_documents_data.slice(half);
  return (
    <>
      <section className={styles.loanCard}>
        <h1 className={styles.heading}>udChalo Loan Advantage</h1>
        <LoanCards />
      </section>
      <div className={styles.loan_advantage}>
        <div className={styles.container}>
          <div className={styles.magnifying_glass_container}>
            <Image
              src={MagninfyingIcon}
              alt="magnifyingGlassImage"
              priority
              className={styles.magnifying_glass}
            />
          </div>

          <div>
            <h1 className={styles.title}>Documents Required</h1>
            <div className={styles.document_list}>
              <div>
                {firstHalfOfArray.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.checkIcon_and_documentName}
                    >
                      <Image
                        priority
                        src={CheckIcon}
                        alt="check icon"
                        className={styles.magnifying_glass_image}
                      />
                      <h1 className={styles.document_name}>
                        {data.documentName}
                      </h1>
                    </div>
                  );
                })}
              </div>

              <div>
                {secondHalfOfArray.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.checkIcon_and_documentName}
                    >
                      <Image
                        priority
                        src={CheckIcon}
                        alt="check icon"
                        className={styles.magnifying_glass_image}
                      />
                      <h1 className={styles.document_name}>
                        {data.documentName}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.powered_by}>
          <h1 className={styles.powered_by_title}>Powered by : </h1>
          <Image
            src={poweredByImage}
            width={150}
            height={30}
            alt="poweredByImage"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default LoanAdvantage;
