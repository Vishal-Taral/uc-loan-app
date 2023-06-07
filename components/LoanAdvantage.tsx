import React from "react";
import styles from "../styles/LoanAdvantage.module.scss";
// import { ReactComponent as MagninfyingIcon } from "../public/Images/magninfyingIcon.svg";
// import { ReactComponent as CheckIcon } from '../public/CheckIcon.svg';

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
          </div>

          <div className={styles.document_main_container}>
            <h1 className={styles.title}>Documents Required</h1>
            <div className={styles.document_list}>
              <div className={styles.documents}>
                {firstHalfOfArray.map((data, index) => {
                  return (
                    <div key={index} className={styles.checkIcon_documentName}>
                      {/* <CheckIcon /> */}
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
    </div>
  );
};

export default LoanAdvantage;
