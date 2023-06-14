// import styles from "@/styles/Home.module.css";
import LoanPageBanner from "@/components/LoanPageBanner";
import ContactBanner from "@/components/ContactBanner";
import LoanAdvantage from "@/components/LoanAdvantage";
import { useEffect, useState } from "react";
// import { getLoanPageData } from "@/constants/api_service";
import { LoanPageData } from "@/models";
import UcHeader from "@/components/UcHeader";

const Home = () => {
  const [loanPageData, setLoanPageData] = useState<LoanPageData>({});
  useEffect(() => {
    getLoanData();
  }, []);

  const getLoanData = async () => {
    // const Data = await getLoanPageData();
    const loanPageData = {
      bannerData: {
        id: 1,
        header: "udChalo De Aapka Saath, Jab",
        headerHighlighted: " Paiso Ki Ho Baat",
        subHeader: "Get Personal Loan Upto 7.5 Lacs",
        timeLine: "Disbursed within 48 hrs",
      },
      contactUsData: [
        {
          id: 1,
          contactIcon: "images/contactUsCallIcon.svg",
          contactSource: "For Enquiries,write to us at",
          contactAt: "loan@udchalo.com",
        },
        {
          id: 2,
          contactIcon: "images/contactUsMessageIcon.svg",
          contactSource: "You can also call us on",
          contactAt: "+91 9272203030",
        },
      ],
    };

    setLoanPageData(loanPageData);
  };
  return (
    <>
      <section>
        <UcHeader />
      </section>
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
      <section>
        {loanPageData.contactUsData && (
          <ContactBanner contactUsData={loanPageData.contactUsData} />
        )}
      </section>
    </>
  );
};

export default Home;
