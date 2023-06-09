import styles from "../styles/LoanPageBanner.module.scss";
import RouteNavigation from "./RouteNavigation";
import { useState, forwardRef, useEffect } from "react";
import LoanBannerImage from "../public/Images/loanBannerImage.svg";
import { UseFormRegister, useForm } from "react-hook-form";
import Image from "next/image";
import ThanksModal from "./ThanksModal";
import { getCities, loanEnquiry } from "../constants/api_service";
import { City, LoanBannerProps, LoanFormValues } from "@/models";
/* eslint-disable-next-line */

export function LoanPageBanner({ bannerData }: LoanBannerProps) {
  const loanForm = useForm<LoanFormValues>();
  const { register, handleSubmit, formState } = loanForm;
  const [cities, setCities] = useState<City[]>([]);
  const { errors } = formState;

  useEffect(() => {
    getCitiesData();
  }, []);

  const getCitiesData = async () => {
    const citiesData = await getCities();
    setCities(citiesData);
  };

  const postLoanEnquiry = async (data: LoanFormValues) => {
    await loanEnquiry(data);
    setShowModal(!showModal);
  };

  const bannerTexts = {
    header: "udChalo De Aapka Saath, Jab",
    headerHighlighted: " Paiso Ki Ho Baat",
    subHeader: "Get Personal Loan Upto 7.5 Lacs",
    timeLine: "Disbursed within 48 hrs",
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
      {cities.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
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
            {bannerData.header}
            <span className={styles.headerHighlight}>
              {bannerTexts.headerHighlighted}
            </span>
          </h1>
          <h2 className={styles.subHeader}>{bannerData.subHeader}</h2>
          <h2 className={styles.timeLine}>{bannerData.timeLine}</h2>
        </div>
        <div>
          <Image src={LoanBannerImage} alt="LoanBannerImage" />
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
            {errors.name && (
              <p className={styles.error}>{errors.name?.message}</p>
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
            {errors.email && (
              <p className={styles.error}>{errors.email?.message}</p>
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
              <p className={styles.error}>{errors.city?.message}</p>
            )}
          </div>
          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>

      {showModal && <ThanksModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
export default LoanPageBanner;
