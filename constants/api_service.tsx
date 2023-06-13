import { LoanFormValues } from "@/models";
import { GET_CITY_URL, LOAN_ENQUIRY, GET_LOAN_PAGE_DATA } from "./api_urls";

export const getCities = async () => {
  try {
    const response = await fetch(GET_CITY_URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const loanEnquiry = async (data: LoanFormValues) => {
  try {
    // console.log(data);
    const response = await fetch(LOAN_ENQUIRY, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getLoanPageData = async () => {
  try {
    const response = await fetch(GET_LOAN_PAGE_DATA);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};
