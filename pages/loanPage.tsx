import React from "react";
import styles from "../styles/LoanPage.module.scss";
import LoanAdvantage from "@/components/LoanAdvantage";
import LoanCards from "@/components/LoanCards";
type Props = {};

const loanPage = (props: Props) => {
  return (
    <div className={styles.loan_page}>
      <div className={styles.loan_advantage}>
        <LoanAdvantage />
      </div>

      <div className={styles.loan_advantage_card}>
        <LoanCards />
      </div>
    </div>
  );
};

export default loanPage;
