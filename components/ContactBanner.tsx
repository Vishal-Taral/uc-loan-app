import React from "react";
import styles from "../styles/ContactBanner.module.scss";
import ContactContent from "./ContactContent";
import { ContactBannerProps, ContactInfo } from "@/models";

const ContactBanner = ({ contactUsData }: ContactBannerProps) => {
  return (
    <div className={styles.contact_container}>
      <h2 className={styles.contact_header}>Contact US</h2>
      <div className={styles.contact_content}>
        {contactUsData.map((contactInfo: ContactInfo) => (
          <div key={contactInfo.id}>
            <ContactContent
              id={contactInfo.id}
              contactIcon={contactInfo.contactIcon}
              contactAt={contactInfo.contactAt}
              contactSource={contactInfo.contactSource}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactBanner;
