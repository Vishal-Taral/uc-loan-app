import React from "react";
import Image from "next/image";
import styles from "../styles/LoanAdvantage.module.scss";
import LoanCards from "./LoanCards";
import poweredByImage from "../public/Images/poweredByImage.png";
import MagninfyingIcon from "../public/Images/magninfyingIcon.svg";
import CheckIcon from "../public/Images/CheckIcon.svg";

type Props = {};

const LoanAdvantage = (props: Props) => {
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
    <div className={styles.loan_advantages}>
      <div className={styles.required_documents_main}>
        <div className={styles.required_documents}>
          <div className={styles.magnifying_glass_image_container}>
            {/* <MagninfyingIcon className={styles.magnifying_glass_image} /> */}

            <Image
              priority
              src={MagninfyingIcon}
              width={230}
              height={230}
              alt="magnifying image"
              className={styles.magnifying_glass_image}
            />
          </div>

          <div className={styles.document_main_container}>
            <h1 className={styles.title}>Documents Required</h1>
            <div className={styles.document_list}>
              <div className={styles.documents}>
                {firstHalfOfArray.map((data, index) => {
                  return (
                    <div key={index} className={styles.checkIcon_documentName}>
                      {/* <CheckIcon /> */}
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
              <div className={styles.documents}>
                {secondHalfOfArray.map((data, index) => {
                  return (
                    <div key={index} className={styles.checkIcon_documentName}>
                      {/* <CheckIcon /> */}
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
      </div>

      <div className={styles.loan_advantage_card}>
        <LoanCards />
      </div>

      <div className={styles.powered_by}>
        <h1>Powered by : </h1>
        <Image
          src={poweredByImage}
          width={150}
          height={30}
          alt="poweredByImage"
          priority
        />
      </div>
    </div>
  );
};

export default LoanAdvantage;
