import styles from "../styles/RouteNavigation.module.scss";
import Link from "next/link";
/* eslint-disable-next-line */
export interface RouteNavigationProps {}

export function RouteNavigation(props: RouteNavigationProps) {
  return (
    <div className={styles.route_navigation}>
      <div className={styles.navigation_link}>
        <Link href="/flights">Home</Link>
      </div>
      <div className={styles.navigation_arrow}>{">"}</div>
      <div>Loans</div>
    </div>
  );
}

export default RouteNavigation;
