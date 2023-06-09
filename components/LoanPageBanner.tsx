import styles from "../styles/LoanPageBanner.module.scss";
import RouteNavigation from "./RouteNavigation";
import ContactBanner from "./ContactBanner";
import { useState, forwardRef } from "react";
import LoanBannerImage from "../public/Images/loanBannerImage.svg";
import { UseFormRegister, useForm } from "react-hook-form";
import Image from "next/image";
import ThanksModal from "./ThanksModal";
// import styles from "../styles/LoanPage.module.scss";
import LoanAdvantage from "@/components/LoanAdvantage";
/* eslint-disable-next-line */
export interface LoanPageBannerProps {}

interface LoanFormValues {
  name: string;
  mobileNumber: string;
  email: string;
  city: string;
}

export function LoanPageBanner(props: LoanPageBannerProps) {
  const loanForm = useForm<LoanFormValues>();
  const { register, control, handleSubmit, formState } = loanForm;
  const { errors } = formState;
  const bannerTexts = {
    header: "udChalo De Aapka Saath, Jab",
    headerHighlighted: " Paiso Ki Ho Baat",
    subHeader: "Get Personal Loan Upto 7.5 Lacs",
    timeLine: "Disbursed within 48 hrs",
  };
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onsubmit = (data: LoanFormValues) => {
    console.log("form Submitted", data);
    setShowModal(!showModal);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    const allowedCharacters = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    const target = event.target as HTMLInputElement;
    if (
      target.value.length! <= 10 &&
      !allowedKeys.includes(event.key) &&
      !allowedCharacters.includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  const Select = forwardRef<
    HTMLSelectElement,
    ReturnType<UseFormRegister<LoanFormValues>>
  >(({ onChange, onBlur, name }, ref) => (
    <select
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      className={styles.inp}
    >
      <option value="">Select City</option>
      <option value="Pune">Pune</option>
      <option value="Mumbai">Mumbai</option>
    </select>
  ));
  Select.displayName = "Select";

  return (
    <div className={styles.container}>
      <RouteNavigation />
      <div className={styles.loanBanner}>
        <div className={styles.loanTexts}>
          <h1 className={styles.header}>
            {bannerTexts.header}
            <span className={styles.headerHighlight}>
              {bannerTexts.headerHighlighted}
            </span>
          </h1>
          <h2 className={styles.subHeader}>{bannerTexts.subHeader}</h2>
          <h2 className={styles.timeLine}>{bannerTexts.timeLine}</h2>
        </div>
        <div>
          {/* <LoanBannerImage /> */}
          <Image
            src={LoanBannerImage}
            alt="LoanBannerImage"
            className={styles.man_image}
          />
        </div>
      </div>
      <div className={styles.loanFormContainer}>
        <h2 className={styles.header}>Apply Now</h2>
        <form className={styles.loanForm} onSubmit={handleSubmit(onsubmit)}>
          <div>
            <input
              className={styles.inp}
              type="text"
              placeholder="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <p className={styles.error}>{errors.name?.message}</p>
          </div>
          <div>
            <input
              className={`${styles.inp_btn}, ${styles.inp}`}
              type="text"
              min={10}
              placeholder="Phone Number"
              onKeyDown={(e) => handleKeyDown(e)}
              maxLength={10}
              {...register("mobileNumber", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
                pattern: {
                  value: /^(?:\+?91)?[6-9]\d{9}$/,
                  message: "Invalid mobile number format",
                },
              })}
            />
            {errors.mobileNumber && (
              <p className={styles.error}>{errors.mobileNumber?.message}</p>
            )}
          </div>
          <div>
            <input
              className={styles.inp}
              type="email"
              placeholder="Email ID (Optional)"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            <p className={styles.error}>{errors.email?.message}</p>
          </div>
          <div>
            <span className={styles.inp_box_heading}>City</span>
            <Select
              {...register("city", {
                required: {
                  value: true,
                  message: "City is required",
                },
              })}
            />
            <p className={styles.error}>{errors.city?.message}</p>
          </div>
          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>

      {showModal && <ThanksModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
export default LoanPageBanner;
