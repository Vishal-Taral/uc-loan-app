import React from "react";
import styles from "../styles/LoanPage.module.scss";
import LoanAdvantage from "@/components/LoanAdvantage";
type Props = {};

const loanPage = (props: Props) => {
  return (
    <div className={styles.loan_page}>
      <div className={styles.loan_advantage}>
        <LoanAdvantage />
      </div>
    </div>
  );
};

export default loanPage;
