import styles from "../styles/LoanPageBanner.module.scss";
import RouteNavigation from "./RouteNavigation";
import { useState, forwardRef, useEffect } from "react";
import noteIcon from "../public/images/noteIcon.svg";
import LoanBannerImage from "../public/images/loanBannerImage.svg";
import { UseFormRegister, useForm } from "react-hook-form";
import Image from "next/image";
import ThanksModal from "./ThanksModal";
import { getCities, loanEnquiry } from "../constants/api_service";
import { LoanBannerProps, LoanFormValues } from "@/models";
import ThanksContent from "./ThanksContent";
/* eslint-disable-next-line */

export function LoanPageBanner({ bannerData, contactUsData }: LoanBannerProps) {
  const loanForm = useForm<LoanFormValues>();
  const { register, handleSubmit, formState } = loanForm;
  const [cities, setCities] = useState<[]>([]);
  const { errors } = formState;

  useEffect(() => {
    getCitiesData();
  }, []);

  const getCitiesData = async () => {
    const citiesData = await getCities();
    const cityArray = citiesData.find(
      (data: any) => data.name === "loanEnquiryCity"
    );
    setCities(cityArray.target);
  };

  const postLoanEnquiry = async (data: LoanFormValues) => {
    try {
      await loanEnquiry(data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const onsubmit = (data: LoanFormValues) => {
    postLoanEnquiry(data);
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
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  ));
  Select.displayName = "Select";

  return (
    <div className={styles.container}>
      <RouteNavigation />
      <div className={styles.loanBanner}>
        <div className={styles.loanTexts}>
          <h1 className={styles.header}>
            {bannerData?.header}
            <span className={styles.headerHighlight}>
              {bannerData?.headerHighlighted}
            </span>
          </h1>
          <h2 className={styles.subHeader}>{bannerData?.subHeader}</h2>
          <h2 className={styles.timeLine}>{bannerData?.timeLine}</h2>
        </div>
        <div className={styles.banner_image}>
          <Image
            src={LoanBannerImage}
            alt="LoanBannerImage"
            className={styles.man_image}
          />
        </div>
      </div>
      <div className={styles.loanFormContainer}>
        <h2 className={styles.header}>Apply Now</h2>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className={styles.loanForm}>
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
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Invalid name format",
                  },
                })}
              />
              {errors.name && (
                <p className={styles.error}>{errors?.name?.message}</p>
              )}
            </div>
            <div>
              <input
                className={`${styles.inp_btn}, ${styles.inp}`}
                type="text"
                min={10}
                placeholder="Phone Number"
                onKeyDown={(e) => handleKeyDown(e)}
                maxLength={10}
                {...register("phone", {
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
              {errors?.phone && (
                <p className={styles.error}>{errors?.phone?.message}</p>
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
              {errors.email && (
                <p className={styles.error}>{errors?.email?.message}</p>
              )}
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
              {errors.city && (
                <p className={styles.error}>{errors?.city?.message}</p>
              )}
            </div>
          </div>
          <div className={styles.note_container}>
            <Image src={noteIcon} alt="noteIcon" />
            <p className={styles.note}>
              <span className={styles.note_title}>Note :</span> The information,
              as required above, is shared for the purpose of processing and
              verifying my loan application and I hereby confirm my consent for
              sharing the same.
            </p>
          </div>
          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>

      {showModal && (
        <ThanksModal onClose={() => setShowModal(false)}>
          {contactUsData && <ThanksContent contactUsData={contactUsData} />}
        </ThanksModal>
      )}
    </div>
  );
}
export default LoanPageBanner;
