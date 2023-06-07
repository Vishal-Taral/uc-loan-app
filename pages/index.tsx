import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import LoanPageBanner from "@/components/LoanPageBanner";
import ContactBanner from "@/components/ContactBanner";
import LoanAdvantage from "@/components/LoanAdvantage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section>
        <LoanPageBanner />
      </section>
      <section>
        <LoanAdvantage />
      </section>
      <section style={{ marginTop: "13rem" }}>
        <ContactBanner />{" "}
      </section>
    </>
  );
}
