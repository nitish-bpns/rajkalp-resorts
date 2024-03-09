import React from "react";
import styles from "./page.module.css";

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.inputRow}>
        <div type="text" placeholder="First Name" className={styles.label1}>
          First Name
        </div>
        <div type="text" placeholder="Last Name" className={styles.inputcol2}>
          Map First name
        </div>
      </div>

      <div className={styles.inputRow}>
        <div type="text" placeholder="First Name" className={styles.label1}>
          Last Name
        </div>
        <div type="text" placeholder="Last Name" className={styles.inputcol2}>
          Map Last name
        </div>
      </div>

      <div className={styles.inputRow}>
        <div type="text" placeholder="First Name" className={styles.label1}>
          Email Id:
        </div>
        <div type="text" placeholder="Last Name" className={styles.inputcol2}>
          Map Email id
        </div>
      </div>

      <div className={styles.inputRow}>
        <div type="text" placeholder="First Name" className={styles.label1}>
          Date of Birth:
        </div>
        <div type="text" placeholder="Last Name" className={styles.inputcol2}>
          Map DOB
        </div>
      </div>

      <div className={styles.inputRow}>
        <div type="text" placeholder="First Name" className={styles.label1}>
          Gender
        </div>
        <div type="text" placeholder="Last Name" className={styles.inputcol2}>
          Map gender
        </div>
      </div>
    </div>
  );
}

export default Profile;
