import React from "react";
import styles from "./page.module.css";

function Referral() {
  return (
    <div className={styles.container}>
      <div className={styles.inputRow}>
        <div type="text" placeholder="First Name" className={styles.label1}>
          Your Referral Id:
        </div>
        <div type="text" placeholder="Last Name" className={styles.inputcol2}>
          Map referral Id
        </div>
      </div>
    </div>
  );
}

export default Referral;
