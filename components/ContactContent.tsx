import Image from "next/image";
import styles from "../styles/ContactBanner.module.scss";
import { ContactInfo } from "@/models";
import ContactUsCallImage from "../public/images/contactUsCallIcon.svg";
import ContactUSMessageImage from "../public/images/contactUsMessageIcon.svg";

const ContactContent = (props: ContactInfo) => {
  return (
    <div className={styles.contact_cont_container}>
      {/* <ContactUSMessageImage /> */}
      <Image
        src={props.contactIcon}
        alt="Contact us Image"
        width={52}
        height={40}
      />
      <div>
        <h2 className={styles.contact_text}>{props.contactSource}</h2>
        <h2 className={styles.contact}>{props.contactAt}</h2>
      </div>
    </div>
  );
};

export default ContactContent;
