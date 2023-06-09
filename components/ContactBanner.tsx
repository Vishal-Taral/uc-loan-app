import React from "react";
import ContactUsCallImage from "../public/Images/contactUsCallIcon.svg";
import ContactUSMessageImage from "../public/Images/contactUsMessageIcon.svg";
import Image from "next/image";
import styles from "../styles/ContactBanner.module.scss";
type Props = {};

const ContactBanner = (props: Props) => {
  return (
    <div className={styles.contact_container}>
      {/* <div className={styles.contact_content}> */}
      <h2 className={styles.contact_header}>Contact US</h2>
      {/* </div> */}
      <div className={styles.contact_content}>
        <div className={styles.contact_cont_container}>
          {/* <ContactUsCallImage /> */}
          <Image src={ContactUsCallImage} alt="Contact us Image" />
          <div>
            <h2 className={styles.contact_text}>
              For Enquiries,write to us at
            </h2>
            <h2 className={styles.contact}>loan@udchalo.com</h2>
          </div>
        </div>
        <div className={styles.contact_cont_container}>
          {/* <ContactUSMessageImage /> */}
          <Image src={ContactUSMessageImage} alt="Contact us Image" />
          <div>
            <h2 className={styles.contact_text}>You can also call us on</h2>
            <h2 className={styles.contact}>+91 9272203030</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
