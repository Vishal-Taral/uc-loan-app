import styles from "../styles/ThanksModal.module.scss";
import Image from "next/image";
import React from "react";
import ContactUsCallImage from "../public/Images/contactUsCallIcon.svg";
import ContactUSMessageImage from "../public/Images/contactUsMessageIcon.svg";
import ThanksIcon from "../public/Images/thankYouIcon.svg";
import CloseIcon from "../public/Images/closeIcon.svg";
type Props = {};

const ThanksModal = ({ onClose }: any) => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_content}>
        <div className={styles.close_btn} onClick={onClose}>
          {/* <CloseIcon /> */}
          <Image src={CloseIcon} alt="CloseIcon" />
        </div>
        {/* <ThanksIcon /> */}
        <Image src={ThanksIcon} alt="ThanksIcon" />

        <h2 className={styles.modal_text}>
          Thank you for your interest in udChalo loans
        </h2>
        <h2 className={styles.modal_message}>
          We will be connecting with you shortly
        </h2>
        <button className={styles.modal_btn}>Continue</button>
        <div className={styles.modal_contact_container}>
          <div className={styles.modal_contact}>
            {/* <ContactUsCallImage /> */}
            <Image src={ContactUsCallImage} alt="ContactUsCallImage" />

            <div className={styles.contact_text_container}>
              <h2 className={styles.contact_text}>
                For Enquiries,write to us at
              </h2>
              <h2 className={styles.contact}>loan@udchalo.com</h2>
            </div>
          </div>
          <div className={styles.modal_contact}>
            {/* <ContactUSMessageImage /> */}
            <Image src={ContactUSMessageImage} alt="ContactUSMessageImage" />

            <div className={styles.contact_text_container}>
              <h2 className={styles.contact_text}>You can also call us on</h2>
              <h2 className={styles.contact}>+91 9272203030</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksModal;
