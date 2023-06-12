// import styles from "@/styles/Home.module.css";
import LoanPageBanner from "@/components/LoanPageBanner";
import ContactBanner from "@/components/ContactBanner";
import LoanAdvantage from "@/components/LoanAdvantage";
import { useEffect, useState } from "react";
import { getLoanPageData } from "@/constants/api_service";
import { LoanPageData } from "@/models";

const Home = () => {
  const [loanPageData, setLoanPageData] = useState<LoanPageData>({});
  useEffect(() => {
    getLoanData();
  }, []);

  const getLoanData = async () => {
    const Data = await getLoanPageData();
    setLoanPageData(Data);
  };
  return (
    <>
      <section>
        {loanPageData.bannerData && loanPageData.contactUsData && (
          <LoanPageBanner
            bannerData={loanPageData.bannerData}
            contactUsData={loanPageData.contactUsData}
          />
        )}
      </section>
      <section>
        <LoanAdvantage />
      </section>
      <section style={{ marginTop: "13rem" }}>
        {loanPageData.contactUsData && (
          <ContactBanner contactUsData={loanPageData.contactUsData} />
        )}
      </section>
    </>
  );
};

export default Home;
