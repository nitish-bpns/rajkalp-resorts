"use client";
import React, { useState } from "react";
import styles from "../login/login.module.css";
import Image from "next/image";
import loginbg from "../../../public/assets/rajkalp/loginbg.png";
import Footer from "@/components/footer/Footer";
import logo from "./../../../public/assets/rajkalp/logo2.png";
import Link from "next/link";

function Confirmation() {
  const [ref, setRef] = useState(true);

  const handleRefYes = () => {
    setRef(true);
  };

  const handleRefNo = () => {
    setRef(false);
  };

  return (
    <>
      <Image
        src={loginbg}
        alt="img"
        width={2000}
        height="auto"
        className={styles.loginbg}
      />
      <div className={styles.container}>
        <div className={styles.col1c}>
          <Image
            src={logo}
            alt="img"
            width={1500}
            height="auto"
            className={styles.logo}
          />
          <div className={styles.head1}>Confirmation Page</div>

          <div className={styles.inputRow}>
            <div
              type="text"
              placeholder="First Name"
              className={styles.inputcol1}
            >
              Name
            </div>
            <div
              type="text"
              placeholder="Last Name"
              className={styles.inputcol2}
            >
              Title
            </div>
          </div>
          <div
            type="text"
            placeholder="Email Address"
            className={styles.input2}
          >
            mail@mail.com
          </div>

          <div
            type="text"
            placeholder="Mobile Number"
            className={styles.input2}
          >
            98798798788
          </div>

          <div className={styles.inputRow}>
            <div
              type="text"
              placeholder="DOB (DD/MM/YYYY)"
              className={styles.inputcol1}
            >
              02/02/2000
            </div>
            <div type="text" placeholder="Gender" className={styles.inputcol2}>
              Male
            </div>
          </div>

          <div
            type="password"
            placeholder="Enter Password"
            className={styles.input5}
          >
            Password
          </div>

          <div className={styles.ref}>Referal Id: RJR987872</div>

          <Link className={styles.link2} href="/dashboard">
            <button className={styles.submitBtn2}>Create Account</button>
          </Link>
        </div>
        <div className={styles.col2}>
          <div className={styles.head2}>Already have an account?</div>
          <div className={styles.head3}>
            Sign In and discover a great amount of new opportunities!
          </div>
          <Link href="/signup2" className={styles.link}>
            <button className={styles.nextBtn}>Signin</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Confirmation;
