import React from "react";
import Image from "next/image";
import ThanksIcon from "../public/Images/thankYouIcon.svg";
import ContactUsCallImage from "../public/Images/contactUsCallIcon.svg";
import ContactUSMessageImage from "../public/Images/contactUsMessageIcon.svg";
import { ContactInfo } from "@/models";
import styles from "../styles/ThanksModal.module.scss";

// type Props = {};
export interface ThanksContentProps {
  contactUsData?: ContactInfo[];
}

const ThanksContent = ({ contactUsData }: ThanksContentProps) => {
  return (
    <div className={styles.modal_content_container}>
      <Image src={ThanksIcon} alt="ThanksIcon" />
      <h2 className={styles.modal_text}>
        Thank you for your interest in udChalo loans
      </h2>
      <h2 className={styles.modal_message}>
        We will be connecting with you shortly
      </h2>
      <button className={styles.modal_btn}>Continue</button>
      <div className={styles.modal_contact_container}>
        {contactUsData?.map((contactInfo: ContactInfo) => (
          <div key={contactInfo.id} className={styles.modal_contact}>
            <Image
              src={
                contactInfo.contactIcon === "images/contactUsCallIcon.svg"
                  ? ContactUSMessageImage
                  : ContactUsCallImage
              }
              width={52}
              height={40}
              alt="ContactUsCallImage"
            />

            <div className={styles.contact_text_container}>
              <h2 className={styles.contact_text}>
                {contactInfo.contactSource}
              </h2>
              <h2 className={styles.contact}>{contactInfo.contactAt}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThanksContent;
