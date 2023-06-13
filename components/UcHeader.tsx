import styles from "../styles/UcHeader.module.scss";
import { useRouter } from "next/router";

import ProfileIcon from "../public/images/default-profile.svg";
import FlightsIcon from "../public/images/flight_icon.svg";
import TrainsIcon from "../public/images/train-icon.svg";
import HotelsIcon from "../public/images/hotel_icon.svg";
import BusesIcon from "../public/images/bus_icon.svg";
import HolidaysIcon from "../public/images/holiday-icon.svg";
import SupportIcon from "../public/images/Support icon.svg";
import MainLogo from "../public/images/main_logo.svg";
import ProfilePic from "../public/images/profile_pic.svg";
import MaskIcon from "../public/images/Mask_Icon.svg";
import LeftArrowIcon from "../public/images/left_arrow.svg";
import SettingIcon from "../public/images/setting_icon.svg";
import NotificationIcon from "../public/images/notification_icon.svg";

import Link from "next/link";
import RouteNavigation from "./RouteNavigation";
import Image from "next/image";

/* eslint-disable-next-line */
export interface UcHeaderProps {}

export function UcHeader(props: UcHeaderProps) {
  const router = useRouter();
  const routeName = router.pathname;
  return (
    <div className={styles.header_container}>
      <div className={styles.desktop_header}>
        <div className={styles.top_header_container}>
          <div className={styles.left}>
            <Link className={styles.icon} href="/"></Link>
          </div>
          <div className={styles.center}>
            <Link href="#" className={`${styles.navLink}  ${styles.active}`}>
              Travel
            </Link>
            <Link href="#" className={styles.navLink}>
              Electronics
            </Link>
            <Link href="#" className={styles.navLink}>
              Finance
            </Link>
            <Link href="#" className={styles.navLink}>
              Housing
            </Link>
          </div>
        </div>

        {router.route.split("/").length > 2 ? (
          <RouteNavigation />
        ) : (
          <div className={styles.sub_header_container}>
            <div className={styles.sub_header_item}>
              <div
                className={`${styles.sub_header_icon_text} ${
                  routeName === "/flights" ? styles.border_active : ""
                }`}
              >
                <span>
                  {/* <FlightsIcon></FlightsIcon> */}
                  <Image src={FlightsIcon} alt="FlightsIcon" />
                </span>
                <div className={styles.sub_header_text}>
                  <Link
                    className={`${
                      routeName === "/flights" ? styles.active : ""
                    }`}
                    href="/flights"
                  >
                    Flights
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.sub_header_item}>
              <div className={styles.sub_header_icon_text}>
                <span>
                  {/* <TrainsIcon></TrainsIcon> */}
                  <Image src={TrainsIcon} alt="TrainsIcon" />
                </span>
                <div className={styles.sub_header_text}>Trains</div>
              </div>
            </div>
            <div className={styles.sub_header_item}>
              <div className={styles.sub_header_icon_text}>
                <span>
                  {/* <HotelsIcon></HotelsIcon> */}
                  <Image src={HotelsIcon} alt="HotelsIcon" />
                </span>
                <div className={styles.sub_header_text}>Flights</div>
              </div>
            </div>
            <div className={styles.sub_header_item}>
              <div className={styles.sub_header_icon_text}>
                <span>
                  {/* <BusesIcon></BusesIcon> */}
                  <Image src={BusesIcon} alt="BusesIcon" />
                </span>
                <div className={styles.sub_header_text}>Buses</div>
              </div>
            </div>
            <div className={styles.sub_header_item}>
              <div className={styles.sub_header_icon_text}>
                <span>
                  {/* <HolidaysIcon></HolidaysIcon> */}
                  <Image src={HolidaysIcon} alt="HolidaysIcon" />
                </span>
                <div className={styles.sub_header_text}>Holidays</div>
              </div>
            </div>
            <div className={styles.sub_header_item}>
              <div className={styles.sub_header_icon_text}>
                <span>
                  {/* <SupportIcon></SupportIcon> */}
                  <Image src={SupportIcon} alt="SupportIcon" />
                </span>
                <div className={styles.sub_header_text}>Support</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.mobile_search_header}>
        <div className={styles.search_header_column}>
          <div className={styles.search_text_section}>
            <span>
              {/* <LeftArrowIcon className={styles.search_icon}></LeftArrowIcon> */}
              <Image src={LeftArrowIcon} alt="LeftArrowIcon" />
            </span>
            <div className={styles.search_text}>Search</div>
          </div>
          <div className={styles.support_text_section}>
            <span>
              {/* <SettingIcon className={styles.support_icon}></SettingIcon> */}
              <Image src={SettingIcon} alt="SettingIcon" />
            </span>
            <div className={styles.support_text}>Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UcHeader;

// {/* <div className={styles.right}>
// <div className={styles.profile}>
//   <span className={styles.notification_icon}>
//     {/* <NotificationIcon title="NotificationIcon" /> */}
//     <Image src={NotificationIcon} alt="NotificationIcon" />
//   </span>
//   <span className={styles.profile_icon}>
//     {/* <ProfileIcon title="ProfileIcon" /> */}
//     <Image src={ProfileIcon} alt="ProfileIcon" />
//   </span>
//   <span className={styles.login_text}>Log in</span>
// </div>
// </div> */}
