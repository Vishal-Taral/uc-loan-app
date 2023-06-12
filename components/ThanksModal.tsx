import styles from "../styles/ThanksModal.module.scss";
import Image from "next/image";
import React, { ReactNode } from "react";
import ContactUsCallImage from "../public/Images/contactUsCallIcon.svg";
import ContactUSMessageImage from "../public/Images/contactUsMessageIcon.svg";
import ThanksIcon from "../public/Images/thankYouIcon.svg";
import CloseIcon from "../public/Images/closeIcon.svg";
import ContactContent from "./ContactContent";
import { ContactInfo } from "@/models";
import ThanksContent from "./ThanksContent";
export interface ThanksModal {
  children?: ReactNode;
}

const ThanksModal = ({ onClose, contactUsData, children }: any) => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_content}>
        <div className={styles.close_btn} onClick={onClose}>
          {/* <CloseIcon /> */}
          <Image src={CloseIcon} alt="CloseIcon" />
        </div>
        {/* <ThanksIcon />
        <Image src={ThanksIcon} alt="ThanksIcon" />

        <h2 className={styles.modal_text}>
          Thank you for your interest in udChalo loans
        </h2>
        <h2 className={styles.modal_message}>
          We will be connecting with you shortly
        </h2>
        <button className={styles.modal_btn}>Continue</button>
 
        {contactUsData.map((contactInfo: ContactInfo) => (
          <div key={contactInfo.id}>
            <ContactContent
              id={contactInfo.id}
              contactIcon={contactInfo.contactIcon}
              contactAt={contactInfo.contactAt}
              contactSource={contactInfo.contactSource}
            />
          </div>
        ))} */}
        {/* <div> */}
        {contactUsData && children}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ThanksModal;
