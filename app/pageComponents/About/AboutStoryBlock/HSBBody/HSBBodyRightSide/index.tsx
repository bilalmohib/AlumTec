import { useState } from "react";

import Image from "next/image";

import styles from "./style.module.css";
import HSBBodyRSControls from "./HSBBodyRSControls";
import HSBHeader from "../../HSBHeader";

const HSBBodyRightSide = () => {
  return (
    <div className={styles.servicesCardContainer}>
      <div className={styles.mobileControls}>
        <HSBBodyRSControls />
      </div>
      <div className="mt-0">
        <HSBHeader />
      </div>
      <div className={styles.servicesDescription}>
        Alumtec Glazing solution Inc. offer a complete range of engineering
        services to our client include the initial design that offering most
        economical solutions and meet or exceed the building codes.
        <br />
        With our professional and expert designers, we provide to our client a
        complete detailed shop drawings, production drawings and as build
        drawings.
      </div>

      <div className={styles.desktopControls}>
        {/* <HSBBodyRSControls /> */}
      </div>
    </div>
  );
};
export default HSBBodyRightSide;
