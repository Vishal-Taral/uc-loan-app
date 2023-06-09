import { ReactNode } from "react";

export interface City {
  id: number;
  name: string;
}
export interface LoanFormValues {
  name: string;
  mobileNumber: string;
  email: string;
  city: string;
}

export interface ContactInfo {
  id: number;
  contactIcon: ReactNode;
  contactSource: string;
  contactAt: string;
}

export interface LoanPageBannerTexts {
  id: number;
  header: string;
  headerHighlighted: string;
  subHeader: string;
  timeLine: string;
}

export interface LoanPageData {
  bannerData?: LoanPageBannerTexts;
  contactUsData?: ContactInfo[];
}

export interface ContactBannerProps {
  contactUsData: ContactInfo[];
}

export interface LoanBannerProps {
  bannerData: LoanPageBannerTexts;
}
