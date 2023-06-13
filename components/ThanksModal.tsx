import styles from "../styles/ThanksModal.module.scss";
import Image from "next/image";
import React, { ReactNode } from "react";
import CloseIcon from "../public/Images/closeIcon.svg";
export interface ThanksModal {
  children?: ReactNode;
}

const ThanksModal = ({ onClose, children }: any) => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_content}>
        <div className={styles.close_btn} onClick={onClose}>
          {/* <CloseIcon /> */}
          <Image src={CloseIcon} alt="CloseIcon" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ThanksModal;
